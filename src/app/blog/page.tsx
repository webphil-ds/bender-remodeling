'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/MotionWrapper'
import {
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Home,
  Hammer,
  Clock,
} from 'lucide-react'

const featuredPost = {
  slug: 'transformation-tuesday',
  title: 'Transformation Tuesday: Motel to Dream Home',
  excerpt: 'Home Remodeler tears down Motel to build new! Follow our journey as we demolished the historic Trent Motel in Pollocksville, NC and constructed a beautiful new home from the ground up.',
  date: 'May 9, 2023',
  author: 'Maghan Bender',
  category: 'New Construction',
  image: '/images/blog/transformation-tuesday.jpg',
}

const blogPosts = [
  {
    slug: 'home-trends-2024',
    title: '10 Home Trends for 2024',
    excerpt: "From woodgrain millwork to cozy spaces, discover what's shaping home design this year. Hint: it's not grays and sleek designs anymore.",
    date: 'January 17, 2024',
    author: 'Maghan Bender',
    category: 'Design Trends',
    icon: TrendingUp,
    image: '/images/blog/home-trends-2024.png',
    trends: [
      'Woodgrain Millwork',
      'Brass Accents',
      'Vintage Furniture',
      'Statement Tiles',
      'Mixed Metals',
      'Intimate Dining Areas',
      'Wallpaper',
      'Exposed Staircases',
      'Bold Hues',
      'Cozy Spaces',
    ],
  },
  {
    slug: 'contemporary-home-build',
    title: 'Contemporary Home Build',
    excerpt: 'We loved working with the homeowners on this project! An incredibly unique and beautiful contemporary home we had the honor of building here in eastern North Carolina.',
    date: 'March 19, 2019',
    author: 'Bender Remodeling',
    category: 'New Construction',
    icon: Home,
    image: '/images/blog/contemporary-home.jpg',
  },
  {
    slug: 'whole-home-remodel',
    title: 'Whole Home Remodel Complete!',
    excerpt: "This home's first floor was completely destroyed by Hurricane Florence and we remodeled it essentially from scratch. We're thrilled with the results and glad Florence didn't have the last word.",
    date: 'October 30, 2019',
    author: 'Bender Remodeling',
    category: 'Hurricane Recovery',
    icon: Hammer,
    image: '/images/blog/whole-home-remodel.jpg',
  },
  {
    slug: 'lumber-prices',
    title: 'Lumber Prices and Remodeling',
    excerpt: 'Material costs and supply chain delays have significantly impacted construction projects. Here\'s what homeowners should know about planning their remodels during these challenging times.',
    date: 'March 30, 2021',
    author: 'Bender Remodeling',
    category: 'Industry News',
    icon: TrendingUp,
  },
  {
    slug: 'appraisals-lumber',
    title: 'Appraisals & Lumber Prices',
    excerpt: 'How rising building material costs are impacting home appraisals and what it means for your renovation investment.',
    date: 'March 2, 2021',
    author: 'Bender Remodeling',
    category: 'Industry News',
    icon: Home,
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-charcoal overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="relative container-wide">
          <FadeIn>
            <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              News & Insights
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-display text-white mb-6">
              The Bender Blog
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-xl text-gray-400 max-w-2xl">
              Project showcases, design trends, and insights from over two decades of transforming homes across Eastern North Carolina.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn>
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="relative bg-slate-50 rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-brand-red text-white text-xs font-semibold uppercase tracking-wider rounded">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-brand-gray mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                    </div>
                    <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                      {featuredPost.category}
                    </span>
                    <h2 className="heading-3 text-brand-charcoal mb-4 group-hover:text-brand-red transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="body-large mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-brand-red font-semibold group-hover:gap-3 transition-all">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 2024 Trends Highlight */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <div className="flex items-center gap-4 text-sm text-brand-gray mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                </div>
                <span className="text-brand-red text-xs font-semibold uppercase tracking-[0.15em] mb-3 block">
                  {blogPosts[0].category}
                </span>
                <h2 className="heading-2 text-brand-charcoal mb-6">
                  {blogPosts[0].title}
                </h2>
                <p className="body-large mb-8">
                  {blogPosts[0].excerpt}
                </p>
                <p className="text-brand-gray leading-relaxed mb-8">
                  2024 brings a refreshing shift away from the cool, minimalist aesthetics of recent years. Homeowners are embracing warmth, personality, and craftsmanship in their spaces.
                </p>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="btn-primary"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <Link href={`/blog/${blogPosts[0].slug}`} className="block group">
                <div className="bg-white rounded-2xl p-8 shadow-soft group-hover:shadow-soft-lg transition-shadow">
                  <h3 className="heading-5 text-brand-charcoal mb-6">The Top 10 Trends:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {blogPosts[0].trends?.map((trend, index) => (
                      <motion.div
                        key={trend}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <span className="w-8 h-8 bg-brand-red/10 text-brand-red rounded-lg flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium text-brand-charcoal">{trend}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn className="mb-12">
            <h2 className="heading-3 text-brand-charcoal">More from the Blog</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => {
              const Icon = post.icon
              return (
                <StaggerItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="block group h-full">
                    <article className="bg-slate-50 rounded-xl overflow-hidden h-full hover:shadow-soft-lg transition-all duration-300">
                      {/* Image or Icon Header */}
                      <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-charcoal to-slate-700 overflow-hidden">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-16 h-16 text-white/20" strokeWidth={1} />
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-brand-charcoal text-xs font-semibold rounded">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-brand-gray mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{post.author}</span>
                        </div>
                        <h3 className="heading-5 text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-brand-gray text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-brand-red text-sm font-semibold group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        <div className="container-wide text-center relative">
          <FadeIn>
            <h2 className="heading-2 text-white mb-6">
              Ready to start your project?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-gray-400 mb-10 max-w-xl mx-auto">
              Let's discuss your vision. We'd love to help transform your home into something extraordinary.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
