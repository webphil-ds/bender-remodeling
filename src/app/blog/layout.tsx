import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Home remodeling tips, project showcases, and industry insights from Bender Remodeling. Serving Eastern North Carolina since 2001.',
  openGraph: {
    title: 'Blog | Bender Remodeling',
    description: 'Home remodeling tips, project showcases, and industry insights from Bender Remodeling.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
