import 'server-only';
import nodemailer from 'nodemailer';
import { env } from '@/lib/env';
import { siteConfig } from '@/config/site.config';

// Central recipient config — RECIPIENT_EMAIL is the default, per-form vars override.
const DEFAULT_RECIPIENT = env.RECIPIENT_EMAIL || siteConfig.email;

export const recipients = {
  quote: env.QUOTE_TO_EMAIL || DEFAULT_RECIPIENT,
  register: env.REGISTER_TO_EMAIL || DEFAULT_RECIPIENT,
};

export function getTransporter() {
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT || 587,
    secure: (env.SMTP_PORT || 587) === 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });
}

type SendArgs = {
  to: string;
  replyTo?: string;
  fromName: string;
  subject: string;
  html: string;
};

export async function sendMail({ to, replyTo, fromName, subject, html }: SendArgs) {
  const transporter = getTransporter();
  if (!transporter) {
    throw new Error('SMTP is not configured (set SMTP_HOST / SMTP_USER / SMTP_PASS).');
  }
  await transporter.sendMail({
    from: `"${fromName}" <${env.SMTP_USER}>`,
    to,
    replyTo,
    subject,
    html,
  });
}
