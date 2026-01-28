'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '@/components/MotionWrapper'
import { ArrowRight, Phone, X, MapPin, Calendar } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'kitchens', label: 'Kitchens' },
  { id: 'bathrooms', label: 'Bathrooms' },
  { id: 'additions', label: 'Additions' },
  { id: 'renovations', label: 'Whole Home' },
  { id: 'outdoor', label: 'Outdoor' },
]

const projects = [
  {
    id: 1,
    title: 'Custom Modern Kitchen Build',
    category: 'kitchens',
    location: 'River Bend',
    year: '2024',
    description: 'Complete kitchen build in a new construction project, built exactly to minimalist and modern specifications.',
    featured: true,
  },
  {
    id: 2,
    title: 'Bathroom Remodel',
    category: 'bathrooms',
    location: 'New Bern',
    year: '2024',
    description: 'Primary bathroom transformed into a spa retreat with heated floors, frameless glass shower, and custom double vanity.',
    featured: false,
  },
  {
    id: 3,
    title: 'Covered Porch Addition',
    category: 'additions',
    location: 'New Bern',
    year: '2023',
    description: 'Carefully incorporating a screened-in porch into the existing house aesthetic.',
    featured: true,
  },
  {
    id: 4,
    title: 'New Home Construction',
    category: 'renovations',
    location: 'River Bend',
    year: '2023',
    description: 'Custom new home build featuring modern design, quality craftsmanship, and attention to detail throughout.',
    featured: false,
  },
  {
    id: 5,
    title: 'Deck Additions',
    category: 'outdoor',
    location: 'New Bern',
    year: '2024',
    description: 'Multi-level composite deck with screened porch, cable railings, and integrated lighting overlooking the Neuse River.',
    featured: false,
  },
  {
    id: 6,
    title: 'Minimalist Kitchen',
    category: 'kitchens',
    location: 'River Bend',
    year: '2023',
    description: 'Open concept transformation with wall removal, custom navy island, brass fixtures, and handmade tile backsplash.',
    featured: false,
  },
  {
    id: 7,
    title: 'Accessible Bath Conversion',
    category: 'bathrooms',
    location: 'New Bern',
    year: '2024',
    description: 'Aging-in-place renovation with curbless shower, grab bars, comfort-height fixtures, and non-slip flooring.',
    featured: false,
  },
  {
    id: 8,
    title: 'Post-Florence Pollocksville Rebuild',
    category: 'renovations',
    location: 'Pollocksville',
    year: '2022',
    description: 'Whole-home renovation made necessary by the tragic destruction Florence brought to us - but proud to have been a part of the recovery of our town.',
    featured: true,
  },
  {
    id: 9,
    title: 'Covered Carport & Garage',
    category: 'outdoor',
    location: 'Pollocksville',
    year: '2023',
    description: 'Custom covered carport and garage addition with durable construction and seamless integration with existing home.',
    featured: false,
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const regularProjects = filteredProjects.filter((p) => !p.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-slate via-brand-charcoal to-brand-charcoal" />
        </div>

        <div className="relative container-wide">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="label mb-4 block">Our Work</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading-display text-white mb-6">
                Every home
                <br />
                <span className="text-brand-red">has a story.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-xl text-gray-400 max-w-xl">
                Here are some we've helped write. Each project represents a family's vision brought to life.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] lg:top-[88px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container-wide">
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 rounded-lg ${
                    activeCategory === category.id
                      ? 'text-brand-charcoal'
                      : 'text-brand-gray hover:text-brand-charcoal'
                  }`}
                >
                  {category.label}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-brand-red/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="hidden sm:block text-sm text-brand-gray">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Projects */}
              {featuredProjects.length > 0 && (
                <div className="mb-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="group block w-full text-left"
                        >
                          <div className="relative aspect-[16/10] bg-brand-cream rounded-lg overflow-hidden mb-4 shadow-soft group-hover:shadow-soft-lg transition-shadow">
                            <Image
                              src={`/images/portfolio/${project.category}-${project.id}.jpg`}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-brand-charcoal text-sm font-semibold rounded-lg shadow-soft">
                                View Details
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold text-brand-charcoal group-hover:text-brand-red transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-brand-gray text-sm mt-1 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5" />
                                {project.location}
                                <span className="text-gray-300">·</span>
                                {project.year}
                              </p>
                            </div>
                            <span className="badge">
                              {categories.find((c) => c.id === project.category)?.label}
                            </span>
                          </div>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (featuredProjects.length + index) * 0.05 }}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group block w-full text-left"
                    >
                      <div className="relative aspect-[4/3] bg-brand-cream rounded-lg overflow-hidden mb-3 shadow-soft group-hover:shadow-soft-lg transition-shadow">
                        <Image
                          src={`/images/portfolio/${project.category}-${project.id}.jpg`}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div>
                        <span className="text-brand-red text-xs font-semibold uppercase tracking-wider">
                          {categories.find((c) => c.id === project.category)?.label}
                        </span>
                        <h3 className="font-semibold text-brand-charcoal group-hover:text-brand-red transition-colors mt-1">
                          {project.title}
                        </h3>
                        <p className="text-brand-gray text-sm flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-brand-gray">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto shadow-soft-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-soft hover:bg-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
                  <Image
                    src={`/images/portfolio/${selectedProject.category}-${selectedProject.id}.jpg`}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="badge mb-4 self-start">
                    {categories.find((c) => c.id === selectedProject.category)?.label}
                  </span>
                  <h3 className="heading-2 text-brand-charcoal mb-3">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-4 text-brand-gray text-sm mb-6">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.year}
                    </span>
                  </div>
                  <p className="body-large mb-8">
                    {selectedProject.description}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary self-start"
                    onClick={() => setSelectedProject(null)}
                  >
                    Start a Similar Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-brand-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="heading-2 text-brand-charcoal mb-6">
                Your home could be <span className="text-brand-red">next.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="body-large mb-10">
                Every project starts with a conversation about what you're imagining.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary px-8">
                  Start the Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:252-514-0345" className="btn-secondary px-8">
                  <Phone className="w-4 h-4" />
                  (252) 514-0345
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
