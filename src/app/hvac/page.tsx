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
  Snowflake,
  Flame,
  Wrench,
  Shield,
  ThermometerSun,
  Fan,
  CheckCircle2,
  Calendar,
  Award,
  Users,
  PhoneCall,
} from 'lucide-react'

const services = [
  {
    id: 'installation',
    icon: Snowflake,
    title: 'AC Installation',
    tagline: 'Stay cool all summer',
    description: 'From single units to whole-home central air systems, we install energy-efficient cooling solutions sized perfectly for your space. All major brands, professional installation. Manufacturer (PARTS) warranties honored.',
    features: [
      'Central air conditioning systems',
      'Ductless mini-split systems',
      'Heat pump installations',
      'Smart thermostat integration',
      'Ductwork design & installation',
      'Energy efficiency upgrades',
    ],
  },
  {
    id: 'heating',
    icon: Flame,
    title: 'Heating Systems',
    tagline: 'Warm comfort year-round',
    description: "Eastern NC winters demand reliable heat. We install and service all types of heating systems—from heat pumps to furnaces—ensuring your family stays comfortable when temperatures drop.",
    features: [
      'Heat pump systems',
      'Gas & electric furnaces',
      'Dual fuel systems',
      'Geothermal systems',
      'Zoned heating solutions',
    ],
  },
  {
    id: 'repairs',
    icon: Wrench,
    title: 'Repairs & Maintenance',
    tagline: 'Keep systems running',
    description: "Regular maintenance extends equipment life and helps prevent costly breakdowns. When repairs are needed, we diagnose accurately and fix it right the first time—no unnecessary upsells.",
    features: [
      'Seasonal tune-ups',
      'Filter replacement programs',
      'Refrigerant checks & recharge',
      'Electrical & thermostat repair',
      'Compressor & motor service',
      'Ductwork inspection & sealing',
    ],
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed HVAC technicians with comprehensive insurance coverage.',
  },
  {
    icon: Users,
    title: 'Bender Family Quality',
    description: 'The same trusted service that built our remodeling reputation for 25+ years.',
  },
  {
    icon: Shield,
    title: 'Honest Pricing',
    description: 'Upfront quotes with no hidden fees. We explain costs before we start.',
  },
  {
    icon: PhoneCall,
    title: 'Local & Responsive',
    description: 'Based in Pollocksville, serving neighbors we know across five counties.',
  },
]

const processSteps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Call Us',
    description: 'Describe your issue or goals. We\'ll ask the right questions to understand your needs.',
  },
  {
    icon: Calendar,
    step: '02',
    title: 'Schedule',
    description: 'We\'ll set an appointment that works for you—often same-day for urgent issues.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Diagnose & Quote',
    description: 'Our technician assesses the situation and provides a clear, honest quote.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Complete',
    description: 'We do the work right, clean up, and make sure you\'re completely satisfied.',
  },
]

export default function HVACPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        {/* Gradient orbs - contained within bounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 md:translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-orange-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 md:-translate-x-1/3" />
        </div>

        <div className="relative container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium tracking-wide mb-6 md:mb-8">
                  <ThermometerSun className="w-4 h-4 text-blue-400" />
                  A Bender Company
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                  Comfort you can
                  <span className="text-blue-400"> count on.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10">
                  Bender Heating & Air brings the same trusted craftsmanship to HVAC that built our remodeling reputation. Expert installation, honest service, local care.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary px-6 sm:px-8 py-4 text-base bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]">
                    Schedule Service
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="tel:252-242-4822" className="btn-outline-light px-6 sm:px-8 py-4 text-base">
                    <Phone className="w-5 h-5" />
                    252-242-HVAC
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Logo display */}
            <FadeIn delay={0.4} direction="left">
              <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-full max-w-sm md:max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-3xl blur-2xl scale-110" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 md:p-14">
                    <Image
                      src="/images/bender-hvac-logo.png"
                      alt="Bender Heating & Air"
                      width={400}
                      height={200}
                      className="w-full h-auto"
                      priority
                    />
                    <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 sm:gap-6 text-white/60 text-xs sm:text-sm flex-wrap">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Snowflake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                        Cooling
                      </div>
                      <div className="w-1 h-1 bg-white/30 rounded-full hidden sm:block" />
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                        Heating
                      </div>
                      <div className="w-1 h-1 bg-white/30 rounded-full hidden sm:block" />
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Fan className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                        Air Quality
                      </div>
                    </div>
                  </div>
                </div>
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
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Our Services</span>
            <h2 className="heading-2 text-brand-charcoal mb-6">
              Complete HVAC solutions
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              From installation to repairs and maintenance, we handle all your heating and cooling needs with the same quality focus that defines everything we do.
            </p>
          </FadeIn>

          {/* Services grid */}
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              const iconColors = {
                installation: 'bg-blue-100 text-blue-600',
                heating: 'bg-orange-100 text-orange-600',
                repairs: 'bg-green-100 text-green-600',
              }
              const accentColor = iconColors[service.id as keyof typeof iconColors] || 'bg-blue-100 text-blue-600'

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
                        <div className={`aspect-[4/3] rounded-2xl overflow-hidden ${
                          service.id === 'installation' ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
                          service.id === 'heating' ? 'bg-gradient-to-br from-orange-500 to-red-600' :
                          'bg-gradient-to-br from-green-500 to-teal-600'
                        }`}>
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
                          <Icon className={`w-10 h-10 md:w-12 md:h-12 ${accentColor.split(' ')[1]}`} />
                        </motion.div>
                      </div>
                    </FadeIn>

                    {/* Content */}
                    <FadeIn direction={isEven ? 'left' : 'right'}>
                      <div>
                        <span className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 block ${
                          service.id === 'installation' ? 'text-blue-600' :
                          service.id === 'heating' ? 'text-orange-600' :
                          'text-green-600'
                        }`}>{service.tagline}</span>
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
                              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                service.id === 'installation' ? 'text-blue-600' :
                                service.id === 'heating' ? 'text-orange-600' :
                                'text-green-600'
                              }`} />
                              <span className="text-brand-gray text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link href="/contact" className={`inline-flex items-center gap-2 px-6 py-3.5 rounded font-semibold text-sm transition-all duration-300 text-white ${
                          service.id === 'installation' ? 'bg-blue-600 hover:bg-blue-500' :
                          service.id === 'heating' ? 'bg-orange-600 hover:bg-orange-500' :
                          'bg-green-600 hover:bg-green-500'
                        } hover:-translate-y-0.5`}>
                          Get a Quote
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
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn className="text-center mb-16">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Why Bender</span>
            <h2 className="heading-2 text-brand-charcoal mb-6">
              The Bender Difference
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              We're not just another HVAC company. We're your neighbors, backed by 25+ years of trusted service in Eastern NC.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.title}>
                  <div className="bg-white p-8 rounded-xl shadow-soft h-full text-center hover:shadow-soft-lg transition-shadow duration-300">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-blue-600" />
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
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">How It Works</span>
            <h2 className="heading-2 text-brand-charcoal mb-6">
              Simple, straightforward service
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              No runaround, no pressure. Just honest HVAC service from people who care.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.step}>
                  <div className="relative bg-slate-50 p-8 rounded-xl h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-blue-100 absolute top-4 right-6">
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
      <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

        <div className="container-wide text-center relative">
          <FadeIn>
            <Image
              src="/images/bender-hvac-logo.png"
              alt="Bender Heating & Air"
              width={280}
              height={100}
              className="mx-auto mb-8 opacity-90"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-2 text-white mb-6 max-w-2xl mx-auto">
              Ready for reliable comfort?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-large text-gray-300 mb-10 max-w-xl mx-auto">
              Whether you need a new system, routine maintenance, or emergency repair—we're here to help.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base bg-blue-600 hover:bg-blue-500">
                Schedule Service
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:252-242-4822" className="btn-outline-light px-8 py-4 text-base">
                <Phone className="w-5 h-5" />
                252-242-HVAC
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
