import { Download, Github, Heart, Linkedin } from 'lucide-react'

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <footer className="mt-0 py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-8 grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 font-mono text-xl font-bold text-gradient">&lt;RW /&gt;</div>
              <p className="text-sm text-text-muted">
                Développeur Full-Stack JavaScript passionné par la création d'applications web modernes.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-medium text-white">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-text-muted transition-colors hover:text-violet-400">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-medium text-white">Liens</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/gabrielrevest"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir le profil GitHub de Gabriel Revest"
                    className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-violet-400"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/ton-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir le profil LinkedIn"
                    className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-violet-400"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/cv.pdf"
                    aria-label="Télécharger le CV PDF"
                    className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-violet-400"
                  >
                    <Download className="h-3.5 w-3.5" />
                    CV PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-sm text-text-muted">
              © 2026 Gabriel Revest ·{' '}
              <a href="https://revestaweb.tech" className="transition-colors hover:text-violet-400">
                revestaweb.tech
              </a>
            </p>
            <p className="flex items-center gap-1.5 text-sm text-text-muted">
              Fait avec <Heart className="h-3.5 w-3.5 text-violet-400" fill="currentColor" /> et React
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
