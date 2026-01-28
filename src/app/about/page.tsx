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
  Award,
  Users,
  Heart,
  Shield,
  MapPin,
  Calendar,
} from 'lucide-react'

const timeline = [
  {
    year: '1999',
    title: 'Hurricane Floyd',
    description: 'After devastating floods hit Eastern NC, Jack Bender led volunteer efforts through Carpenters for Christ, helping restore 24 homes over two years.',
  },
  {
    year: '2001',
    title: 'Company Founded',
    description: 'With tools, a truck, and two decades of construction knowledge, Jack Bender Construction was born—committed to serving our neighbors with integrity.',
  },
  {
    year: '2003',
    title: 'NC License',
    description: "As project scope grew, Jack earned his North Carolina General Contractor's License, enabling larger residential and commercial projects.",
  },
  {
    year: '2007',
    title: 'Unlimited License',
    description: 'Earned unlimited contractor status, expanding our capabilities to take on larger residential and commercial projects.',
  },
  {
    year: '2016',
    title: 'Bender Remodeling',
    description: 'Renamed to Bender Remodeling, Inc. to better reflect our focus: transforming homes across Eastern North Carolina.',
  },
  {
    year: '2023',
    title: 'Electrical Services',
    description: 'Keith Eubanks joins the team, bringing licensed electrical services in-house and expanding our full-service capabilities.',
  },
  {
    year: '2025',
    title: 'HVAC Division',
    description: 'Neal Caroon comes aboard to lead our HVAC division, adding heating and air conditioning to our comprehensive service offerings.',
  },
  {
    year: 'Today',
    title: 'Serving Five Counties',
    description: 'Multiple crews, thousands of completed projects, and the same commitment to quality and service that started it all.',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Service First',
    description: 'We were born from volunteer work after a disaster. That spirit of genuinely helping our neighbors still drives everything we do.',
  },
  {
    icon: Shield,
    title: 'Do It Right',
    description: 'No shortcuts. We build to last, use quality materials, and stand behind our work because your home deserves nothing less.',
  },
  {
    icon: Users,
    title: 'Clear Communication',
    description: "You'll always know what's happening with your project. We answer calls, show up when we say we will, and keep you informed.",
  },
  {
    icon: Award,
    title: 'Honest Pricing',
    description: 'Detailed proposals with transparent pricing. No hidden fees, no surprise charges—just fair value for quality work.',
  },
]

const counties = ['Craven', 'Jones', 'Carteret', 'Pamlico', 'Onslow']

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Bender Remodeling team"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/70 to-brand-charcoal" />
        </div>

        <div className="relative container-wide">
          <FadeIn>
            <span className="label mb-4 block">About Us</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-display text-white mb-6 max-w-4xl">
              Built on
              <span className="text-brand-red"> Service</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-xl text-gray-300 max-w-2xl">
              For over two decades, we've been transforming homes and helping families across Eastern North Carolina. Here's our story.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/3] bg-brand-cream rounded-lg overflow-hidden shadow-soft">
                  <Image
                    src="/images/about-story.jpg"
                    alt="Bender Remodeling origin story"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-32 h-32 md:w-40 md:h-40 bg-brand-red rounded-lg flex flex-col items-center justify-center text-center p-4 shadow-soft-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white">25+</div>
                  <div className="text-sm font-medium text-white/80">Years Serving<br />Eastern NC</div>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div>
                <span className="label mb-4 block">Where It Started</span>
                <h2 className="heading-2 text-brand-charcoal mb-6">
                  From Disaster Relief to <span className="text-brand-red">Dream Homes</span>
                </h2>
                <div className="space-y-4 text-brand-gray leading-relaxed">
                  <p>
                    In September 1999, Tropical Storm Dennis and Hurricane Floyd devastated Eastern North Carolina. New Bern sat as an island for a week. Many lost everything.
                  </p>
                  <p>
                    Jack Bender, recently retired, was leading Carpenters for Christ. When the waters receded, they got to work—performing "mud outs," restoring homes, and giving families hope. Over two years, they helped rebuild 24 homes with volunteer labor.
                  </p>
                  <p>
                    When the disaster work wound down, Jack realized retirement wasn't for him. He had the tools, the truck, the trailer, and the knowledge. His father pointed out the obvious: start a business helping neighbors the way you always have.
                  </p>
                  <p className="font-semibold text-brand-charcoal">
                    In May 2001, Jack Bender Construction was born. Twenty-five years later, we're still here—still serving, still building, still helping our neighbors transform their homes.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-brand-cream overflow-hidden">
        <div className="container-wide">
          <FadeIn className="text-center mb-16 lg:mb-20">
            <span className="label mb-4 block">Our Journey</span>
            <h2 className="heading-2 text-brand-charcoal">
              25 Years of Building
            </h2>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            {/* Center line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-red/20 -translate-x-1/2" />

            {timeline.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <FadeIn key={item.year} delay={index * 0.1}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-12 mb-12 last:mb-0">
                    {/* Year side - left for even, right for odd */}
                    <div className={`hidden md:flex items-start ${
                      isEven ? 'justify-end pr-12' : 'order-2 justify-start pl-12'
                    }`}>
                      <div className="text-5xl lg:text-6xl font-bold text-brand-red/20 leading-none">
                        {item.year}
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:block absolute left-1/2 top-3 -translate-x-1/2 z-10">
                      <div className="w-4 h-4 bg-brand-red rounded-full ring-4 ring-brand-cream shadow-sm" />
                    </div>

                    {/* Content side - right for even, left for odd */}
                    <div className={`${isEven ? 'md:pl-12' : 'order-1 md:pr-12'}`}>
                      {/* Mobile year */}
                      <div className="md:hidden text-3xl font-bold text-brand-red/30 mb-2">
                        {item.year}
                      </div>

                      <div className={`bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 ${
                        !isEven ? 'md:text-right' : ''
                      }`}>
                        <h3 className="heading-4 text-brand-charcoal mb-2">
                          {item.title}
                        </h3>
                        <p className="text-brand-gray leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn className="text-center mb-16">
            <span className="label mb-4 block">How We Work</span>
            <h2 className="heading-2 text-brand-charcoal mb-6">
              What We Stand For
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              These aren't corporate values on a wall. They're the principles that guide every decision, every project, every interaction.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <StaggerItem key={value.title}>
                  <div className="flex gap-5 p-8 bg-brand-cream rounded-xl hover:shadow-soft transition-shadow duration-300">
                    <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-brand-red" />
                    </div>
                    <div>
                      <h3 className="heading-4 text-brand-charcoal mb-2">
                        {value.title}
                      </h3>
                      <p className="text-brand-gray leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 lg:py-32 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="label mb-4 block">Where We Work</span>
                <h2 className="heading-2 text-white mb-6">
                  Serving Eastern North Carolina
                </h2>
                <p className="body-large text-gray-300 mb-8">
                  From our home base in Pollocksville, we serve homeowners across five counties. If you're in our service area, we'd love to talk about your project.
                </p>
                <div className="flex items-start gap-4 text-gray-300 mb-8">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Headquarters</p>
                    <p className="text-gray-400">8384 Hwy. 17, Pollocksville, NC 28573</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {counties.map((county) => (
                    <span
                      key={county}
                      className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium text-white"
                    >
                      {county} County
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] bg-brand-slate rounded-xl overflow-hidden relative">
                <Image
                  src="/images/service-area-map.svg"
                  alt="Service area map"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/50 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide text-center">
          <FadeIn>
            <h2 className="heading-2 text-brand-charcoal mb-6 max-w-2xl mx-auto">
              Let's Build Something Together
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large mb-10 max-w-xl mx-auto">
              Ready to start your project? We'd love to hear about what you're planning.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:252-514-0345" className="btn-secondary px-8">
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
