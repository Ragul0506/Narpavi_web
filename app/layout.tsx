import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://sri-narpavi-beauty-parlour.netlify.app'),
  title: {
    default: 'Sri Narpavi Beauty Parlour | Bridal Makeup in Swamimalai',
    template: '%s | Sri Narpavi Beauty Parlour'
  },
  description:
    'Sri Narpavi Beauty Parlour in Swamimalai, Kumbakonam for bridal makeup, engagement makeup, baby shower makeup, saree draping, and jewellery rental.',
  applicationName: 'Sri Narpavi Beauty Parlour',
  authors: [{ name: 'Sri Narpavi Beauty Parlour' }],
  creator: 'Sri Narpavi Beauty Parlour',
  publisher: 'Sri Narpavi Beauty Parlour',
  keywords: [
    'Sri Narpavi Beauty Parlour',
    'beauty parlour Swamimalai',
    'bridal makeup Kumbakonam',
    'engagement makeup',
    'saree draping',
    'jewellery rent',
    'baby shower makeup'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Sri Narpavi Beauty Parlour',
    title: 'Sri Narpavi Beauty Parlour | Bridal Makeup in Swamimalai',
    description:
      '4.8-star beauty parlour in Swamimalai offering bridal makeup, engagement makeup, saree draping, baby shower makeup, and jewellery rental.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Narpavi Beauty Parlour',
    description:
      'Premium bridal makeup, saree draping, jewellery rental, and celebration styling in Swamimalai.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFFDF9',
  colorScheme: 'light'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className="min-h-screen bg-parlour-cream-50 font-sans text-parlour-text-primary antialiased">
        <LanguageProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
