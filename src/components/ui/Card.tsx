import type { MouseEventHandler, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type GlowVariant = 'violet' | 'cyan' | 'none'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: GlowVariant
  onClick?: MouseEventHandler<HTMLDivElement>
}

const glowClasses: Record<GlowVariant, string> = {
  none: '',
  violet: 'shadow-[0_0_30px_rgba(124,58,237,0.2)]',
  cyan: 'shadow-[0_0_30px_rgba(6,182,212,0.2)]',
}

export default function Card({
  children,
  className,
  hover = false,
  glow = 'none',
  onClick,
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        'rounded-2xl p-6 md:p-8',
        'bg-[rgba(17,17,24,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)]',
        glowClasses[glow],
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: 'rgba(124,58,237,0.4)',
              boxShadow:
                '0 16px 48px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.2)',
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
