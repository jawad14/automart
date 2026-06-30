import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { recipients, sendMail } from '@/lib/automart/email';
import { isRateLimited } from '@/lib/automart/rate-limit';
import { verifyRecaptcha } from '@/lib/automart/recaptcha-verify';
import { appendToSheet } from '@/lib/automart/sheet';

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(30),
  email: z.string().trim().email().max(120).optional().or(z.literal('')),
  year: z.string().trim().min(1).max(20),
  mkmodel: z.string().trim().min(1).max(120),
  parts: z.string().trim().min(1).max(2000),
  website: z.string().optional(), // honeypot
  recaptchaToken: z.string().optional().nullable(),
});

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(`quote:${ip}`)) {
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

    // Honeypot — silently accept bots without sending.
    if (data.website) return NextResponse.json({ ok: true });

    if (!(await verifyRecaptcha(data.recaptchaToken))) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed.' }, { status: 403 });
    }

    const email = data.email || '';

    await appendToSheet({
      type: 'quote',
      name: data.name,
      phone: data.phone,
      email,
      vehicle: `${data.year} ${data.mkmodel}`,
      parts: data.parts,
    });

    await sendMail({
      to: recipients.quote,
      replyTo: email || undefined,
      fromName: 'Automart Quote Requests',
      subject: `Quote Request — ${data.year} ${data.mkmodel} (${data.name})`,
      html: `
        <h2 style="margin:0 0 20px;font-family:sans-serif;color:#161616">New Quote Request</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;margin-bottom:24px">
          <tr><td style="padding:6px 20px 6px 0;color:#888;width:140px">Name</td><td><strong>${esc(data.name)}</strong></td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#888">Phone</td><td>${esc(data.phone)}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#888">Email</td><td>${email ? `<a href="mailto:${esc(email)}">${esc(email)}</a>` : '-'}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#888">Vehicle</td><td>${esc(data.year)} ${esc(data.mkmodel)}</td></tr>
        </table>
        <h3 style="font-family:sans-serif;font-size:14px;color:#555;margin:0 0 8px">Parts needed</h3>
        <p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap;margin:0">${esc(data.parts)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Quote API error:', err);
    return NextResponse.json(
      { error: 'Could not send your request. Please call us or try again.' },
      { status: 500 },
    );
  }
}
