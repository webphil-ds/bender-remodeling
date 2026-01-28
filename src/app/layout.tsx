import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Bender Remodeling | Home Remodeling in Eastern NC',
    template: '%s | Bender Remodeling',
  },
  description: 'Trusted home remodeling and construction services in New Bern, Pollocksville, and Eastern North Carolina. Kitchens, bathrooms, additions, and whole-home renovations since 2001.',
  keywords: ['home remodeling', 'New Bern NC', 'kitchen remodel', 'bathroom remodel', 'home addition', 'contractor', 'Eastern NC', 'Pollocksville'],
  authors: [{ name: 'Bender Remodeling' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://benderremodeling.com',
    siteName: 'Bender Remodeling',
    title: 'Bender Remodeling | Home Remodeling in Eastern NC',
    description: 'Trusted home remodeling and construction services in New Bern, Pollocksville, and Eastern North Carolina since 2001.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bender Remodeling | Home Remodeling in Eastern NC',
    description: 'Trusted home remodeling and construction services in New Bern, Pollocksville, and Eastern North Carolina since 2001.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
