import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Electrical Services',
  description: 'Licensed electrical services for Eastern NC. Residential wiring, panel upgrades, lighting, generators, and more from Bender Remodeling.',
}

export default function ElectricalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
