'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/MotionWrapper'
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Home,
  Bath,
  ChefHat,
  Building,
  TreePine,
  Hammer,
  MessageSquare,
  FileText,
  Wrench,
  CheckSquare,
} from 'lucide-react'

const services = [
  {
    id: 'kitchens',
    icon: ChefHat,
    title: 'Kitchen Remodeling',
    tagline: 'Where families gather',
    cta: 'Plan Your Dream Kitchen',
    description: "The kitchen is more than a place to cook—it's where life happens. We design and build kitchens that work as beautifully as they look, with smart storage, quality materials, and layouts that fit how your family actually lives.",
    features: [
      'Custom cabinetry and storage solutions',
      'Countertop installation (granite, quartz, butcher block)',
      'Appliance upgrades and electrical work',
      'Flooring, backsplash, and lighting',
      'Complete layout reconfiguration',
      'Island and peninsula additions',
    ],
  },
  {
    id: 'bathrooms',
    icon: Bath,
    title: 'Bathroom Remodeling',
    tagline: 'Your personal retreat',
    cta: 'Design Your Retreat',
    description: 'From quick refreshes to full renovations, we transform bathrooms into spaces that start your day right. Whether you want a spa-like primary bath or a functional family bathroom, we handle every detail.',
    features: [
      'Shower and tub replacements',
      'Tile work (floor, walls, custom patterns)',
      'Vanity and storage upgrades',
      'Plumbing fixture installation',
      'Accessibility modifications',
      'Lighting and ventilation',
    ],
  },
  {
    id: 'additions',
    icon: Building,
    title: 'Home Additions',
    tagline: 'Room to grow',
    cta: 'Expand Your Space',
    description: 'When you need more space but love your location, an addition is the answer. We build seamless extensions that feel like they were always part of your home—matching architectural style while meeting modern needs.',
    features: [
      'Master suite additions',
      'Family room expansions',
      'In-law suites and ADUs',
      'Second-story additions',
      'Sunrooms and four-season rooms',
      'Garage conversions',
    ],
  },
  {
    id: 'renovations',
    icon: Home,
    title: 'Whole Home Renovations',
    tagline: 'Complete transformation',
    cta: 'Transform Your Home',
    description: 'Sometimes a home needs more than updates—it needs a complete reimagining. We handle large-scale renovations that touch every room, coordinating all trades to deliver a cohesive result on schedule.',
    features: [
      'Complete interior renovations',
      'Floor plan modifications',
      'Structural changes and load-bearing walls',
      'Electrical and plumbing system updates',
      'HVAC upgrades',
      'Storm and flood damage restoration',
    ],
  },
  {
    id: 'outdoor',
    icon: TreePine,
    title: 'Decks & Porches',
    tagline: 'Living outdoors',
    cta: 'Build Your Outdoor Oasis',
    description: "Eastern NC weather calls for outdoor living spaces. We build decks, porches, and patios designed to handle the coastal climate while extending your home's living space into the outdoors.",
    features: [
      'Composite and wood decking',
      'Screened porches',
      'Covered patios',
      'Pergolas and shade structures',
      'Outdoor kitchens',
      'Deck repair and restoration',
    ],
  },
  {
    id: 'garages',
    icon: Hammer,
    title: 'Garages & Outbuildings',
    tagline: 'Functional additions',
    cta: 'Start Your Build',
    description: 'From attached garages to detached workshops, we build outbuildings that serve your needs and complement your property. Authorized Rigid steel building installers for commercial-grade durability.',
    features: [
      'Attached and detached garages',
      'Carports and vehicle covers',
      'Workshops and storage buildings',
      'Steel buildings (authorized Rigid dealer)',
      'Garage door installation',
      'Interior finishing and organization',
    ],
  },
]

const processSteps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    description: 'We meet at your home to discuss your vision, assess the space, and understand your goals and budget.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Proposal',
    description: 'You receive a detailed proposal with scope, timeline, and transparent pricing. No surprises.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Build',
    description: 'Our team executes the work with regular updates. We respect your home and keep the site clean.',
  },
  {
    icon: CheckSquare,
    step: '04',
    title: 'Completion',
    description: 'We walk through together to ensure everything meets your expectations before final sign-off.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Home remodeling services"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/70 to-brand-charcoal" />
        </div>

        <div className="relative container-wide">
          <FadeIn>
            <span className="label mb-4 block">Our Services</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-display text-white mb-6 max-w-4xl">
              Expert Remodeling for
              <span className="text-brand-red"> Every Room</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-xl text-gray-300 max-w-2xl">
              From single-room updates to complete transformations, we bring skilled craftsmanship and clear communication to every project.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-28 md:space-y-36">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    !isEven ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}>
                    {/* Image */}
                    <FadeIn direction={isEven ? 'right' : 'left'}>
                      <div className="relative group">
                        <div className="aspect-[4/3] bg-brand-cream rounded-lg overflow-hidden shadow-soft">
                          <Image
                            src={`/images/service-${service.id}.jpg`}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className={`absolute -bottom-5 ${isEven ? '-right-5' : '-left-5'} w-20 h-20 md:w-24 md:h-24 bg-brand-red rounded-lg flex items-center justify-center shadow-soft-lg`}
                        >
                          <Icon className="w-9 h-9 md:w-11 md:h-11 text-white" />
                        </motion.div>
                      </div>
                    </FadeIn>

                    {/* Content */}
                    <FadeIn direction={isEven ? 'left' : 'right'}>
                      <div>
                        <span className="label mb-3 block">{service.tagline}</span>
                        <h2 className="heading-2 text-brand-charcoal mb-5">
                          {service.title}
                        </h2>
                        <p className="body-large mb-8">
                          {service.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                              <span className="text-brand-gray text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link href="/contact" className="btn-primary">
                          {service.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <FadeIn className="text-center mb-16">
            <span className="label mb-4 block">How We Work</span>
            <h2 className="heading-2 text-brand-charcoal mb-6">
              Our Process
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              We keep things straightforward. Here's what to expect when you work with us.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.step}>
                  <div className="relative bg-white p-8 rounded-lg shadow-soft h-full">
                    <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-red" />
                    </div>
                    <div className="text-6xl font-bold text-brand-red/10 absolute top-4 right-6">
                      {item.step}
                    </div>
                    <h3 className="heading-4 text-brand-charcoal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        <div className="container-wide text-center relative">
          <FadeIn>
            <h2 className="heading-2 text-white mb-6 max-w-2xl mx-auto">
              Ready to Get Started?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-gray-300 mb-10 max-w-xl mx-auto">
              Tell us about your project. We'll provide a free consultation and honest assessment.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8">
                Request a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:252-514-0345" className="btn-outline-light px-8">
                <Phone className="w-4 h-4" />
                (252) 514-0345
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
