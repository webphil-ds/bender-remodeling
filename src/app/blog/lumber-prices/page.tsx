'use client'

import BlogPost from '@/components/BlogPost'

export default function LumberPricesPost() {
  return (
    <BlogPost
      title="Lumber Prices and Remodeling"
      date="March 30, 2021"
      author="Bender Remodeling"
      category="Industry News"
    >
      <p className="text-xl text-brand-gray leading-relaxed mb-8">
        Material costs and supply chain delays have significantly impacted construction projects. Here's what homeowners should know about planning their remodels during these challenging times.
      </p>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">The Current Situation</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        If you've been following the news or talking to anyone in the construction industry, you've likely heard about skyrocketing lumber prices. The cost of framing lumber has increased dramatically since the start of the pandemic, affecting everything from new home construction to deck building to simple remodeling projects.
      </p>

      <p className="text-brand-gray leading-relaxed mb-6">
        It's not just lumber either. Supply chain disruptions have impacted availability and pricing across a wide range of building materials—appliances, windows, roofing materials, and more. Lead times that used to be measured in days are now often measured in weeks or months.
      </p>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">What This Means for Your Project</h2>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Higher costs:</strong> Projects that would have cost X a year ago may now cost significantly more due to material prices.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Longer timelines:</strong> Material availability can extend project schedules beyond traditional estimates.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-brand-gray"><strong className="text-brand-charcoal">Quote validity:</strong> Estimates may need to be updated if material prices change significantly between quote and project start.</span>
        </li>
      </ul>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">Our Approach</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        At Bender Remodeling, we've always been committed to honest, transparent pricing. During these unusual times, that commitment is more important than ever. We'll give you accurate information about current costs and realistic timelines based on material availability.
      </p>

      <p className="text-brand-gray leading-relaxed mb-6">
        We're also working closely with our suppliers to lock in pricing where possible and identify alternative materials when traditional options are unavailable or prohibitively expensive. Our goal is always to deliver the best value for your investment.
      </p>

      <h2 className="heading-4 text-brand-charcoal mt-10 mb-4">Should You Wait?</h2>
      <p className="text-brand-gray leading-relaxed mb-6">
        This is a question we're getting a lot. The honest answer is: it depends. No one can predict with certainty when or if prices will return to pre-pandemic levels. Some economists expect a gradual normalization; others suggest higher prices may be the new normal.
      </p>

      <p className="text-brand-gray leading-relaxed">
        If your project is essential—addressing safety issues, damage, or significantly impacting your quality of life—waiting may not be the right choice. If it's more discretionary, it might make sense to discuss timing options with us. Either way, we're here to help you make an informed decision.
      </p>
    </BlogPost>
  )
}
