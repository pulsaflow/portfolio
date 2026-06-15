import type { MouseEventHandler, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'
type IconPosition = 'left' | 'right'

interface SharedProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: IconPosition
  loading?: boolean
  className?: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}
type ButtonProps = SharedProps

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-violet text-white shadow-violet hover:shadow-violet-lg',
  secondary:
    'bg-violet-600/10 text-violet-400 border border-violet-600/30 hover:bg-violet-600/20',
  ghost:
    'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
  outline:
    'border border-white/20 text-white hover:border-violet-500/50 hover:bg-white/5',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  className,
  children,
  onClick,
  href,
  target,
  rel,
  disabled,
  type = 'button',
}: ButtonProps) {
  const secureRel =
    target === '_blank'
      ? rel ?? 'noopener noreferrer'
      : rel

  const content = (
    <>
      {icon && iconPosition === 'left' ? (
        <span className="inline-flex items-center">{icon}</span>
      ) : null}
      <span>{loading ? 'Chargement...' : children}</span>
      {icon && iconPosition === 'right' ? (
        <span className="inline-flex items-center">{icon}</span>
      ) : null}
    </>
  )

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={secureRel}
        onClick={onClick}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
