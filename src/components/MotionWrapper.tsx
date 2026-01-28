'use client'

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { ReactNode, useRef } from 'react'

// Smooth easing curve
const smoothEase = [0.25, 0.1, 0.25, 1]

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  direction = 'up',
  distance = 30,
  once = true,
}: FadeInProps) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once, amount: 0.01 }}
      transition={{
        duration,
        delay,
        ease: smoothEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayStart?: number
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  delayStart = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayStart,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 20,
}: StaggerItemProps) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.5,
            ease: smoothEase,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleOnHoverProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function ScaleOnHover({
  children,
  className = '',
  scale = 1.02,
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  width?: 'fit-content' | '100%'
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  width = 'fit-content',
}: RevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width }}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.5, delay, ease: smoothEase }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        whileInView={{ left: '100%' }}
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.5, delay: delay + 0.5, ease: 'easeIn' }}
        className="absolute inset-0 bg-brand-red z-20"
      />
    </div>
  )
}

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function Parallax({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const multiplier = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

interface FloatingProps {
  children: ReactNode
  className?: string
  duration?: number
  distance?: number
  delay?: number
}

export function Floating({
  children,
  className = '',
  duration = 3,
  distance = 10,
  delay = 0,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({
  children,
  className = '',
  strength = 0.3,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * strength
    const y = (clientY - top - height / 2) * strength
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface CountUpProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export function CountUp({
  end,
  duration = 2,
  className = '',
  suffix = '',
  prefix = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
  })

  const displayValue = useTransform(springValue, (latest) => Math.round(latest))

  return (
    <motion.span
      ref={ref}
      className={className}
      onViewportEnter={() => springValue.set(end)}
    >
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  )
}

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
}: TextRevealProps) {
  const words = children.split(' ')

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: delay + index * 0.1,
                  ease: smoothEase,
                },
              },
            }}
            className="inline-block"
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

interface SlideInProps {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
}

export function SlideIn({
  children,
  className = '',
  direction = 'left',
  delay = 0,
  duration = 0.6,
}: SlideInProps) {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface BlurInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function BlurIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
}: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
