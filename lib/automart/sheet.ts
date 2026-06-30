import 'server-only';
import { env } from '@/lib/env';

// Appends a submission row to the linked Google Sheet via an Apps Script Web App.
// Best-effort: no-op when GOOGLE_SHEET_URL is unset, and never throws — a Sheet
// failure must not break form submission (email is the source of truth).
export async function appendToSheet(payload: Record<string, string>): Promise<void> {
  const url = env.GOOGLE_SHEET_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Google Sheet logging failed:', err);
  }
}
