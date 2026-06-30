import { env } from '@/lib/env';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(siteKey: string): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load reCAPTCHA'));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

// Returns a v3 token, or null when reCAPTCHA isn't configured / fails to load.
// A null token lets the form still submit; the server skips verification when
// no secret key is set.
export async function getRecaptchaToken(action: string): Promise<string | null> {
  const siteKey = env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) return null;
  try {
    await loadScript(siteKey);
    await new Promise<void>((resolve) => window.grecaptcha!.ready(() => resolve()));
    return await window.grecaptcha!.execute(siteKey, { action });
  } catch {
    return null;
  }
}
