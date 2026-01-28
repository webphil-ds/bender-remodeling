import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Bender Remodeling, a family-owned home remodeling company serving Eastern NC since 2001. Our story, values, and commitment to quality craftsmanship.',
  openGraph: {
    title: 'About Bender Remodeling | 25+ Years Serving Eastern NC',
    description: 'Learn about Bender Remodeling, a family-owned home remodeling company serving Eastern NC since 2001.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
