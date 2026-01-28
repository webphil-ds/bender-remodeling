'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ArrowRight, ChevronRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/remodeling', label: 'Remodeling' },
  { href: '/hvac', label: 'HVAC' },
  { href: '/electrical', label: 'Electrical' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMobileMenuOpen(false)
      }

      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const showDarkText = isScrolled || isMobileMenuOpen || !isHomePage

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-18 lg:h-22">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center"
              >
                <Image
                  src={!showDarkText ? '/images/logo-white.png' : '/images/logo.png'}
                  alt="Bender Remodeling"
                  width={160}
                  height={44}
                  className="h-9 lg:h-11 w-auto transition-all duration-300"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative px-4 py-2.5 group"
                    >
                      <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                        isActive
                          ? 'text-brand-red'
                          : showDarkText
                          ? 'text-brand-charcoal hover:text-brand-red'
                          : 'text-white/90 hover:text-white'
                      }`}>
                        {link.label}
                      </span>
                      {/* Active indicator */}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red rounded-full"
                        />
                      )}
                      {/* Hover indicator */}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                        isActive ? 'hidden' : ''
                      } ${showDarkText ? 'bg-brand-charcoal/10' : 'bg-white/20'}`} />
                    </Link>
                  )
                })}
              </div>

              {/* Phone + CTA */}
              <div className="ml-8 pl-8 border-l border-gray-200/20 flex items-center gap-4">
                <a
                  href="tel:252-514-0345"
                  className={`hidden xl:flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                    showDarkText
                      ? 'text-brand-gray hover:text-brand-charcoal'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Phone size={15} />
                  <span>(252) 514-0345</span>
                </a>
                <Link
                  href="/contact"
                  className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm transition-all duration-300 ${
                    showDarkText
                      ? 'bg-brand-red text-white hover:bg-brand-red-light hover:shadow-glow hover:-translate-y-0.5'
                      : 'bg-white text-brand-charcoal hover:bg-brand-red hover:text-white hover:-translate-y-0.5'
                  }`}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-10 w-11 h-11 flex items-center justify-center rounded-lg transition-colors duration-300 ${
                showDarkText
                  ? 'text-brand-charcoal hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-brand-charcoal/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-soft-xl overflow-y-auto"
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-11 h-11 flex items-center justify-center rounded-lg text-brand-charcoal hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} strokeWidth={2} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 pb-8">
                <nav className="space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href ||
                      (link.href !== '/' && pathname.startsWith(link.href))
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between py-4 border-b border-gray-100 group ${
                            isActive ? 'text-brand-red' : 'text-brand-charcoal'
                          }`}
                        >
                          <span className="text-lg font-semibold group-hover:text-brand-red transition-colors">
                            {link.label}
                          </span>
                          <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                            isActive
                              ? 'text-brand-red'
                              : 'text-gray-300 group-hover:text-brand-red group-hover:translate-x-1'
                          }`} />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.15 }}
                  className="mt-8 space-y-4"
                >
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center text-base py-4"
                  >
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <a
                    href="tel:252-514-0345"
                    className="flex items-center justify-center gap-3 py-4 text-brand-charcoal hover:text-brand-red transition-colors rounded-lg border border-gray-200 hover:border-brand-red/30"
                  >
                    <Phone size={20} />
                    <span className="font-semibold">(252) 514-0345</span>
                  </a>
                </motion.div>

                {/* Business Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <p className="text-sm text-brand-gray leading-relaxed">
                    Trusted home remodeling & HVAC services in Eastern North Carolina since 2001.
                  </p>
                  <p className="text-xs text-gray-400 mt-4">
                    Mon–Thu 8am–5pm · Fri 8am–12pm
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
