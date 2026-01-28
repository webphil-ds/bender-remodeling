import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remodeling',
  description: 'Expert home remodeling services in Eastern NC. Kitchen and bathroom remodeling, home additions, whole home renovations, decks, porches, and more from Bender Remodeling.',
  openGraph: {
    title: 'Remodeling Services | Bender Remodeling',
    description: 'Expert home remodeling services in Eastern NC. Kitchen and bathroom remodeling, home additions, whole home renovations, decks, porches, and more.',
  },
}

export default function RemodelingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
