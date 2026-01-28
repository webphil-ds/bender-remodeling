import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse our portfolio of completed home remodeling projects across Eastern NC. Kitchen renovations, bathroom remodels, home additions, and whole home transformations.',
  openGraph: {
    title: 'Our Work | Bender Remodeling',
    description: 'Browse our portfolio of completed home remodeling projects across Eastern NC. Kitchen renovations, bathroom remodels, home additions, and more.',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
