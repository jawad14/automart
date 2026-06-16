import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Jost } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { defaultMetadata } from '@/config/site.config';
import './globals.css';

const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

const fontDisplay = Jost({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e4002b' },
    { media: '(prefers-color-scheme: dark)', color: '#161616' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
