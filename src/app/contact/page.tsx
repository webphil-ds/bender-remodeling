'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/MotionWrapper'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Loader2,
  ExternalLink,
} from 'lucide-react'

const services = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Home Addition',
  'Whole Home Renovation',
  'Deck or Porch',
  'Garage or Outbuilding',
  'Storm Damage Repair',
  'Other',
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdddqvb'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          service: formState.service,
          message: formState.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        setError(data.error || 'Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Unable to send message. Please try again or call us at (252) 514-0345.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Bender Remodeling"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/70 to-brand-charcoal" />
        </div>

        <div className="relative container-wide">
          <FadeIn>
            <span className="label mb-4 block">Get in Touch</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-display text-white mb-6 max-w-3xl">
              Let's Talk About
              <span className="text-brand-red"> Your Project</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-xl text-gray-300 max-w-2xl">
              Ready to start? Have questions? We're here to help. Reach out and let's discuss how we can transform your home.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="heading-3 text-brand-charcoal mb-8">
                  Contact Information
                </h2>

                <div className="space-y-5 mb-10">
                  <a
                    href="tel:252-514-0345"
                    className="flex items-start gap-4 group p-4 -m-4 rounded-xl hover:bg-brand-cream transition-colors"
                  >
                    <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                      <Phone className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal mb-1">Phone</p>
                      <p className="text-brand-gray group-hover:text-brand-red transition-colors">
                        (252) 514-0345
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@benderremodeling.com"
                    className="flex items-start gap-4 group p-4 -m-4 rounded-xl hover:bg-brand-cream transition-colors"
                  >
                    <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                      <Mail className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal mb-1">Email</p>
                      <p className="text-brand-gray group-hover:text-brand-red transition-colors">
                        info@benderremodeling.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 -m-4">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal mb-1">Address</p>
                      <p className="text-brand-gray">
                        8384 Hwy. 17<br />
                        Pollocksville, NC 28573
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 -m-4">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal mb-2">Hours</p>
                      <div className="text-brand-gray text-sm space-y-1">
                        <div className="flex justify-between gap-8">
                          <span>Monday – Thursday</span>
                          <span className="font-medium text-brand-charcoal">8am – 5pm</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Friday</span>
                          <span className="font-medium text-brand-charcoal">8am – 12pm</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Weekends</span>
                          <span className="text-brand-gray">By appointment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <p className="font-semibold text-brand-charcoal mb-4">Follow Us</p>
                  <a
                    href="https://www.facebook.com/BenderRemodeling/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-cream rounded-lg text-brand-charcoal hover:bg-brand-red/10 hover:text-brand-red transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="font-medium">Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-brand-cream p-8 md:p-10 rounded-xl">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="heading-3 text-brand-charcoal mb-4">
                        Message Sent!
                      </h3>
                      <p className="text-brand-gray mb-6 max-w-sm mx-auto">
                        Thank you for reaching out. We'll get back to you within one business day.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false)
                          setError('')
                          setFormState({
                            name: '',
                            email: '',
                            phone: '',
                            service: '',
                            message: '',
                          })
                        }}
                        className="text-brand-red font-semibold hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="heading-3 text-brand-charcoal mb-2">
                        Request a Consultation
                      </h2>
                      <p className="text-brand-gray mb-8">
                        Tell us about your project and we'll be in touch to discuss next steps.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                            {error}
                          </div>
                        )}
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="form-label">
                              Full Name <span className="text-brand-red">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formState.name}
                              onChange={handleChange}
                              className="input"
                              placeholder="John Smith"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="form-label">
                              Phone Number <span className="text-brand-red">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formState.phone}
                              onChange={handleChange}
                              className="input"
                              placeholder="(252) 555-0123"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="form-label">
                            Email Address <span className="text-brand-red">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="input"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="service" className="form-label">
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            className="select"
                          >
                            <option value="">Select a service...</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="form-label">
                            Tell Us About Your Project <span className="text-brand-red">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formState.message}
                            onChange={handleChange}
                            className="textarea"
                            placeholder="Describe what you're looking to accomplish..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Send Message
                              <Send className="w-4 h-4" />
                            </span>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-brand-cream">
        <div className="aspect-[21/9] md:aspect-[21/6] bg-brand-slate relative overflow-hidden">
          <Image
            src="/images/map-placeholder.svg"
            alt="Location map"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 to-brand-charcoal/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-white text-lg mb-2">8384 Hwy. 17, Pollocksville, NC 28573</p>
              <a
                href="https://maps.google.com/?q=8384+Hwy+17+Pollocksville+NC+28573"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-red font-medium hover:underline"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-14 bg-brand-charcoal">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-1">
                Prefer to talk?
              </h3>
              <p className="text-gray-400">
                Give us a call and we'll discuss your project directly.
              </p>
            </div>
            <a
              href="tel:252-514-0345"
              className="btn-primary px-8"
            >
              <Phone className="w-4 h-4" />
              (252) 514-0345
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
