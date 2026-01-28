import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HVAC Services',
  description: 'Bender Heating & Air provides expert HVAC services in Eastern NC. AC installation, heating systems, repairs, maintenance, and 24/7 emergency service.',
  openGraph: {
    title: 'Bender Heating & Air | HVAC Services',
    description: 'Expert HVAC services in Eastern NC. AC installation, heating systems, repairs, maintenance, and 24/7 emergency service.',
  },
}

export default function HVACLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
