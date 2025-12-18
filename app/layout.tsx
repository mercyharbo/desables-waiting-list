import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

// Using Space Grotesk as a free alternative to Cabinet Grotesk (similar geometric sans-serif)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-cabinet',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Desables',
  description: 'Accessible learning for people with disabilities',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  )
}
