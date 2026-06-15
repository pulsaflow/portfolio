import { useMemo } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import { contactData } from '@/data/contact'

const iconByPlatform: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
}

function ContactForm() {
  const formId = import.meta.env.VITE_FORMSPREE_ID ?? 'VOTRE_ID_FORMSPREE'
  const [state, handleSubmit] = useForm(formId)

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center py-20 text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-white">Message envoyé !</h3>
        <p className="text-text-secondary">Je vous réponds dans les plus brefs délais.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
          Nom
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          minLength={2}
          maxLength={80}
          pattern="^[A-Za-zÀ-ÿ' -]{2,80}$"
          title="Le nom doit contenir entre 2 et 80 caractères (lettres, espaces, apostrophes ou tirets)."
          autoComplete="name"
          className="glass w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder-text-muted transition-colors focus:border-violet-500 focus:outline-none"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          maxLength={120}
          className="glass w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder-text-muted transition-colors focus:border-violet-500 focus:outline-none"
          placeholder="votre@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-400" />
      </div>

      <div>
        <label htmlFor="sujet" className="mb-2 block text-sm font-medium text-text-secondary">
          Sujet
        </label>
        <select
          id="sujet"
          name="sujet"
          className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-white transition-colors focus:border-violet-500 focus:outline-none"
          defaultValue="freelance"
        >
          <option value="freelance">Mission freelance</option>
          <option value="cdi">Opportunité CDI</option>
          <option value="collaboration">Collaboration</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className="glass w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder-text-muted transition-colors focus:border-violet-500 focus:outline-none"
          placeholder="Décrivez votre projet ou opportunité..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-400" />
      </div>

      <Button variant="primary" size="lg" className="w-full" type="submit" loading={state.submitting} icon={<Send className="h-4 w-4" />}>
        Envoyer le message
      </Button>
    </form>
  )
}

export default function Contact() {
  const localisation = useMemo(() => {
    const maybeLocation = (contactData as unknown as { localisation?: string }).localisation
    return maybeLocation ?? 'France · Remote'
  }, [])

  const disponibiliteResume = useMemo(() => {
    const values = Object.values(contactData.disponibilite)
    return values.slice(0, 2).join(', ')
  }, [])

  return (
    <Section id="contact" label="// 04 CONTACT">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-2">
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Parlons de votre <span className="text-gradient">prochain projet</span>
          </h2>

          <p className="mb-10 text-lg text-text-secondary">
            Disponible pour des missions freelance, CDI, ou collaborations.
            {' '}Réponse sous {contactData.delaiReponse}.
          </p>

          <div className="space-y-3 text-sm text-text-secondary">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-violet-400" />
              <span>revest@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-violet-400" />
              <span>{localisation}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-violet-400" />
              <span>Disponible {disponibiliteResume}</span>
            </div>
          </div>

          <div className="space-y-3">
            {contactData.liens.map((lien) => {
              const Icon = iconByPlatform[lien.platform] ?? ArrowRight
              return (
                <motion.a
                  key={lien.platform}
                  href={lien.url}
                  target={lien.platform === 'Email' ? undefined : '_blank'}
                  rel={lien.platform === 'Email' ? undefined : 'noopener noreferrer'}
                  whileHover={{ x: 5 }}
                  className="glass group flex items-center gap-4 rounded-xl border border-white/5 p-4 transition-all hover:border-violet-500/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20">
                    <Icon className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{lien.platform}</div>
                    <div className="text-xs text-text-muted">{lien.url}</div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-text-muted transition-colors group-hover:text-violet-400" />
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="glass rounded-2xl border border-white/5 p-6 md:p-8 lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
