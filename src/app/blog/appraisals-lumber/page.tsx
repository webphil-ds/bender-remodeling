'use client'

import BlogPost from '@/components/BlogPost'

export default function AppraisalsLumberPost() {
  return (
    <BlogPost
      title="Appraisals & Lumber Prices"
      date="March 2, 2021"
      author="Bender Remodeling"
      category="Industry News"
    >
      <p className="text-xl text-brand-gray leading-relaxed mb-8">
        How rising building material costs are impacting home appraisals and what it means for your renovation investment.
      </p>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">The Appraisal Challenge</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        One of the less-discussed impacts of rising construction costs is how they affect home appraisals. When lumber and other building materials cost more, the cost to build or remodel a home increases—but do appraisals reflect this?
      </p>

      <p className="text-brand-gray leading-relaxed mb-6">
        The short answer is: not always, and not immediately. Appraisers typically base their valuations on comparable sales in the area. If those comparable homes sold before the recent price increases, the appraisal may not fully reflect the current replacement cost of your improvements.
      </p>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">What This Means for Homeowners</h2>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Refinancing:</strong> If you're planning to refinance after a renovation, your appraisal might not reflect the full cost of your improvements.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Insurance:</strong> Make sure your homeowner's insurance reflects the actual replacement cost of your home, not an outdated figure.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">ROI calculations:</strong> Traditional rules of thumb about which renovations "pay for themselves" may need adjustment.</span>
        </li>
      </ul>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">Our Recommendations</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        First, don't let appraisal concerns stop you from making improvements that will enhance your quality of life. You live in your home every day—the value of enjoying your space goes beyond what any appraiser can calculate.
      </p>

      <p className="text-brand-gray leading-relaxed mb-6">
        Second, keep detailed records of your renovation costs, including materials, labor, and permits. This documentation can be useful when working with appraisers, insurance agents, or future buyers.
      </p>

      <p className="text-brand-gray leading-relaxed mb-6">
        Third, work with a reputable contractor who can help you make smart decisions about where to invest. Some improvements add more value than others, and we can help guide you toward choices that make sense both for your lifestyle and your investment.
      </p>

      <div className="mt-8 p-6 bg-slate-50 rounded-xl">
        <h3 className="heading-5 text-brand-charcoal mb-3">Questions?</h3>
        <p className="text-brand-gray">
          If you're planning a renovation and have concerns about how it might affect your home's value, we're happy to discuss. We've helped hundreds of homeowners in Eastern NC make smart improvements to their homes.
        </p>
      </div>
    </BlogPost>
  )
}
