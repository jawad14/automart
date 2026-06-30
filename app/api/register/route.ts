import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { recipients, sendMail } from '@/lib/automart/email';
import { isRateLimited } from '@/lib/automart/rate-limit';
import { verifyRecaptcha } from '@/lib/automart/recaptcha-verify';
import { appendToSheet } from '@/lib/automart/sheet';

const schema = z.object({
  shop: z.string().trim().min(1).max(150),
  contact: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(30),
  email: z.string().trim().email().max(120),
  address: z.string().trim().min(1).max(250),
  ein: z.string().trim().max(50).optional().or(z.literal('')),
  monthly: z.string().trim().max(50).optional().or(z.literal('')),
  notes: z.string().trim().max(2000).optional().or(z.literal('')),
  website: z.string().optional(), // honeypot
  recaptchaToken: z.string().optional().nullable(),
});

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

const row = (label: string, value: string) =>
  `<tr><td style="padding:6px 20px 6px 0;color:#888;width:160px">${label}</td><td>${value || '-'}</td></tr>`;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(`register:${ip}`)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429 },
      );
    }

    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Please fill in the required fields.' }, { status: 400 });
    }
    const data = parsed.data;

    if (data.website) return NextResponse.json({ ok: true });

    if (!(await verifyRecaptcha(data.recaptchaToken))) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed.' }, { status: 403 });
    }

    await appendToSheet({
      type: 'register',
      name: data.contact,
      phone: data.phone,
      email: data.email,
      shop: data.shop,
      address: data.address,
      ein: data.ein || '',
      monthly: data.monthly || '',
      notes: data.notes || '',
    });

    await sendMail({
      to: recipients.register,
      replyTo: data.email,
      fromName: 'Automart Account Applications',
      subject: `New Account Application — ${data.shop}`,
      html: `
        <h2 style="margin:0 0 20px;font-family:sans-serif;color:#161616">New Account Application</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;margin-bottom:24px">
          ${row('Shop / Business', `<strong>${esc(data.shop)}</strong>`)}
          ${row('Primary contact', esc(data.contact))}
          ${row('Phone', esc(data.phone))}
          ${row('Email', `<a href="mailto:${esc(data.email)}">${esc(data.email)}</a>`)}
          ${row('Shop address', esc(data.address))}
          ${row('EIN', esc(data.ein || ''))}
          ${row('Monthly volume', esc(data.monthly || ''))}
        </table>
        ${
          data.notes
            ? `<h3 style="font-family:sans-serif;font-size:14px;color:#555;margin:0 0 8px">Notes</h3>
               <p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap;margin:0">${esc(data.notes)}</p>`
            : ''
        }
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Register API error:', err);
    return NextResponse.json(
      { error: 'Could not submit your application. Please call us or try again.' },
      { status: 500 },
    );
  }
}
