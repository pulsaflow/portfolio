import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Eye, ExternalLink, Github } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import ProjectModal from '@/components/ui/ProjectModal'
import Section from '@/components/ui/Section'
import StatusBadge from '@/components/ui/StatusBadge'
import { projectsData } from '@/data/projects'
import { cn } from '@/lib/cn'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass group cursor-pointer overflow-hidden rounded-2xl border border-white/8 transition-all hover:border-violet-500/30"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-900/30 to-surface-2">
        {project.image ? (
          <img
            src={project.image}
            alt={project.nom}
            width={1200}
            height={800}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-gradient opacity-20">
            {project.nom[0]}
          </div>
        )}
        <div className="absolute right-3 top-3">
          <StatusBadge statut={project.statut} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-1 font-display font-semibold text-white">{project.nom}</h3>
        <p className="mb-3 font-mono text-xs text-violet-400">{project.type}</p>
        <p className="mb-4 line-clamp-2 text-sm text-text-secondary">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
          {project.stack.length > 4 ? <Badge label={`+${project.stack.length - 4}`} /> : null}
        </div>
        <div className="flex items-center justify-between text-sm text-text-muted">
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            Voir détails
          </span>
          <div className="flex gap-3">
            {project.repo ? <Github className="h-4 w-4 transition-colors hover:text-white" /> : null}
            {project.site ? <ExternalLink className="h-4 w-4 transition-colors hover:text-white" /> : null}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('tous')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const featuredProject = useMemo(
    () => projectsData.find((project) => project.featured),
    []
  )

  const filters = useMemo(
    () => ['tous', ...new Set(projectsData.flatMap((project) => project.tags))],
    []
  )

  const filtered = useMemo(
    () =>
      activeFilter === 'tous'
        ? projectsData.filter((project) => !project.featured)
        : projectsData.filter(
            (project) => !project.featured && project.tags.includes(activeFilter)
          ),
    [activeFilter]
  )

  return (
    <Section id="projects" label="// 03 PROJETS">
      {featuredProject ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden rounded-3xl border border-violet-500/20"
        >
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-violet-900/50 to-cyan-900/50 lg:h-auto">
              {featuredProject.image ? (
                <img
                  src={featuredProject.image}
                  alt={featuredProject.nom}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover opacity-80"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-7xl font-display text-gradient opacity-30">
                  {featuredProject.nom[0]}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50" />
            </div>

            <div className="glass p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-violet-500/20 px-3 py-1 font-mono text-xs text-violet-400">
                  ⭐ Projet phare
                </span>
                <StatusBadge statut={featuredProject.statut} />
              </div>

              <h3 className="mb-3 font-display text-3xl font-bold text-white">{featuredProject.nom}</h3>
              <p className="mb-6 text-text-secondary">{featuredProject.descriptionLongue}</p>

              {featuredProject.stats ? (
                <div className="mb-6 flex gap-6">
                  {featuredProject.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mb-8 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <Badge key={tech} label={tech} variant="violet" />
                ))}
              </div>

              <div className="flex gap-4">
                {featuredProject.repo ? (
                  <Button
                    variant="outline"
                    href={featuredProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<Github className="h-4 w-4" />}
                  >
                    Code
                  </Button>
                ) : null}
                {featuredProject.site ? (
                  <Button
                    variant="primary"
                    href={featuredProject.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Voir le site
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}

      <div className="mb-12 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              'rounded-xl px-4 py-2 text-sm font-medium transition-all',
              activeFilter === filter
                ? 'bg-violet-600 text-white shadow-violet'
                : 'glass border border-white/10 text-text-secondary hover:border-violet-500/30 hover:text-white'
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.nom}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  )
}
