import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Bender Remodeling for a free consultation on your home remodeling project in New Bern, Pollocksville, and Eastern NC. Call (252) 514-0345.',
  openGraph: {
    title: 'Contact Bender Remodeling | Get a Free Consultation',
    description: 'Contact Bender Remodeling for a free consultation on your home remodeling project in New Bern, Pollocksville, and Eastern NC.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
