import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
}

export default function CountUp({
  end,
  suffix = '',
  duration = 2,
}: CountUpProps) {
  const [value, setValue] = useState(0)
  const animationRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const hasAnimatedRef = useRef(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView || hasAnimatedRef.current) return

    hasAnimatedRef.current = true
    const totalDuration = duration * 1000

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(elapsed / totalDuration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step)
      }
    }

    animationRef.current = requestAnimationFrame(step)

    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)
    }
  }, [duration, end, inView])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
