import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <motion.div
        className="absolute -top-56 -left-56 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: 'rgba(124, 58, 237, 0.15)' }}
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -bottom-44 -right-44 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: 'rgba(6, 182, 212, 0.1)' }}
        animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
        transition={{ duration: 8, delay: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M40 0H0v40'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
