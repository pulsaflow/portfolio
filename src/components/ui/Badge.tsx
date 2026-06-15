import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type BadgeVariant = 'default' | 'violet' | 'cyan' | 'mono'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  icon?: ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-surface-2 text-text-secondary border border-border/50',
  violet: 'bg-violet-600/20 text-violet-400 border border-violet-600/30',
  cyan: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
  mono: 'font-mono bg-surface-2 text-text-primary border border-border/50',
}

export default function Badge({
  label,
  variant = 'default',
  icon,
  className,
}: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs sm:text-sm',
        variantClasses[variant],
        className
      )}
    >
      {icon}
      {label}
    </motion.span>
  )
}
