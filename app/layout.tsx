import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import { Header, Footer } from '@/components/layout';
import portfolioData from '@/data/portfolio.json';

// Distinctive typography - Outfit for headings (geometric, modern)
const outfit = Outfit({
  variable: '--font-clash',
  subsets: ['latin'],
  display: 'swap',
});

// Plus Jakarta Sans for body (clean, contemporary)
const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-satoshi',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: portfolioData.personal.bio,
  keywords: ['iOS Developer', 'Swift', 'SwiftUI', 'UIKit', 'Mobile App Development', 'Pakistan', 'Muhammad Umer'],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.bio,
    type: 'website',
    locale: 'en_US',
    siteName: portfolioData.personal.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col relative">
            {/* Background noise texture */}
            <div className="fixed inset-0 noise-overlay pointer-events-none" />
            <Header />
            <main className="flex-1 relative z-0">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
