import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/lib/cn'

const links = [
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(links.map((link) => link.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 h-[72px] transition-all duration-300',
        scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-mono text-lg font-semibold text-gradient">
          {'<RW />'}
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  'relative pb-1 text-sm transition-colors',
                  isActive ? 'text-text-primary' : 'text-text-secondary hover:text-white'
                )}
              >
                {link.label}
                {isActive ? (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-violet-500"
                  />
                ) : null}
              </a>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" variant="outline" size="sm">
            Me contacter
          </Button>
        </div>

        <button
          type="button"
          className="text-text-secondary md:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] bottom-0 bg-background md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-10">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-2xl font-display text-text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" variant="primary" size="lg" onClick={() => setMenuOpen(false)}>
                Me contacter
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
