'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogPost from '@/components/BlogPost'

export default function WholeHomeRemodelPost() {
  return (
    <BlogPost
      title="Whole Home Remodel Complete!"
      date="October 30, 2019"
      author="Bender Remodeling"
      category="Hurricane Recovery"
      heroImage="/images/blog/whole-home-remodel.jpg"
    >
      <p className="text-xl text-brand-gray leading-relaxed mb-8">
        This home's first floor was completely destroyed by Hurricane Florence and we remodeled it essentially from scratch. We're thrilled with the results and glad Florence didn't have the last word.
      </p>

      <p className="text-brand-gray leading-relaxed mb-8">
        Hurricane Florence devastated our community in September 2018. In the aftermath, we helped many of our neighbors rebuild and recover. This project was particularly meaningful—transforming a flood-damaged first floor into a beautiful, functional living space that the family could once again call home.
      </p>

      <div className="my-10 space-y-6">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/blog/whole-home-remodel.jpg"
            alt="Completed whole home remodel"
            width={800}
            height={533}
            className="w-full h-auto"
          />
          <p className="text-sm text-brand-gray mt-3 text-center italic">
            The beautifully restored living space
          </p>
        </div>

        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/blog/whole-home-remodel-2.jpg"
            alt="Another view of the remodeled home"
            width={800}
            height={533}
            className="w-full h-auto"
          />
          <p className="text-sm text-brand-gray mt-3 text-center italic">
            Attention to detail throughout the renovation
          </p>
        </div>
      </div>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">The Scope of Work</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        When floodwaters recede, the damage they leave behind goes far beyond what's visible. We had to address structural concerns, replace all flooring, drywall, electrical, and plumbing on the first floor. This wasn't just a cosmetic update—it was a complete reconstruction.
      </p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Complete first-floor demolition and reconstruction</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">New flooring throughout</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Updated electrical and plumbing systems</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Kitchen cabinets and appliances</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Fireplace restoration</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray">Interior trim and finish work</span>
        </li>
      </ul>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">Rising from the Storm</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        Projects like this remind us why we do what we do. Helping families recover from disaster and rebuild their lives is incredibly rewarding work. The finished home is not just restored—it's better than before, with modern updates and improvements that will serve the family for years to come.
      </p>

      <div className="mt-8 p-6 bg-slate-50 rounded-xl">
        <p className="text-brand-gray">
          <strong className="text-brand-charcoal">Want to see more?</strong> View the complete slideshow of this project in our{' '}
          <Link href="/portfolio" className="text-brand-red hover:underline">Portfolio section</Link> under "Whole Home Remodels."
        </p>
      </div>
    </BlogPost>
  )
}
