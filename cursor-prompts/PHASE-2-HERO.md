# PHASE 2 — Hero Cinématique

> **Durée estimée** : 4h
> **Prérequis** : Phase 1 terminée ✅
> **Prochaine phase** : `PHASE-3-SECTIONS.md`

---

## 🎯 Objectif

Créer un Hero section visuellement frappant qui donne immédiatement le ton : développeur full-stack moderne, projets concrets, ambiance dark premium.

---

## 🖼️ Vision du Hero

```
┌─────────────────────────────────────────────────┐
│ [Navbar]                                         │
│                                                  │
│   // Bonjour, je suis                            │
│   Gabriel Revest                                 │
│   Développeur Full-Stack          [avatar/photo] │
│   React · Node.js · TypeScript                  │
│                                                  │
│   [Voir mes projets ↓]  [GitHub]  [LinkedIn]    │
│                                                  │
│   ── Scroll ──                                   │
└─────────────────────────────────────────────────┘
```

---

## 🎬 Étape 2.1 — Structure de base du Hero

### Prompt Cursor :

```
Dans src/components/sections/Hero.tsx, crée le Hero avec Framer Motion.

Contexte : importe overviewData depuis @/data/overview et contactData depuis @/data/contact.

Structure JSX :
<section id="hero" className="relative min-h-screen flex items-center z-10">
  
  {/* Contenu principal */}
  <div className="container mx-auto px-6 max-w-6xl pt-24">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Colonne gauche : texte */}
      <div>
        {/* Badge intro */}
        {/* Nom et titre */}
        {/* Typewriter */}
        {/* Description */}
        {/* CTAs */}
        {/* Stats */}
      </div>
      
      {/* Colonne droite : avatar */}
      <div>
        {/* Card avatar avec effets */}
      </div>
      
    </div>
  </div>
  
  {/* Scroll indicator */}
  
</section>

Anime chaque élément avec Framer Motion :
- motion.div avec initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
- Chaque élément enfant avec un delay progressif (0, 0.1, 0.2, 0.3...)
```

---

## 🏷️ Étape 2.2 — Badge intro animé

### Prompt Cursor :

```
Dans le Hero, ajoute un badge intro en haut du texte :

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.1 }}
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-mono mb-6"
>
  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
  Disponible pour de nouveaux projets
</motion.div>
```

---

## 📝 Étape 2.3 — Titre principal avec Typewriter

### Prompt Cursor :

```
Crée src/components/ui/Typewriter.tsx avec ces specs :

Props :
- words: string[]
- className?: string
- speed?: number (ms entre chaque caractère, défaut 80)
- deleteSpeed?: number (ms pour effacer, défaut 40)
- delayBetween?: number (ms entre les mots, défaut 2000)

Comportement :
- Affiche le texte caractère par caractère
- Attend delayBetween ms
- Efface caractère par caractère
- Passe au mot suivant
- Boucle en continu

Rendu :
<span className={className}>
  {currentText}
  <span className="animate-pulse text-violet-400">|</span>
</span>

Dans le Hero, utilise ce Typewriter pour les technos :
<h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
  <span className="block text-white">{overviewData.nom}</span>
  <span className="block text-gradient mt-2">
    <Typewriter words={['React Dev', 'Node.js Dev', 'Full-Stack', 'Discord Bots', 'PulsaBot']} />
  </span>
</h1>
```

---

## 📊 Étape 2.4 — Statistiques animées

### Prompt Cursor :

```
Sous les CTAs du Hero, ajoute une rangée de stats avec compteur animé :

Stats à afficher :
- "2+" / "Années d'expérience"
- "5+" / "Projets réalisés"  
- "1k+" / "Utilisateurs PulsaBot"

Composant CountUp :
- Props : end: number, suffix?: string, duration?: number (défaut 2s)
- Utilise useInView pour démarrer l'animation quand visible
- Anime de 0 à end avec easeOut

Layout des stats :
<div className="flex gap-8 mt-10 pt-10 border-t border-white/10">
  {stats.map(stat => (
    <div key={stat.label}>
      <div className="text-2xl font-bold font-display text-gradient">
        <CountUp end={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-text-muted text-sm mt-1">{stat.label}</div>
    </div>
  ))}
</div>
```

---

## 🖼️ Étape 2.5 — Card Avatar

### Prompt Cursor :

```
Dans la colonne droite du Hero, crée une card avatar premium :

Structure :
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="relative flex justify-center"
>
  {/* Glow derrière */}
  <div className="absolute inset-0 bg-gradient-radial from-violet-600/30 to-transparent blur-3xl" />
  
  {/* Card principale */}
  <div className="relative w-80 h-80 rounded-3xl overflow-hidden border border-violet-500/30 shadow-violet-lg glass">
    
    {/* Photo ou avatar SVG */}
    <img 
      src="/images/avatar.jpg" 
      alt="Gabriel Revest" 
      className="w-full h-full object-cover"
    />
    
    {/* Overlay gradient bas */}
    <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    
    {/* Badge flottant React */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
      className="absolute -top-4 -right-4 glass border border-violet-500/30 px-3 py-2 rounded-xl text-sm"
    >
      ⚡ React 19
    </motion.div>
    
    {/* Badge flottant Node */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 4, delay: 1 }}
      className="absolute -bottom-4 -left-4 glass border border-cyan-500/30 px-3 py-2 rounded-xl text-sm"
    >
      🟢 Node.js
    </motion.div>
    
  </div>
</motion.div>

Note : pour l'image, on utilisera /public/images/avatar.jpg — voir Phase 6 pour les assets.
En attendant, utilise un placeholder : bg-gradient-to-br from-violet-600 to-cyan-500 avec tes initiales centrées.
```

---

## ⬇️ Étape 2.6 — Scroll Indicator

### Prompt Cursor :

```
En bas du Hero, ajoute un scroll indicator animé :

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
>
  <span className="text-xs font-mono">scroll</span>
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1"
  >
    <div className="w-1 h-2 bg-violet-400 rounded-full" />
  </motion.div>
</motion.div>
```

---

## 🎯 Étape 2.7 — CTAs du Hero

### Prompt Cursor :

```
Ajoute les boutons d'action après le titre :

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="flex flex-wrap gap-4 mb-10"
>
  {/* Bouton principal */}
  <Button variant="primary" size="lg" href="#projects">
    Voir mes projets
    <ArrowDown className="w-4 h-4" />
  </Button>
  
  {/* GitHub */}
  <Button variant="outline" size="lg" href={github.url} target="_blank">
    <Github className="w-5 h-5" />
    GitHub
  </Button>
  
  {/* Télécharger CV */}
  <Button variant="ghost" size="lg" href="/cv.pdf" target="_blank">
    <Download className="w-4 h-4" />
    CV PDF
  </Button>
</motion.div>

Importe ArrowDown, Github, Download depuis lucide-react.
Le CV sera placé dans /public/cv.pdf (voir Phase 6).
```

---

## 🌟 Étape 2.8 — Effet Spotlight (optionnel mais impressionnant)

### Prompt Cursor :

```
Ajoute un effet spotlight qui suit la souris dans le Hero :

Crée src/hooks/useMousePosition.ts :
import { useState, useEffect } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])
  
  return position
}

Dans le Hero, utilise ce hook pour créer un spotlight radial :
const { x, y } = useMousePosition()

<div
  className="absolute inset-0 z-0 pointer-events-none opacity-40"
  style={{
    background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(124, 58, 237, 0.15), transparent 50%)`
  }}
/>
```

---

## ✅ Checklist de fin de Phase 2

- [ ] Badge "Disponible" avec indicateur vert pulsant
- [ ] Titre avec Typewriter fonctionnel
- [ ] Stats animées (CountUp)
- [ ] CTAs : Projets, GitHub, CV
- [ ] Card avatar (placeholder ou vraie photo)
- [ ] Badges flottants animés
- [ ] Scroll indicator
- [ ] Effet spotlight souris
- [ ] Responsive (empile sur mobile)
- [ ] Animations Framer Motion fluides

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-3-SECTIONS.md` et commence la Phase 3.
