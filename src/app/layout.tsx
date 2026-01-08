import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConditionalNavbar } from "@/components/layout/ConditionalNavbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://codirect.com.br'),
  title: {
    default: "Codirect - Marketing e Vendas para Negócios Locais",
    template: "%s | Codirect"
  },
  description: "A estratégia de bastidores que gera lucro e previsibilidade para negócios locais. Método Codirect validado em +1.400 empresas.",
  keywords: ["marketing digital", "vendas", "negócios locais", "método codirect", "consultoria", "ROI"],
  authors: [{ name: "Codirect" }],
  creator: "Codirect",
  publisher: "Codirect",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://codirect.com.br',
    title: 'Codirect - Marketing e Vendas para Negócios Locais',
    description: 'A estratégia de bastidores que gera lucro e previsibilidade para negócios locais.',
    siteName: 'Codirect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codirect - Marketing e Vendas para Negócios Locais',
    description: 'A estratégia de bastidores que gera lucro e previsibilidade para negócios locais.',
  },
  alternates: {
    canonical: 'https://codirect.com.br',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://d335luupugsy2.cloudfront.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d335luupugsy2.cloudfront.net" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${inter.variable} font-sans min-h-screen antialiased`}
      >
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  );
}
