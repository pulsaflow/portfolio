import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import type { Project } from '@/types'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import StatusBadge from '@/components/ui/StatusBadge'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-surface"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden rounded-t-3xl">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.nom}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-900/40 to-surface-2 text-6xl font-display text-gradient">
                  {project.nom[0]}
                </div>
              )}
              <button
                onClick={onClose}
                className="glass absolute right-4 top-4 rounded-xl p-2"
                aria-label="Fermer la modale du projet"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-8">
              <StatusBadge statut={project.statut} />
              <h2 className="mt-3 mb-2 font-display text-2xl font-bold text-white">{project.nom}</h2>
              <p className="mb-6 text-text-secondary">{project.descriptionLongue}</p>

              {project.stats ? (
                <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl bg-surface-2 p-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}

              <h4 className="mb-3 font-semibold text-white">Stack technique</h4>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} label={tech} variant="violet" />
                ))}
              </div>

              <div className="flex gap-3">
                {project.repo ? (
                  <Button
                    variant="outline"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<Github className="h-4 w-4" />}
                  >
                    Code source
                  </Button>
                ) : null}
                {project.site ? (
                  <Button
                    variant="primary"
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Voir en ligne
                  </Button>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
