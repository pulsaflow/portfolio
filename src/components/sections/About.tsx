import { motion } from 'framer-motion'
import { Calendar, MapPin, Target, Zap } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer from '@/components/animations/StaggerContainer'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { overviewData } from '@/data/overview'

interface TimelineItem {
  periode: string
  role: string
  contexte: string
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-violet-500 via-violet-500/50 to-transparent" />
      {items.map((item, index) => (
        <motion.div
          key={`${item.periode}-${index}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="relative last:pb-0 pb-10 pl-12"
        >
          <div className="absolute left-2 top-1 h-4 w-4 rounded-full border-2 border-background bg-violet-600 ring-2 ring-violet-500/30" />
          <div className="glass rounded-xl border border-white/5 p-5">
            <span className="mb-1 block font-mono text-xs text-violet-400">{item.periode}</span>
            <h3 className="mb-1 font-display font-semibold text-white">{item.role}</h3>
            <p className="text-sm text-text-secondary">{item.contexte}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function About() {
  const objectives = [
    overviewData.objectifs.courtTerme,
    overviewData.objectifs.moyenTerme,
    overviewData.objectifs.sideProjects,
  ]

  return (
    <Section id="about" label="// 01 À PROPOS">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-3">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">À propos</h2>
            <p className="mt-4 max-w-3xl text-text-secondary">{overviewData.enBref}</p>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Timeline items={overviewData.parcours} />
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.12}>
          <div className="space-y-6 lg:col-span-2">
            <FadeIn direction="left">
              <Card hover glow="violet">
                <h3 className="mb-4 font-display text-xl font-semibold text-white">En bref</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 border-b border-white/5 py-3 last:border-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                      <MapPin className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-text-muted">Localisation</span>
                      <span className="text-sm font-medium text-white">{overviewData.localisation}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/5 py-3 last:border-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                      <Zap className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-text-muted">Disponibilité</span>
                      <span className="text-sm font-medium text-white">CDI, Freelance</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/5 py-3 last:border-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                      <Calendar className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-text-muted">Langues</span>
                      <span className="text-sm font-medium text-white">Français (natif), Anglais (pro)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/5 py-3 last:border-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                      <Target className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-text-muted">Expérience</span>
                      <span className="text-sm font-medium text-white">2+ ans</span>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <Card hover glow="cyan">
                <h3 className="mb-4 font-display text-xl font-semibold text-white">Objectifs</h3>
                <ul className="space-y-3 text-sm text-text-secondary">
                  {objectives.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </StaggerContainer>
      </div>
    </Section>
  )
}
