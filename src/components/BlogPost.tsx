'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/MotionWrapper'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'

interface BlogPostProps {
  title: string
  date: string
  author: string
  category: string
  heroImage?: string
  children: React.ReactNode
}

export default function BlogPost({
  title,
  date,
  author,
  category,
  heroImage,
  children,
}: BlogPostProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-charcoal overflow-hidden">
        {/* Background */}
        {heroImage ? (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal/60" />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          </>
        )}

        <div className="relative container-wide">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-red text-white text-xs font-semibold uppercase tracking-wider rounded">
                {category}
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="heading-display text-white mb-6 max-w-4xl">
              {title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {author}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="prose prose-lg prose-gray max-w-none">
                {children}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container-wide text-center">
          <FadeIn>
            <p className="text-brand-gray mb-6">Want to see more of our work and insights?</p>
            <Link href="/blog" className="btn-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
