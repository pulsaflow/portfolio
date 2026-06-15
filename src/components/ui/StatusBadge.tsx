interface StatusBadgeProps {
  statut: 'production' | 'beta' | 'wip' | 'archive'
}

const config = {
  production: {
    label: 'En production',
    color: 'bg-green-500/20 text-green-400 border-green-500/30',
  },
  beta: {
    label: 'Beta',
    color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  },
  wip: {
    label: 'En cours',
    color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  },
  archive: {
    label: 'Archivé',
    color: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
  },
} as const

export default function StatusBadge({ statut }: StatusBadgeProps) {
  const status = config[statut]

  return (
    <span className={`rounded-md border px-2 py-1 font-mono text-xs ${status.color}`}>
      <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
      {status.label}
    </span>
  )
}
