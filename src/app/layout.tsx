import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://handysof.com'),
  title: 'HandySof | Software Development & Digital Solutions',
  description:
    'HandySof builds modern, reliable and user-friendly software solutions, web applications and business management systems.',
  keywords: [
    'HandySof',
    'Software Development',
    'Web Applications',
    'Business Management Systems',
    'Custom Software',
    'Digital Solutions',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'HandySof' }],
  creator: 'HandySof',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://handysof.com',
    title: 'HandySof | Software Development & Digital Solutions',
    description:
      'HandySof builds modern, reliable and user-friendly software solutions, web applications and business management systems.',
    siteName: 'HandySof',
    images: [
      {
        url: '/images/logo-stacked.png',
        width: 1200,
        height: 1200,
        alt: 'HandySof Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HandySof | Software Development & Digital Solutions',
    description:
      'HandySof builds modern, reliable and user-friendly software solutions, web applications and business management systems.',
    images: ['/images/logo-stacked.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00608E',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans overflow-x-hidden" suppressHydrationWarning>
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-blue-600 focus:text-white focus:rounded-md focus:shadow-md"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
