import { cn } from '@/lib/cn'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  label?: string
}

export default function Section({ id, children, className, label }: SectionProps) {
  return (
    <section id={id} className={cn('section relative z-10', className)}>
      <div className="container mx-auto max-w-6xl px-6">
        {label ? (
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-sm text-violet-400">{label}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}
