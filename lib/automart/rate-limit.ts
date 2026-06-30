import 'server-only';

// Lightweight in-memory rate limiter (per server instance). Good enough for a
// static-first marketing site; swap for a shared store if forms get heavy traffic.
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) return true;
  recent.push(now);
  hits.set(key, recent);
  return false;
}
