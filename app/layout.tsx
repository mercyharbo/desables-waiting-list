import FooterComp from '@/components/footer'
import Header from '@/components/header'
import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

// Using Schibsted Grotesk as a free alternative to Cabinet Grotesk (similar geometric sans-serif)
const SchibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-cabinet',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Desables', template: '%s | Desables' },
  description:
    'Desables makes learning accessible for people with disabilities — inclusive courses, accessible resources, and assistive learning tools.',
  keywords: [
    'accessibility',
    'disability',
    'inclusive learning',
    'assistive technology',
    'a11y',
    'Desables',
  ],
  authors: [{ name: 'Desables' }],
  creator: 'Desables Team',
  openGraph: {
    title: 'Desables — Accessible learning for people with disabilities',
    description:
      'Inclusive courses, accessible resources and tools for learners with disabilities.',
    siteName: 'Desables',
    type: 'website',
    images: [
      {
        url: '/hero-dark.png',
        width: 512,
        height: 512,
        alt: 'Desables logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desables — Accessible learning for people with disabilities',
    description:
      'Inclusive courses, accessible resources and tools for learners with disabilities.',
    images: ['/Favicon-2.png'],
  },
  icons: {
    icon: '/Favicon-2.png',
    shortcut: '/Favicon-2.png',
    apple: '/Favicon-2.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${SchibstedGrotesk.variable} min-w-full space-y-5 antialiased`}>
        <Providers>
          <Header />
          {children}
          <FooterComp />
        </Providers>
      </body>
    </html>
  )
}
