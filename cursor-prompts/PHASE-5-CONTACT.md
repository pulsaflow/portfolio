# PHASE 5 — Contact & Footer

> **Durée estimée** : 2h
> **Prérequis** : Phase 4 terminée ✅
> **Prochaine phase** : `PHASE-6-ASSETS.md`

---

## 🎯 Objectif

Créer une section Contact impactante avec formulaire (via Formspree, gratuit), liens sociaux animés, et un footer soigné.

---

## 📧 Étape 5.1 — Structure de la section Contact

### Prompt Cursor :

```
Dans src/components/sections/Contact.tsx, crée la section Contact.

Layout 2 colonnes sur desktop :
- Gauche (40%) : texte d'accroche, infos de contact, liens sociaux
- Droite (60%) : formulaire de contact

Label de section : "// 04 CONTACT"

Importe : contactData depuis @/data/contact
```

---

## 💬 Étape 5.2 — Colonne gauche (info contact)

### Prompt Cursor :

```
Dans la colonne gauche de Contact :

1. Titre avec gradient :
<h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
  Parlons de votre <span className="text-gradient">prochain projet</span>
</h2>

2. Description :
<p className="text-text-secondary text-lg mb-10">
  Disponible pour des missions freelance, CDI, ou collaborations.
  Réponse sous {contactData.delaiReponse}.
</p>

3. Infos de contact avec icônes :
[Mail icon] revest@email.com
[MapPin icon] [localisation depuis contactData]
[Clock icon] Disponible {contactData.disponibilite}

4. Liens sociaux (grands boutons) :
{contactData.liens.map(lien => (
  <motion.a
    key={lien.platform}
    href={lien.url}
    target="_blank"
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-violet-500/30 transition-all group"
  >
    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20">
      <Icon className="w-5 h-5 text-violet-400" />
    </div>
    <div>
      <div className="font-medium text-white">{lien.platform}</div>
      <div className="text-text-muted text-xs">{lien.handle || lien.url}</div>
    </div>
    <ArrowRight className="w-4 h-4 text-text-muted ml-auto group-hover:text-violet-400 transition-colors" />
  </motion.a>
))}
```

---

## 📝 Étape 5.3 — Formulaire de contact (Formspree)

### Prompt Cursor :

```
Dans la colonne droite de Contact, crée un formulaire avec Formspree :

1. Installe si nécessaire : npm install @formspree/react

2. Crée le formulaire :
import { useForm, ValidationError } from '@formspree/react'

export function ContactForm() {
  const [state, handleSubmit] = useForm("VOTRE_ID_FORMSPREE")
  // L'ID Formspree s'obtient sur formspree.io (gratuit, 50 emails/mois)
  
  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center h-full text-center py-20"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="font-display text-xl font-semibold text-white mb-2">Message envoyé !</h3>
        <p className="text-text-secondary">Je vous réponds dans les plus brefs délais.</p>
      </motion.div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Nom */}
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">Nom</label>
        <input
          id="name" type="text" name="name" required
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-text-muted focus:border-violet-500 focus:outline-none transition-colors bg-transparent"
          placeholder="Votre nom"
        />
      </div>
      
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
        <input
          id="email" type="email" name="email" required
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-text-muted focus:border-violet-500 focus:outline-none transition-colors bg-transparent"
          placeholder="votre@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>
      
      {/* Sujet */}
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">Sujet</label>
        <select name="sujet" className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white focus:border-violet-500 focus:outline-none transition-colors bg-surface">
          <option value="freelance">Mission freelance</option>
          <option value="cdi">Opportunité CDI</option>
          <option value="collaboration">Collaboration</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      
      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
        <textarea
          id="message" name="message" required rows={5}
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-text-muted focus:border-violet-500 focus:outline-none transition-colors bg-transparent resize-none"
          placeholder="Décrivez votre projet ou opportunité..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>
      
      {/* Submit */}
      <Button variant="primary" size="lg" className="w-full" type="submit" loading={state.submitting}>
        <Send className="w-4 h-4" />
        Envoyer le message
      </Button>
      
    </form>
  )
}

Importe les icônes Lucide : CheckCircle, Send, ArrowRight, Mail, MapPin, Clock
```

---

## 🔧 Étape 5.4 — Obtenir l'ID Formspree

Voici comment configurer Formspree :

```
1. Va sur https://formspree.io
2. Crée un compte gratuit (50 emails/mois gratuits)
3. Clique "New Form"
4. Nomme-le "Portfolio Contact"
5. Copie l'ID (format: "xyzabcde")
6. Remplace "VOTRE_ID_FORMSPREE" dans le code
7. Tu recevras les emails sur ton adresse Formspree

Alternative gratuite : EmailJS (100 emails/mois gratuits)
https://www.emailjs.com/
npm install @emailjs/browser
```

---

## 🦶 Étape 5.5 — Footer complet

### Prompt Cursor :

```
Met à jour src/components/layout/Footer.tsx :

Structure :

{/* Top border avec gradient */}
<div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

<footer className="py-12 mt-0">
  <div className="container mx-auto px-6 max-w-6xl">
    
    {/* Contenu principal */}
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      
      {/* Logo + tagline */}
      <div>
        <div className="font-mono text-xl font-bold text-gradient mb-3">&lt;RW /&gt;</div>
        <p className="text-text-muted text-sm">
          Développeur Full-Stack JavaScript passionné par la création d'applications web modernes.
        </p>
      </div>
      
      {/* Navigation */}
      <div>
        <h4 className="text-white font-medium mb-4">Navigation</h4>
        <ul className="space-y-2">
          {['À propos', 'Compétences', 'Projets', 'Contact'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace('à ', '')}`}
                 className="text-text-muted text-sm hover:text-violet-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Liens */}
      <div>
        <h4 className="text-white font-medium mb-4">Liens</h4>
        <ul className="space-y-2">
          <li><a href="https://github.com/gabrielrevest" target="_blank" className="text-text-muted text-sm hover:text-violet-400 transition-colors flex items-center gap-2"><Github className="w-3.5 h-3.5" />GitHub</a></li>
          <li><a href="#" target="_blank" className="text-text-muted text-sm hover:text-violet-400 transition-colors flex items-center gap-2"><Linkedin className="w-3.5 h-3.5" />LinkedIn</a></li>
          <li><a href="/cv.pdf" className="text-text-muted text-sm hover:text-violet-400 transition-colors flex items-center gap-2"><Download className="w-3.5 h-3.5" />CV PDF</a></li>
        </ul>
      </div>
    </div>
    
    {/* Bottom bar */}
    <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-text-muted text-sm">
        © 2026 Gabriel Revest · <a href="https://revestaweb.tech" className="hover:text-violet-400 transition-colors">revestaweb.tech</a>
      </p>
      <p className="text-text-muted text-sm flex items-center gap-1.5">
        Fait avec <Heart className="w-3.5 h-3.5 text-violet-400" fill="currentColor" /> et React
      </p>
    </div>
  </div>
</footer>

Importe depuis lucide-react : Github, Linkedin, Download, Heart
```

---

## ✅ Checklist de fin de Phase 5

- [ ] Section Contact en 2 colonnes
- [ ] Liens sociaux animés (hover x-translate)
- [ ] Formulaire avec Formspree (ou EmailJS)
- [ ] Validation des champs
- [ ] Message de succès animé
- [ ] Footer avec 3 colonnes
- [ ] Label "// 04 CONTACT"
- [ ] Responsive mobile

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-6-ASSETS.md` et commence la Phase 6.
