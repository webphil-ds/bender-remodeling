'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Clock, Award, Thermometer, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Remodeling', href: '/remodeling' },
  { label: 'HVAC', href: '/hvac' },
  { label: 'Electrical', href: '/electrical' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const remodelingServices = [
  { label: 'Kitchen Remodeling', href: '/remodeling#kitchens' },
  { label: 'Bathroom Remodeling', href: '/remodeling#bathrooms' },
  { label: 'Home Additions', href: '/remodeling#additions' },
  { label: 'Whole Home Renovations', href: '/remodeling#renovations' },
  { label: 'Decks & Outdoor', href: '/remodeling#outdoor' },
  { label: 'Garages & Outbuildings', href: '/remodeling#garages' },
]

const hvacServices = [
  { label: 'AC Installation', href: '/hvac#installation' },
  { label: 'Heating Systems', href: '/hvac#heating' },
  { label: 'Repairs & Maintenance', href: '/hvac#repairs' },
]

const electricalServices = [
  { label: 'Residential Wiring', href: '/electrical#residential' },
  { label: 'Panel Upgrades', href: '/electrical#panels' },
  { label: 'Lighting', href: '/electrical#lighting' },
  { label: 'Generators', href: '/electrical#generators' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-charcoal text-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      {/* Quick Contact Strip */}
      <div className="relative bg-brand-red">
        <div className="container-wide py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white">
            <span className="text-sm font-medium opacity-90">Questions? Reach out anytime:</span>
            <div className="flex items-center gap-6">
              <a
                href="tel:252-514-0345"
                className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                (252) 514-0345
              </a>
              <a
                href="mailto:info@benderremodeling.com"
                className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">info@benderremodeling.com</span>
                <span className="sm:hidden">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container-wide pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Bender Remodeling"
                width={160}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Eastern North Carolina's trusted home remodeler since 2001. Kitchens, baths, additions, whole-home renovations—plus full-service heating & air.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-brand-red" />
                <span>Licensed GC</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>25+ Years</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.facebook.com/BenderRemodeling/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Follow on Facebook"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/benderremodeling/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram size={18} />
              </motion.a>
            </div>
            <p className="text-xs text-gray-500 mt-3">Follow us on social media</p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-red mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Remodeling Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-5">
              Remodeling
            </h4>
            <ul className="space-y-3">
              {remodelingServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-red mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* HVAC Services */}
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-5 mt-8">
              <span className="flex items-center gap-2">
                <Thermometer className="w-3.5 h-3.5" />
                Heating & Air
              </span>
            </h4>
            <ul className="space-y-3">
              {hvacServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Electrical Services */}
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 mb-5 mt-8">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                Electrical
              </span>
            </h4>
            <ul className="space-y-3">
              {electricalServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-yellow-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:252-514-0345"
                className="flex items-start gap-3 group"
              >
                <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                  <Phone size={16} className="text-brand-red" />
                </span>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Phone</div>
                  <div className="text-white group-hover:text-brand-red transition-colors font-medium">
                    (252) 514-0345
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@benderremodeling.com"
                className="flex items-start gap-3 group"
              >
                <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                  <Mail size={16} className="text-brand-red" />
                </span>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="text-white group-hover:text-brand-red transition-colors font-medium text-sm">
                    info@benderremodeling.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-brand-red" />
                </span>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Address</div>
                  <div className="text-white text-sm">
                    8384 Hwy. 17<br />
                    Pollocksville, NC 28573
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-brand-red" />
                </span>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Hours</div>
                  <div className="text-sm text-gray-400 space-y-0.5">
                    <div>Mon–Thu: <span className="text-white">8am–5pm</span></div>
                    <div>Friday: <span className="text-white">8am–12pm</span></div>
                    <div>Weekends: <span className="text-gray-500">By appt</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Bender Remodeling, Inc. All rights reserved.
            </p>
            <div className="text-center md:text-right space-y-1">
              <p>
                <span className="text-brand-red">GC #63697</span>
                <span className="mx-2">·</span>
                <span className="text-blue-400">HVAC #19445</span>
                <span className="mx-2">·</span>
                <span className="text-yellow-500">Electrical #L23375</span>
              </p>
              <p>
                Serving Craven, Jones, Carteret, Pamlico & Onslow Counties
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
