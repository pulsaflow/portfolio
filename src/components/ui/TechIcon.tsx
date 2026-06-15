import type { IconType } from 'react-icons'
import {
  SiDiscord,
  SiDocker,
  SiExpress,
  SiGithub,
  SiLinux,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

const techIcons: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: '#61DAFB' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  GitHub: { icon: SiGithub, color: '#ffffff' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  Vite: { icon: SiVite, color: '#646CFF' },
  Express: { icon: SiExpress, color: '#ffffff' },
  Linux: { icon: SiLinux, color: '#FCC624' },
  Nginx: { icon: SiNginx, color: '#009639' },
  Discord: { icon: SiDiscord, color: '#5865F2' },
}

interface TechIconProps {
  name: string
}

export default function TechIcon({ name }: TechIconProps) {
  const config = techIcons[name]

  if (!config) {
    return (
      <div className="group flex cursor-default flex-col items-center gap-2">
        <div className="glass flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
          <span className="font-mono text-xs text-text-secondary">{name.slice(0, 2).toUpperCase()}</span>
        </div>
        <span className="text-xs text-text-muted">{name}</span>
      </div>
    )
  }

  const Icon = config.icon

  return (
    <div className="group flex cursor-default flex-col items-center gap-2">
      <div className="glass flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
        <Icon size={24} color={config.color} />
      </div>
      <span className="text-xs text-text-muted">{name}</span>
    </div>
  )
}
