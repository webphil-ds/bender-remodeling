'use client'

import Image from 'next/image'
import BlogPost from '@/components/BlogPost'

export default function TransformationTuesdayPost() {
  return (
    <BlogPost
      title="Transformation Tuesday: Motel to Dream Home"
      date="May 9, 2023"
      author="Maghan Bender"
      category="New Construction"
      heroImage="/images/blog/transformation-tuesday.jpg"
    >
      <p className="text-xl text-brand-gray leading-relaxed mb-8">
        Home Remodeler tears down Motel to build new! Follow our journey as we demolished the historic Trent Motel in Pollocksville, NC and constructed a beautiful new home from the ground up.
      </p>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">The Project</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        This project represented a departure from our typical remodeling work. The Trent Motel in Pollocksville, NC had sustained significant damage during Hurricane Florence in 2018 and had deteriorated considerably in the years since. Rather than let it continue to decline, the property owners decided to start fresh with a brand new home.
      </p>

      <p className="text-brand-gray leading-relaxed mb-6">
        We partnered with Dirtworks to handle the selective teardown and site clearing. Demolition began in March 2022, and from the cleared land, we built a stunning new residence that the homeowners now call home.
      </p>

      <div className="my-10 rounded-xl overflow-hidden">
        <Image
          src="/images/blog/transformation-tuesday.jpg"
          alt="Transformation from motel to new home"
          width={800}
          height={400}
          className="w-full h-auto"
        />
        <p className="text-sm text-brand-gray mt-3 text-center italic">
          The completed home stands where the old Trent Motel once was
        </p>
      </div>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">Project Details</h2>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Location:</strong> Pollocksville, NC (near New Bern area)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Timeline:</strong> Demolition began March 2022</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Previous Structure:</strong> The Trent Motel, damaged during Hurricane Florence</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Demolition Partner:</strong> Dirtworks</span>
        </li>
      </ul>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">Home Features</h2>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Vinyl siding exterior for durability and low maintenance</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Paintable shutters in Farrow & Ball Pigeon color</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Brass hardware finishes throughout</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Complete site clearing and new foundation</span>
        </li>
      </ul>

      <p className="text-brand-gray leading-relaxed">
        This transformation shows what's possible when you're willing to think beyond traditional remodeling. Sometimes starting fresh is the best path forward, and we were honored to help bring this vision to life.
      </p>
    </BlogPost>
  )
}
