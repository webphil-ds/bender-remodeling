'use client'

import Image from 'next/image'
import BlogPost from '@/components/BlogPost'

export default function ContemporaryHomeBuildPost() {
  return (
    <BlogPost
      title="Contemporary Home Build"
      date="March 19, 2019"
      author="Bender Remodeling"
      category="New Construction"
      heroImage="/images/blog/contemporary-home.jpg"
    >
      <p className="text-xl text-brand-gray leading-relaxed mb-8">
        We loved working with the homeowners on this project! An incredibly unique and beautiful contemporary home we had the honor of building here in eastern North Carolina.
      </p>

      <p className="text-brand-gray leading-relaxed mb-8">
        This project showcases what's possible when clients come to us with a clear vision and trust us to execute it. The homeowners wanted something different—a contemporary design that would stand out in our area while still feeling connected to the Eastern NC landscape.
      </p>

      <div className="my-10 space-y-6">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/blog/contemporary-home.jpg"
            alt="Contemporary home exterior"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <p className="text-sm text-brand-gray mt-3 text-center italic">
            Front exterior view of the completed contemporary home
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/blog/contemporary-home-2.jpg"
              alt="Contemporary home detail"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/blog/contemporary-home-3.jpg"
              alt="Contemporary home angle"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">Design Philosophy</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        Contemporary design emphasizes clean lines, open spaces, and a connection between indoor and outdoor living. This home features large windows that flood the interior with natural light while framing views of the surrounding property.
      </p>

      <p className="text-brand-gray leading-relaxed mb-6">
        The exterior materials were carefully chosen to complement the natural environment while making a bold architectural statement. The result is a home that feels both modern and timeless.
      </p>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">Working with Bender Remodeling</h2>
      <p className="text-brand-gray leading-relaxed">
        While we're known for our remodeling work, projects like this demonstrate our capability to handle new construction from the ground up. Whether you're dreaming of a contemporary masterpiece or a traditional family home, we bring the same attention to detail and commitment to quality to every project.
      </p>
    </BlogPost>
  )
}
