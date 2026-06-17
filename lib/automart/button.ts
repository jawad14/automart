import type { ButtonVariant } from '@/config/site.config';

export function btnClass(variant: ButtonVariant, size: 'md' | 'lg' = 'md'): string {
  const base = 'am-btn';
  const v = `am-btn-${variant}`;
  return size === 'lg' ? `${base} ${v} am-btn-lg` : `${base} ${v}`;
}
