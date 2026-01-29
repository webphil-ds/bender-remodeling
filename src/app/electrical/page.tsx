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
  CheckCircle2,
  PhoneCall,
  Calendar,
  Wrench,
  Power,
  Gauge,
} from 'lucide-react'

const services = [
  {
    id: 'wiring',
    icon: Home,
    title: 'Residential Wiring',
    description: 'New construction, rewiring older homes, adding circuits for modern demands. We make sure your electrical system is safe, up to code, and ready for the future.',
    features: [
      'New home wiring',
      'Whole-house rewiring',
      'Electrical panel upgrades',
      'Outlet and switch installation',
      'Whole house generator hookups',
      'Code compliance upgrades',
    ],
    cta: 'Start Your Project',
    bg: 'bg-gradient-to-br from-gray-800 to-gray-900',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-gray-900',
    textColor: 'text-white',
    textMuted: 'text-gray-300',
    checkColor: 'text-yellow-400',
    ctaColor: 'text-yellow-400 hover:text-yellow-300',
  },
  {
    id: 'panels',
    icon: Gauge,
    title: 'Panel Upgrades',
    description: 'Today\'s homes need more power—for EV chargers, workshops, home offices, and smart devices. We upgrade panels to meet modern demands and insurance requirements.',
    features: [
      '200/400 amp service upgrades',
      'Panel replacements',
      'Subpanel installations',
      'Breaker replacements',
      'Meter base upgrades',
    ],
    cta: 'Schedule an Assessment',
    bg: 'bg-gradient-to-br from-gray-800 to-gray-900',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-gray-900',
    textColor: 'text-white',
    textMuted: 'text-gray-300',
    checkColor: 'text-yellow-400',
    ctaColor: 'text-yellow-400 hover:text-yellow-300',
  },
  {
    id: 'lighting',
    icon: Lightbulb,
    title: 'Lighting',
    description: 'Good lighting transforms a home. We install everything from recessed lights and ceiling fans to smart controls—enhancing both function and ambiance.',
    features: [
      'Recessed lighting',
      'Ceiling fan wiring',
      'Under-cabinet lighting',
      'Landscape & outdoor lighting',
      'Dimmer switches',
      'Smart lighting systems',
    ],
    cta: 'Brighten Your Home',
    bg: 'bg-gradient-to-br from-gray-800 to-gray-900',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-gray-900',
    textColor: 'text-white',
    textMuted: 'text-gray-300',
    checkColor: 'text-yellow-400',
    ctaColor: 'text-yellow-400 hover:text-yellow-300',
  },
  {
    id: 'generators',
    icon: Power,
    title: 'Whole Home Generators',
    description: 'Eastern NC weather can be unpredictable. We install whole-home generators and transfer switches so you\'re never left in the dark during storms.',
    features: [
      'Generator installation',
      'Transfer switches',
      'Battery backup systems',
      'Load management',
      'Propane & natural gas hookups',
    ],
    cta: 'Get Protected',
    bg: 'bg-gradient-to-br from-gray-800 to-gray-900',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-gray-900',
    textColor: 'text-white',
    textMuted: 'text-gray-300',
    checkColor: 'text-yellow-400',
    ctaColor: 'text-yellow-400 hover:text-yellow-300',
  },
]

const processSteps = [
  { num: '01', title: 'Call', text: 'Tell us what you need' },
  { num: '02', title: 'Schedule', text: 'We come to you' },
  { num: '03', title: 'Plan', text: 'We discuss options and pricing' },
  { num: '04', title: 'Complete', text: 'Quality work, clean finish' },
]

export default function ElectricalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,179,8,0.15),transparent_50%)]" />

        <div className="relative container-wide">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="text-yellow-400 text-sm font-medium tracking-wide mb-4">
                NC License #L23375 · 25+ Years Experience
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
                Electrical services for Eastern NC
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300 mb-10">
                From panel upgrades to whole-home rewiring. Safe, reliable work from people you can trust.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-all">
                  Get an Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:252-514-0345" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all">
                  <Phone className="w-5 h-5" />
                  (252) 514-0345
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services - Card Grid (not repeating 2-col blocks) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <FadeIn className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What we do
            </h2>
            <p className="text-lg text-gray-600">
              Licensed electricians handling everything from simple repairs to complex installations.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <FadeIn key={service.id} delay={index * 0.1}>
                  <div
                    id={service.id}
                    className={`group relative rounded-2xl p-8 md:p-10 scroll-mt-32 ${service.bg} shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center shadow-sm`}>
                        <Icon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>
                      <Link
                        href="/contact"
                        className={`opacity-0 group-hover:opacity-100 inline-flex items-center gap-1 text-sm font-semibold ${service.ctaColor} transition-opacity`}
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <h3 className={`text-2xl font-bold ${service.textColor} mb-3`}>
                      {service.title}
                    </h3>
                    <p className={`${service.textMuted} mb-6 leading-relaxed`}>
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className={`flex items-center gap-2 text-sm ${service.textMuted}`}>
                          <CheckCircle2 className={`w-4 h-4 ${service.checkColor} flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process - Horizontal layout, not a card grid */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="container-wide">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How it works
            </h2>
            <p className="text-gray-400">
              No runaround. No pressure. Just honest service.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {processSteps.map((step, index) => (
                <FadeIn key={step.num} delay={index * 0.1}>
                  <div className="relative">
                    <div className="text-6xl font-bold text-yellow-500/20 mb-2">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {step.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Simple and direct */}
      <section className="py-20 md:py-28 bg-yellow-500">
        <div className="container-wide text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-800 mb-10 max-w-xl mx-auto">
              Call us or request an estimate online. We'll take it from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all">
                Get an Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:252-514-0345" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-lg transition-all">
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
