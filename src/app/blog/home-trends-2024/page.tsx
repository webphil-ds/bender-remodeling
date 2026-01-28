'use client'

import Image from 'next/image'
import BlogPost from '@/components/BlogPost'

export default function HomeTrends2024Post() {
  const trends = [
    {
      name: 'Woodgrain Millwork',
      description: 'Intricate wood designs and woodworking are experiencing a major resurgence. From custom built-ins to detailed trim work, natural wood craftsmanship is back in a big way.',
    },
    {
      name: 'Brass Accents',
      description: 'Gold and brass finishes, particularly unlacquered brass that develops a natural patina over time, are the preferred metallic choice for hardware, fixtures, and accents.',
    },
    {
      name: 'Vintage Furniture',
      description: 'Period pieces are sought after for their quality construction and nostalgic appeal. Mixing vintage finds with modern pieces creates spaces with character and history.',
    },
    {
      name: 'Statement Tiles',
      description: 'Bold, richly-hued tiles are being used to add personality to spaces like showers, backsplashes, and floors. Think beyond subway tile to patterns and colors that make an impact.',
    },
    {
      name: 'Mixed Metals',
      description: 'Combining different metal finishes—black, copper, brass, chrome—in a single space creates visual interest that goes beyond standard builder-grade uniformity.',
    },
    {
      name: 'Intimate Dining Areas',
      description: 'Dedicated, cozier dining spaces designed for family gatherings are gaining traction. The formal dining room is being reimagined as a warm, inviting space for connection.',
    },
    {
      name: 'Wallpaper',
      description: 'Modern patterned wallpapers offer visual richness and texture. Removable options provide flexibility for renters and those who like to change things up.',
    },
    {
      name: 'Exposed Staircases',
      description: 'Open staircase designs maximize space and provide customization opportunities through creative spindles, railings, and under-stair storage.',
    },
    {
      name: 'Bold Hues',
      description: 'Rich, saturated paint colors are replacing the all-gray-everything trend. Deep greens, warm terracottas, and moody blues are making their way into homes.',
    },
    {
      name: 'Cozy Spaces',
      description: 'Comfortable, lived-in aesthetics with fireplaces, soft textures, and warm gathering areas are preferred over cold, minimalist designs. Home should feel like home.',
    },
  ]

  return (
    <BlogPost
      title="10 Home Trends for 2024"
      date="January 17, 2024"
      author="Maghan Bender"
      category="Design Trends"
      heroImage="/images/blog/home-trends-2024.png"
    >
      <p className="text-xl text-brand-gray leading-relaxed mb-8">
        From woodgrain millwork to cozy spaces, discover what's shaping home design this year. Hint: it's not grays and sleek designs anymore.
      </p>

      <div className="my-10 rounded-xl overflow-hidden">
        <Image
          src="/images/blog/home-trends-2024.png"
          alt="2024 Home Design Trends"
          width={800}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <p className="text-brand-gray leading-relaxed mb-8">
        2024 brings a refreshing shift away from the cool, minimalist aesthetics that have dominated for the past decade. Homeowners are embracing warmth, personality, and craftsmanship in their spaces. Here are the top trends we're seeing—and helping our clients incorporate—this year.
      </p>

      <div className="space-y-8 mt-10">
        {trends.map((trend, index) => (
          <div key={trend.name} className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center">
              <span className="text-brand-red font-bold text-lg">{index + 1}</span>
            </div>
            <div>
              <h3 className="heading-5 text-brand-charcoal mb-2">{trend.name}</h3>
              <p className="text-brand-gray leading-relaxed">{trend.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-slate-50 rounded-xl">
        <h3 className="heading-5 text-brand-charcoal mb-4">Ready to Update Your Home?</h3>
        <p className="text-brand-gray leading-relaxed">
          Whether you want to incorporate one of these trends or completely reimagine your space, we're here to help. Our team stays current with design trends while always prioritizing timeless quality and craftsmanship that will serve you well for years to come.
        </p>
      </div>
    </BlogPost>
  )
}
