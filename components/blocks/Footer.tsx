import Link from 'next/link';
import { Cluster, Container } from '@/components/ui/layout';
import { Small } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function Footer() {
  return (
    <footer className="border-border/60 mt-auto border-t py-8 sm:py-10">
      <Container size="lg" className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Small>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </Small>
        {siteConfig.social.length > 0 && (
          <Cluster as="nav" aria-label="Social" gap="md">
            {siteConfig.social.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </Cluster>
        )}
      </Container>
    </footer>
  );
}
