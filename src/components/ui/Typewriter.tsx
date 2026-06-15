import { useEffect, useMemo, useState } from 'react'

interface TypewriterProps {
  words: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  delayBetween?: number
}

export default function Typewriter({
  words,
  className,
  speed = 80,
  deleteSpeed = 40,
  delayBetween = 2000,
}: TypewriterProps) {
  const safeWords = useMemo(
    () => (words.length > 0 ? words : ['Full-Stack']),
    [words]
  )
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = safeWords[wordIndex]

    if (!isDeleting && text === currentWord) {
      const pause = window.setTimeout(() => setIsDeleting(true), delayBetween)
      return () => window.clearTimeout(pause)
    }

    if (isDeleting && text.length === 0) {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % safeWords.length)
      return
    }

    const timeout = window.setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentWord.slice(0, Math.max(0, prev.length - 1))
            : currentWord.slice(0, prev.length + 1)
        )
      },
      isDeleting ? deleteSpeed : speed
    )

    return () => window.clearTimeout(timeout)
  }, [delayBetween, deleteSpeed, isDeleting, safeWords, speed, text, wordIndex])

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  )
}
