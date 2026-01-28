'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/MotionWrapper'
import {
  ArrowRight,
  Phone,
  Zap,
  Lightbulb,
  Home,
  Shield,
  CheckCircle2,
  Award,
  PhoneCall,
  Calendar,
  Wrench,
  Power,
  Gauge,
  AlertTriangle,
  Clock,
  MapPin,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

// Quick navigation services
const quickNav = [
  { id: 'wiring', icon: Home, label: 'Residential Wiring' },
  { id: 'panels', icon: Gauge, label: 'Panel Upgrades' },
  { id: 'lighting', icon: Lightbulb, label: 'Lighting' },
  { id: 'generators', icon: Power, label: 'Generators' },
]

// Warning signs - customer-first framing
const warningSigns = [
  { icon: AlertTriangle, text: 'Flickering or dimming lights' },
  { icon: AlertTriangle, text: 'Breakers that trip frequently' },
  { icon: AlertTriangle, text: 'Outlets that feel warm or spark' },
  { icon: AlertTriangle, text: 'Burning smell from outlets or switches' },
  { icon: AlertTriangle, text: 'Two-prong outlets throughout the home' },
  { icon: AlertTriangle, text: 'Panel is over 25 years old' },
]

// Primary services (featured)
const primaryServices = [
  {
    id: 'wiring',
    icon: Home,
    title: 'Residential Wiring',
    headline: 'Safe, code-compliant power for your home',
    description: 'Whether you\'re building new, rewiring an older home, or adding circuits for modern demands, we make sure your electrical system is safe and ready for the future.',
    features: [
      'New construction wiring',
      'Whole-house rewiring',
      'Electrical panel upgrades',
      'Outlet and switch installation',
      'Whole house generator hookups',
      'Code compliance upgrades',
    ],
    cta: 'Start Your Project',
  },
  {
    id: 'panels',
    icon: Gauge,
    title: 'Panel Upgrades',
    headline: 'More capacity for modern living',
    description: 'Today\'s homes need more power—for EV chargers, workshops, home offices, and smart devices. We upgrade panels to meet modern demands and insurance requirements.',
    features: [
      '200/400 amp service upgrades',
      'Panel replacements',
      'Subpanel installations',
      'Breaker replacements',
      'Meter base upgrades',
    ],
    cta: 'Schedule an Assessment',
  },
]

// Secondary services (compact)
const secondaryServices = [
  {
    id: 'lighting',
    icon: Lightbulb,
    title: 'Lighting',
    description: 'From recessed lights to smart controls, we help you illuminate your space beautifully.',
    features: ['Recessed lighting', 'Ceiling fans', 'Dimmer switches', 'Smart systems', 'Outdoor lighting'],
    cta: 'Brighten Your Home',
  },
  {
    id: 'generators',
    icon: Power,
    title: 'Whole Home Generators',
    description: 'Stay powered through Eastern NC storms with professional generator installation.',
    features: ['Generator installation', 'Transfer switches', 'Battery backup', 'Load management'],
    cta: 'Get Protected',
  },
]

// Process steps
const processSteps = [
  {
    step: 1,
    title: 'Call',
    description: 'Tell us what you need',
    icon: PhoneCall,
  },
  {
    step: 2,
    title: 'Schedule',
    description: 'Pick a time that works',
    icon: Calendar,
  },
  {
    step: 3,
    title: 'Plan',
    description: 'We discuss your goals and options',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Complete',
    description: 'Quality work, clean finish',
    icon: CheckCircle2,
  },
]

// Trust indicators
const trustBadges = [
  { icon: Award, text: 'NC License #L23375' },
  { icon: Clock, text: '25+ Years Experience' },
  { icon: MapPin, text: '5 Counties Served' },
  { icon: Shield, text: 'Fully Insured' },
]

export default function ElectricalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        </div>

        <div className="relative container-wide">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium tracking-wide mb-6">
                <Zap className="w-4 h-4 text-yellow-400" />
                Licensed Electrical Services
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
                Power your home with
                <span className="text-yellow-400"> confidence</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                From panel upgrades to whole-home rewiring, we deliver safe, reliable electrical work backed by 25 years of trusted craftsmanship in Eastern NC.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary px-6 sm:px-8 py-4 text-base bg-yellow-500 hover:bg-yellow-400 text-gray-900 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.5)]">
                  Get an Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:252-514-0345" className="btn-outline-light px-6 sm:px-8 py-4 text-base">
                  <Phone className="w-5 h-5" />
                  (252) 514-0345
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick Nav Strip */}
      <section className="bg-gray-900 border-t border-white/10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center md:justify-between gap-2 py-4">
            {quickNav.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <Icon className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
                  {item.label}
                  <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Warning Signs Section - Problem-first framing */}
      <section className="py-16 md:py-20 bg-amber-50 border-b border-amber-100">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-2">
                    Signs your electrical system needs attention
                  </h2>
                  <p className="text-brand-gray">
                    Electrical problems rarely fix themselves. If you notice any of these, it's time to call a professional.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {warningSigns.map((sign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border border-amber-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="text-sm text-brand-charcoal">{sign.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-brand-gray text-sm mb-4">Not sure if you have a problem? We're happy to take a look.</p>
                <a href="tel:252-514-0345" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition-colors">
                  <Phone className="w-4 h-4" />
                  Call (252) 514-0345
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Primary Services - Featured treatment */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <FadeIn className="text-center mb-16">
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">What We Do Best</span>
            <h2 className="heading-2 text-brand-charcoal">
              Core electrical services
            </h2>
          </FadeIn>

          <div className="space-y-20 md:space-y-28">
            {primaryServices.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    !isEven ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}>
                    {/* Visual */}
                    <FadeIn direction={isEven ? 'right' : 'left'}>
                      <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-soft-xl">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                                <Icon className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" strokeWidth={1.5} />
                              </div>
                              <span className="text-white/60 text-sm uppercase tracking-wider">{service.title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeIn>

                    {/* Content */}
                    <FadeIn direction={isEven ? 'left' : 'right'}>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
                          {service.headline}
                        </h3>
                        <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-500" />
                              <span className="text-brand-gray text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:-translate-y-0.5 hover:shadow-lg">
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

      {/* Secondary Services - Compact grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-wide">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal">
              Also available
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {secondaryServices.map((service) => {
              const Icon = service.icon
              return (
                <FadeIn key={service.id}>
                  <div
                    id={service.id}
                    className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 scroll-mt-32 h-full"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-charcoal">{service.title}</h3>
                        <p className="text-brand-gray text-sm mt-1">{service.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1 bg-gray-100 text-brand-gray rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mid-Page Reassurance */}
      <section className="py-16 md:py-20 bg-white border-y border-gray-100">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-brand-charcoal mb-6 leading-snug">
                "We treat every home like it's our own—because your family's safety isn't something we take lightly."
              </blockquote>
              <p className="text-brand-gray mb-8">
                — The Bender Team
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border-2 border-gray-200 text-brand-charcoal hover:border-yellow-500 hover:bg-yellow-50"
              >
                Get a Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
        <div className="container-wide">
          <FadeIn className="text-center mb-16">
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From call to completion
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              No runaround, no pressure. Just straightforward service.
            </p>
          </FadeIn>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-700" />
              <div className="absolute top-8 left-0 w-1/2 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-500/50" />

              <div className="grid grid-cols-4 gap-8">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <FadeIn key={step.step} delay={index * 0.1}>
                      <div className="relative">
                        {/* Step number bubble */}
                        <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-yellow-500 flex items-center justify-center mx-auto mb-6 relative z-10">
                          <Icon className="w-7 h-7 text-yellow-400" />
                        </div>
                        <div className="text-center">
                          <div className="text-yellow-400 text-sm font-semibold mb-2">Step {step.step}</div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-400 text-sm">{step.description}</p>
                        </div>
                      </div>
                    </FadeIn>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <FadeIn key={step.step} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-yellow-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-700 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="text-yellow-400 text-sm font-semibold mb-1">Step {step.step}</div>
                      <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-100 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <div key={index} className="flex items-center gap-2 text-brand-gray">
                  <Icon className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

        <div className="container-wide text-center relative">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto">
              Ready to get started?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              Whether it's a quick fix or a major upgrade, we're here to help. Call today or request an estimate online.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base bg-yellow-500 hover:bg-yellow-400 text-gray-900 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.5)]">
                Get an Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:252-514-0345" className="btn-outline-light px-8 py-4 text-base">
                <Phone className="w-5 h-5" />
                (252) 514-0345
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
