interface AvatarPlaceholderProps {
  initials?: string
}

export default function AvatarPlaceholder({ initials = 'GR' }: AvatarPlaceholderProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-violet-500/30 shadow-violet-lg">
      <div className="h-full w-full bg-gradient-to-br from-violet-900 to-cyan-900" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-gradient font-display text-8xl font-bold">{initials}</span>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
    </div>
  )
}
