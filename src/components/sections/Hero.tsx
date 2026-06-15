import { motion } from 'framer-motion'
import { ArrowDown, Download, Github } from 'lucide-react'
import AvatarPlaceholder from '@/components/ui/AvatarPlaceholder'
import Button from '@/components/ui/Button'
import CountUp from '@/components/ui/CountUp'
import Typewriter from '@/components/ui/Typewriter'
import { useMousePosition } from '@/hooks/useMousePosition'
import { contactData } from '@/data/contact'
import { overviewData } from '@/data/overview'

const stats = [
  { value: 2, suffix: '+', label: "Années d'expérience" },
  { value: 5, suffix: '+', label: 'Projets réalisés' },
  { value: 1000, suffix: '+', label: 'Utilisateurs PulsaBot' },
]

export default function Hero() {
  const { x, y } = useMousePosition()
  const github = contactData.liens.find((link) => link.platform === 'GitHub')

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative z-10 flex min-h-screen items-center">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(124, 58, 237, 0.15), transparent 50%)`,
        }}
      />

      <div className="container mx-auto max-w-6xl px-6 pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 font-mono text-sm text-violet-400"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Disponible pour de nouveaux projets
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 font-display text-5xl font-bold leading-tight md:text-7xl"
            >
              <span className="block text-white">{overviewData.nom}</span>
              <span className="mt-2 block text-gradient">
                <Typewriter
                  words={['React Dev', 'Node.js Dev', 'Full-Stack', 'Discord Bots', 'PulsaBot']}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 max-w-xl text-lg text-text-secondary"
            >
              {overviewData.enBref}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-10 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="#projects" icon={<ArrowDown className="h-4 w-4" />} iconPosition="right">
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={github?.url ?? 'https://github.com/gabrielrevest'}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github className="h-5 w-5" />}
                iconPosition="left"
              >
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Download className="h-4 w-4" />}
                iconPosition="left"
              >
                CV PDF
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex gap-8 border-t border-white/10 pt-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-gradient">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-violet-600/30 to-transparent blur-3xl" />

            <div className="glass shadow-violet-lg relative h-80 w-80 overflow-hidden rounded-3xl border border-violet-500/30">
              <AvatarPlaceholder initials="GR" />

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="glass absolute -right-4 -top-4 rounded-xl border border-violet-500/30 px-3 py-2 text-sm"
              >
                ⚡ React 19
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="glass absolute -bottom-4 -left-4 rounded-xl border border-cyan-500/30 px-3 py-2 text-sm"
              >
                🟢 Node.js
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/20 pt-1"
        >
          <div className="h-2 w-1 rounded-full bg-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
