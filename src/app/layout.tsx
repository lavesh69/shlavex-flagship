import type { Metadata, Viewport } from 'next';
import { Cinzel, Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CursorSpotlight } from '@/components/CursorSpotlight';
import { OpeningCurtain } from '@/components/OpeningCurtain';

const displayFont = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const editorialFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const sansFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'SHLAVEX | Official Digital Flagship',
    template: '%s | SHLAVEX',
  },
  description:
    'SHLAVEX is a global institution built around people, strategy, quantitative research, technology, trading, engineering, finance, risk and operations. Precision beyond markets.',
  keywords: [
    'SHLAVEX',
    'Quantitative Research',
    'Algorithmic Trading',
    'High Performance Computing',
    'Financial Engineering',
    'Risk Management',
    'Lavesh Dobriyal',
  ],
  authors: [{ name: 'SHLAVEX' }],
  creator: 'SHLAVEX',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shlavex.com',
    title: 'SHLAVEX | Precision Beyond Markets',
    description:
      'Official Digital Flagship. A global institution built around people, strategy, quantitative research, technology, and engineering.',
    siteName: 'SHLAVEX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHLAVEX | Precision Beyond Markets',
    description:
      'Official Digital Flagship. Quantitative research, technology, and disciplined engineering.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${editorialFont.variable} ${sansFont.variable} dark`}>
      <body className="bg-[#050505] text-[#F4F4F4] min-h-screen font-sans flex flex-col antialiased selection:bg-white/20 selection:text-white relative">
        <OpeningCurtain />
        <CursorSpotlight />
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
