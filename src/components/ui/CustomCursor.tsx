import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isCoarse, setIsCoarse] = useState(false)

  const mouse = useRef({ x: 0, y: 0 })
  const delayed = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const ringX = useMotionValue(0)
  const ringY = useMotionValue(0)
  const dotX = useMotionValue(0)
  const dotY = useMotionValue(0)

  useEffect(() => {
    const media = window.matchMedia('(pointer: coarse)')
    const updatePointerType = () => setIsCoarse(media.matches)
    updatePointerType()
    media.addEventListener('change', updatePointerType)
    return () => media.removeEventListener('change', updatePointerType)
  }, [])

  useEffect(() => {
    if (isCoarse) return

    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
      dotX.set(event.clientX)
      dotY.set(event.clientY)
      setIsVisible(true)
    }

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest('a, button, [role="button"]')
      setIsHovering(Boolean(interactive))
    }

    const onMouseLeave = () => setIsVisible(false)

    const animate = () => {
      const speed = 0.18
      delayed.current.x += (mouse.current.x - delayed.current.x) * speed
      delayed.current.y += (mouse.current.y - delayed.current.y) * speed
      ringX.set(delayed.current.x)
      ringY.set(delayed.current.y)
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [dotX, dotY, isCoarse, ringX, ringY])

  if (isCoarse) return null

  return (
    <>
      <motion.div
        className="fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{
          left: ringX,
          top: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? '#7c3aed' : 'rgba(0,0,0,0)',
          borderColor: isHovering ? '#7c3aed' : 'rgba(255,255,255,0.8)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.4 }}
      >
        <div className="h-9 w-9 rounded-full border-2" />
      </motion.div>

      <motion.div
        className="fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{
          left: dotX,
          top: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </motion.div>
    </>
  )
}
