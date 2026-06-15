import { motion } from 'framer-motion'
import {
  BookOpen,
  Cloud,
  GitBranch,
  MessageSquare,
  Monitor,
  Rocket,
  Server,
} from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import TechIcon from '@/components/ui/TechIcon'
import { skillsData } from '@/data/skills'

const categories = [
  {
    name: 'Frontend',
    icon: Monitor,
    techs: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    icon: Server,
    techs: ['Node.js', 'Express', 'PostgreSQL', 'SQLite', 'REST API', 'Prisma'],
  },
  {
    name: 'DevOps',
    icon: Cloud,
    techs: ['Docker', 'GitHub Actions', 'Linux', 'Nginx', 'Git', 'CI/CD'],
  },
  {
    name: 'Discord',
    icon: MessageSquare,
    techs: ['discord.js', 'Lavalink', 'Slash Commands', 'Bot Architecture'],
  },
]

const allTechs = [
  'React',
  'TypeScript',
  'Node.js',
  'Docker',
  'PostgreSQL',
  'GitHub',
  'Tailwind CSS',
  'Vite',
  'Express',
  'Linux',
  'Nginx',
  'Discord',
  'Git',
  'SQLite',
  'HTML',
  'CSS',
]

export default function Skills() {
  const methodologie = skillsData.methodologie
  const versioning = methodologie.Versioning
  const deployment = methodologie['CI/CD']

  return (
    <Section id="skills" label="// 02 COMPÉTENCES">
      <FadeIn direction="up">
        <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Compétences</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Stack technique full-stack, outils DevOps et méthodologie orientée qualité.
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <FadeIn key={category.name} direction="up" delay={index * 0.08}>
              <Card hover glow="violet" className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
                    <Icon className="h-5 w-5 text-violet-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <Badge key={tech} label={tech} variant="default" />
                  ))}
                </div>
              </Card>
            </FadeIn>
          )
        })}
      </div>

      <FadeIn direction="up" delay={0.2}>
        <h3 className="mt-14 font-display text-2xl font-semibold text-white">Tech Stack</h3>
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8"
        >
          {allTechs.map((tech) => (
            <motion.div
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.6 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 300 },
                },
              }}
            >
              <TechIcon name={tech} />
            </motion.div>
          ))}
        </motion.div>
      </FadeIn>

      <FadeIn direction="up" delay={0.25}>
        <h3 className="mt-16 font-display text-2xl font-semibold text-white">Méthodologie</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card hover glow="violet">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <BookOpen className="h-5 w-5 text-violet-400" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white">Documentation</h4>
            <p className="mt-2 text-sm text-text-secondary">{methodologie.Documentation}</p>
          </Card>

          <Card hover glow="cyan">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
              <GitBranch className="h-5 w-5 text-cyan-400" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white">Versioning</h4>
            <p className="mt-2 text-sm text-text-secondary">{versioning}</p>
          </Card>

          <Card hover glow="violet">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <Rocket className="h-5 w-5 text-violet-400" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white">Déploiement</h4>
            <p className="mt-2 text-sm text-text-secondary">{deployment}</p>
          </Card>
        </div>
      </FadeIn>
    </Section>
  )
}
