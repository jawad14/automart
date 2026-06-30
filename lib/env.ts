import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error', 'fatal']).default('info'),
    RESEND_API_KEY: z.string().optional(),
    SMTP_URL: z.string().url().optional(),
    SENTRY_DSN: z.string().url().optional(),

    // SMTP (nodemailer) — required for form email delivery.
    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.coerce.number().optional(),
    SMTP_USER: z.string().optional(),
    SMTP_PASS: z.string().optional(),

    // Where form submissions are emailed. Falls back to RECIPIENT_EMAIL,
    // then to siteConfig.email.
    RECIPIENT_EMAIL: z.string().email().optional(),
    QUOTE_TO_EMAIL: z.string().email().optional(),
    REGISTER_TO_EMAIL: z.string().email().optional(),

    // reCAPTCHA v3 — verification is skipped when unset (dev convenience).
    RECAPTCHA_SECRET_KEY: z.string().optional(),

    // Google Apps Script Web App URL — when set, submissions are also logged
    // to the linked Google Sheet. Skipped when unset.
    GOOGLE_SHEET_URL: z.string().url().optional(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
    NEXT_PUBLIC_ANALYTICS_DOMAIN: z.string().optional(),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    LOG_LEVEL: process.env.LOG_LEVEL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SMTP_URL: process.env.SMTP_URL,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    QUOTE_TO_EMAIL: process.env.QUOTE_TO_EMAIL,
    REGISTER_TO_EMAIL: process.env.REGISTER_TO_EMAIL,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    GOOGLE_SHEET_URL: process.env.GOOGLE_SHEET_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ANALYTICS_DOMAIN: process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  },
  emptyStringAsUndefined: true,
});
