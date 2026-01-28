'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/MotionWrapper'
import {
  ArrowRight,
  Phone,
  ChefHat,
  Bath,
  Home,
  TreePine,
  Hammer,
  Building,
  Star,
  Award,
  Users,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    title: 'Kitchens',
    slug: 'kitchens',
    description: 'Where families gather',
    icon: ChefHat,
    href: '/remodeling#kitchens',
    size: 'large',
  },
  {
    title: 'Bathrooms',
    slug: 'bathrooms',
    description: 'Your personal retreat',
    icon: Bath,
    href: '/remodeling#bathrooms',
    size: 'medium',
  },
  {
    title: 'Additions',
    slug: 'additions',
    description: 'Room to grow',
    icon: Building,
    href: '/remodeling#additions',
    size: 'medium',
  },
  {
    title: 'Whole Home',
    slug: 'renovations',
    description: 'Complete transformation',
    icon: Home,
    href: '/remodeling#renovations',
    size: 'small',
  },
  {
    title: 'Outdoor',
    slug: 'outdoor',
    description: 'Decks & porches',
    icon: TreePine,
    href: '/remodeling#outdoor',
    size: 'small',
  },
  {
    title: 'Garages',
    slug: 'garages',
    description: 'Functional additions',
    icon: Hammer,
    href: '/remodeling#garages',
    size: 'small',
  },
]

const portfolioItems = [
  { id: 1, title: 'Custom Modern Kitchen', category: 'Kitchen', location: 'River Bend', span: 'col-span-2 row-span-2' },
  { id: 2, title: 'Bathroom Remodel', category: 'Bathroom', location: 'New Bern', span: 'col-span-1 row-span-1' },
  { id: 3, title: 'Covered Porch Addition', category: 'Addition', location: 'New Bern', span: 'col-span-1 row-span-2' },
  { id: 4, title: 'New Home Construction', category: 'Whole Home', location: 'River Bend', span: 'col-span-1 row-span-1' },
  { id: 5, title: 'Deck Additions', category: 'Outdoor', location: 'New Bern', span: 'col-span-1 row-span-1' },
]

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5', label: 'Counties Served' },
  { value: '100%', label: 'Licensed & Insured' },
]

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95])

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-brand-charcoal">
        {/* Background with parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/service-kitchens.jpg"
            alt="Beautiful kitchen remodel"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/85 to-brand-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative min-h-screen flex items-center"
        >
          <div className="container-wide py-32 lg:py-40">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium tracking-wide mb-8">
                  <Award className="w-4 h-4" />
                  Trusted Since 2001 · Eastern NC
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-display-lg font-bold text-white leading-[0.95] tracking-tight mb-8"
              >
                Trust. Respect.
                <br />
                <span className="text-brand-red">Excellence.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-300 max-w-xl mb-10 leading-relaxed"
              >
                We build what lasts. Kitchens, bathrooms, additions & complete renovations.
                Quality craftsmanship in New Bern and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-primary text-base px-8 py-4">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="btn-outline-light text-base px-8 py-4">
                  View Our Work
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 pt-8 border-t border-white/10"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom contact bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-charcoal/50 backdrop-blur-sm"
        >
          <div className="container-wide py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <a
                href="tel:252-514-0345"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red/10 transition-all">
                  <Phone size={16} />
                </span>
                <div>
                  <span className="text-xs text-gray-400 block">Call us today</span>
                  <span className="text-lg font-semibold">(252) 514-0345</span>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-red" />
                Licensed General Contractor · Free Estimates
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-brand-warm-white overflow-hidden">
        <div className="container-wide">
          {/* Section header */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
            <FadeIn className="lg:col-span-6">
              <span className="label mb-4 block">Our Services</span>
              <h2 className="heading-1 text-brand-charcoal">
                Every project,
                <br />
                <span className="text-brand-red">built right.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="body-large">
                From single-room updates to complete transformations—we handle projects of every scale with the same attention to detail.
              </p>
            </FadeIn>
          </div>

          {/* Bento Grid */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <StaggerItem
                  key={service.title}
                  className={
                    service.size === 'large'
                      ? 'col-span-2 row-span-2'
                      : service.size === 'medium'
                      ? 'col-span-1 lg:col-span-2 row-span-1'
                      : 'col-span-1 row-span-1'
                  }
                >
                  <Link href={service.href} className="group block h-full">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className={`relative h-full min-h-[200px] ${
                        service.size === 'large' ? 'min-h-[400px] lg:min-h-[480px]' : ''
                      } ${
                        service.size === 'medium' ? 'min-h-[200px] lg:min-h-[220px]' : ''
                      } bg-brand-cream rounded-lg overflow-hidden shadow-soft group-hover:shadow-soft-lg transition-shadow duration-300`}
                    >
                      {/* Background image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(/images/service-${service.slug}.jpg)` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end">
                        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                          <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-brand-red transition-colors duration-300">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className={`font-bold text-white mb-1 ${
                            service.size === 'large' ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'
                          }`}>
                            {service.title}
                          </h3>
                          <p className="text-white/70 text-sm">{service.description}</p>
                        </div>
                        <div className="mt-3 flex items-center text-brand-red font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-sm">Learn more</span>
                          <ArrowRight className="ml-1.5 h-4 w-4" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-36 bg-brand-charcoal overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left column - Sticky text */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <FadeIn>
                <span className="label mb-6 block">Our Story</span>
                <h2 className="heading-1 text-white mb-6">
                  Born from
                  <br />
                  <span className="text-brand-red">service.</span>
                </h2>
                <div className="divider mb-8" />
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  In 1999, Hurricane Floyd devastated Eastern NC. Our founder Jack Bender spent two years helping restore 24 homes through volunteer work.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  That experience became the foundation of our company. Twenty-five years later, we still approach every project with that same spirit—treating your home like it belongs to a neighbor, because it does.
                </p>
                <Link href="/about" className="link-arrow text-brand-red">
                  Read our full story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>

            {/* Right column - Image */}
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.2}>
                <div className="aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden shadow-soft-lg">
                  <Image
                    src="/images/story-1.jpg"
                    alt="Bender Remodeling team at work"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
            <FadeIn>
              <span className="label mb-4 block">Recent Work</span>
              <h2 className="heading-1 text-brand-charcoal">
                Built to <span className="text-brand-red">impress.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/portfolio" className="btn-secondary">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          {/* Portfolio Grid */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[180px] lg:auto-rows-[220px]">
            {portfolioItems.map((item) => (
              <StaggerItem
                key={item.id}
                className={item.span}
              >
                <Link href="/portfolio" className="group block h-full">
                  <div className="relative h-full bg-brand-cream rounded-lg overflow-hidden shadow-soft group-hover:shadow-soft-lg transition-all duration-300">
                    <Image
                      src={`/images/portfolio/project-${item.id}.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-brand-red text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                      <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.location}</p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding-sm bg-brand-cool-gray">
        <div className="container-wide">
          <FadeIn>
            <div className="bg-white rounded-xl p-8 md:p-12 lg:p-16 shadow-soft">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="label mb-4 block">Why Choose Us</span>
                  <h2 className="heading-2 text-brand-charcoal mb-6">
                    The Bender difference.
                  </h2>
                  <p className="body-large mb-8">
                    With painting, HVAC, electrical, and carpentry all under one roof, we handle every aspect of your project in-house. That's rare in this industry—and it means better quality, faster timelines, and one team you can trust.
                  </p>
                  <Link href="/about" className="btn-primary">
                    Learn About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { icon: Users, title: 'Personal Attention', desc: 'Work directly with our team from start to finish—no middlemen.' },
                      { icon: Award, title: 'Licensed & Insured', desc: 'Full licensing and insurance for your peace of mind.' },
                      { icon: CheckCircle2, title: 'Quality Guarantee', desc: 'We stand behind every project we complete.' },
                      { icon: Star, title: '25+ Years', desc: 'Decades of experience in Eastern NC homes.' },
                    ].map((item, index) => (
                      <FadeIn key={item.title} delay={index * 0.1}>
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-6 h-6 text-brand-red" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-charcoal mb-1">{item.title}</h4>
                            <p className="text-sm text-brand-gray">{item.desc}</p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn className="text-center mb-12 lg:mb-16">
            <span className="label mb-4 block">Our Mission</span>
            <h2 className="heading-2 text-brand-charcoal mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              To be the best remodeler in Eastern North Carolina.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Trust',
                description: 'Reliance on the integrity, ability, and surety of our people, our products, and our service.',
              },
              {
                title: 'Respect',
                description: 'Relationships built on commitment to our customers, their property, and their time.',
              },
              {
                title: 'Excellence',
                description: 'A passion for doing our best, translates into a finished product that you will love.',
              },
            ].map((item, index) => (
              <StaggerItem key={item.title}>
                <div className="text-center p-8 bg-brand-cream rounded-xl">
                  <h3 className="text-2xl font-bold text-brand-red mb-4">{item.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-brand-charcoal">
          <Image
            src="/images/cta-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/95 to-brand-charcoal/80" />
        </div>

        <div className="relative container-wide">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="heading-1 text-white mb-6">
                Ready to build
                <br />
                <span className="text-brand-red">something great?</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                Let's talk about your project. We'll walk through your vision and give you an honest assessment of what it takes to make it happen.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-base px-8 py-4">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:252-514-0345" className="btn-outline-light text-base px-8 py-4">
                  <Phone className="w-5 h-5" />
                  (252) 514-0345
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block overflow-hidden">
          <div className="absolute right-0 top-0 w-full h-full bg-brand-red/5 -skew-x-12 translate-x-1/4" />
        </div>
      </section>
    </>
  )
}
