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
  Zap,
  Lightbulb,
  Home,
  Shield,
  CheckCircle2,
  Award,
  Users,
  PhoneCall,
  Calendar,
  Wrench,
  Power,
  Gauge,
} from 'lucide-react'

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Wiring',
    tagline: 'Safe, reliable power',
    description: 'From new construction to rewiring older homes, we ensure your electrical system is safe, up to code, and ready to handle modern power demands. Our licensed electricians deliver quality work you can trust.',
    features: [
      'New home wiring',
      'Whole-house rewiring',
      'Electrical panel upgrades',
      'Outlet and switch installation',
      'Whole house generator',
      'Code compliance upgrades',
    ],
    cta: 'Start Your Project',
  },
  {
    id: 'panels',
    icon: Gauge,
    title: 'Panel Upgrades',
    tagline: 'Power for today\'s needs',
    description: 'Modern homes and insurance requirements often demand more electrical capacity. We upgrade panels to provide the power you need safely, whether you\'re adding a workshop, EV charger, or just need more circuits.',
    features: [
      'Panel replacements',
      '200/400 amp service upgrades',
      'Subpanel installations',
      'Breaker replacements',
      'Meter base upgrades',
    ],
    cta: 'Schedule an Assessment',
  },
  {
    id: 'lighting',
    icon: Lightbulb,
    title: 'Lighting',
    tagline: 'Illuminate your space',
    description: 'Good lighting transforms a home. We install everything from recessed lights and ceiling fans to smart home controls—enhancing both function and ambiance.',
    features: [
      'Recessed lighting installation',
      'Ceiling fan wiring',
      'Under-cabinet lighting',
      'Landscape and outdoor lighting',
      'Dimmer switches',
      'Smart lighting systems',
    ],
    cta: 'Brighten Your Home',
  },
  {
    id: 'generators',
    icon: Power,
    title: 'Whole Home Generators',
    tagline: 'Power when you need it',
    description: 'Eastern NC weather can be unpredictable. We install whole-home generators and transfer switches so you\'re never left in the dark during storms or outages.',
    features: [
      'Whole-home generator installation',
      'Transfer switch installation',
      'Battery backup systems',
      'Load management',
      'Propane and natural gas hookups',
    ],
    cta: 'Get Protected',
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Licensed Electricians',
    description: 'NC Licensed #L23375. Fully insured and code-compliant work.',
  },
  {
    icon: Users,
    title: 'Bender Quality',
    description: 'The same trusted service that built our remodeling reputation for 25+ years.',
  },
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'We never cut corners on safety. Your family\'s protection comes first.',
  },
  {
    icon: PhoneCall,
    title: 'Local Service',
    description: 'Based in Pollocksville, serving neighbors across five counties.',
  },
]

const processSteps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Call Us',
    description: 'Describe your electrical needs. We\'ll ask the right questions to understand your project.',
  },
  {
    icon: Calendar,
    step: '02',
    title: 'Schedule',
    description: 'We\'ll set an appointment that works for you to assess the job.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Quote & Plan',
    description: 'We discuss what you\'re trying to achieve, explore your options, and give you honest pricing to reach your best outcome.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Complete',
    description: 'We do the work right, ensure everything passes inspection, and clean up.',
  },
]

export default function ElectricalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 md:translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-yellow-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 md:-translate-x-1/3" />
        </div>

        <div className="relative container-wide">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium tracking-wide mb-6 md:mb-8">
                <Zap className="w-4 h-4 text-yellow-400" />
                A Bender Company · License #L23375
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Electrical done
                <span className="text-yellow-400"> right.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10">
                Licensed electrical services backed by 25+ years of trusted craftsmanship. From panel upgrades to whole-home rewiring, we power your home safely and reliably.
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

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Section header */}
          <FadeIn className="text-center mb-16">
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Our Services</span>
            <h2 className="heading-2 text-brand-charcoal mb-6">
              Complete electrical solutions
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              From simple repairs to complex installations, we handle all your electrical needs with the same quality focus that defines everything we do.
            </p>
          </FadeIn>

          {/* Services grid */}
          <div className="space-y-24 md:space-y-32">
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
                    {/* Visual */}
                    <FadeIn direction={isEven ? 'right' : 'left'}>
                      <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 to-amber-600">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Icon className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" strokeWidth={1.5} />
                              <span className="text-lg md:text-xl font-semibold">{service.tagline}</span>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className={`absolute -bottom-5 ${isEven ? '-right-5' : '-left-5'} w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center shadow-soft-lg`}
                        >
                          <Icon className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />
                        </motion.div>
                      </div>
                    </FadeIn>

                    {/* Content */}
                    <FadeIn direction={isEven ? 'left' : 'right'}>
                      <div>
                        <span className="text-yellow-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">{service.tagline}</span>
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
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-500" />
                              <span className="text-brand-gray text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-semibold text-sm transition-all duration-300 bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:-translate-y-0.5">
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

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <FadeIn className="text-center mb-16">
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Why Bender</span>
            <h2 className="heading-2 text-brand-charcoal mb-6">
              The Bender Difference
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              We're not just electricians. We're your neighbors, backed by 25+ years of trusted service in Eastern NC.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.title}>
                  <div className="bg-white p-8 rounded-xl shadow-soft h-full text-center hover:shadow-soft-lg transition-shadow duration-300">
                    <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-yellow-600" />
                    </div>
                    <h3 className="heading-5 text-brand-charcoal mb-2">
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

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn className="text-center mb-16">
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">How It Works</span>
            <h2 className="heading-2 text-brand-charcoal mb-6">
              Simple, straightforward service
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              No runaround, no pressure. Just honest electrical work from people who care.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.step}>
                  <div className="relative bg-gray-50 p-8 rounded-xl h-full">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-yellow-100 absolute top-4 right-6">
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
      <section className="py-24 md:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

        <div className="container-wide text-center relative">
          <FadeIn>
            <div className="w-20 h-20 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap className="w-10 h-10 text-yellow-400" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-2 text-white mb-6 max-w-2xl mx-auto">
              Ready to power up your project?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-large text-gray-300 mb-10 max-w-xl mx-auto">
              Whether you need a simple repair or a complete rewire, we're here to help with licensed, professional service.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base bg-yellow-500 hover:bg-yellow-400 text-gray-900">
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
