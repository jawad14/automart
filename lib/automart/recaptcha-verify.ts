import 'server-only';
import { env } from '@/lib/env';

// Verifies a reCAPTCHA v3 token. When no secret key is configured the check is
// skipped (returns true) so forms keep working in local development.
export async function verifyRecaptcha(token: string | null | undefined): Promise<boolean> {
  const secret = env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });
    const data = (await res.json()) as { success?: boolean; score?: number };
    return Boolean(data.success) && (data.score ?? 0) >= 0.5;
  } catch {
    return false;
  }
}
