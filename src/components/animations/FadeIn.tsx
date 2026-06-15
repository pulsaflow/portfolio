import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

function getOffset(direction: FadeInProps['direction']) {
  switch (direction) {
    case 'down':
      return { y: -30 }
    case 'left':
      return { x: 30 }
    case 'right':
      return { x: -30 }
    case 'up':
    default:
      return { y: 30 }
  }
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const offset = getOffset(direction)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}
