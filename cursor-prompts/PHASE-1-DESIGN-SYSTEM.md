# PHASE 1 — Design System

> **Durée estimée** : 3h
> **Prérequis** : Phase 0 terminée ✅
> **Prochaine phase** : `PHASE-2-HERO.md`

---

## 🎯 Objectif

Créer tous les composants UI primitifs réutilisables qui seront utilisés dans tout le portfolio :
- Composants de base (Button, Badge, Card)
- Wrappers d'animation
- Layout global (Background, CustomCursor)

---

## 🖱️ Étape 1.1 — Curseur personnalisé

### Prompt Cursor :

```
Dans src/components/ui/CustomCursor.tsx, crée un curseur personnalisé avec :

- Un cercle principal qui suit la souris avec un léger lag (lerp)
- Un point central qui suit exactement la souris
- Quand on hover un lien/bouton : le cercle s'agrandit et prend la couleur violet (#7c3aed)
- Utilise Framer Motion pour les animations
- Sur mobile (pointer: coarse), le curseur est caché

Le composant utilise useEffect pour écouter les événements souris et mettre à jour une ref.
Utilise motion.div pour les deux éléments du curseur.
Le style doit être : position fixed, z-index 9999, pointer-events none, mix-blend-mode difference.

Couleurs :
- Default : border 2px solid rgba(255,255,255,0.8), background transparent
- Hover : background #7c3aed, border #7c3aed, scale 1.5
```

---

## 🌌 Étape 1.2 — Background animé

### Prompt Cursor :

```
Dans src/components/layout/Background.tsx, crée un background fixe avec :

1. Un fond uni #0a0a0f
2. Deux orbes flottants animés avec Framer Motion :
   - Orbe 1 : position top-left, couleur rgba(124, 58, 237, 0.15), 600px de diamètre, blur-3xl, animation float
   - Orbe 2 : position bottom-right, couleur rgba(6, 182, 212, 0.1), 500px, blur-3xl, animation float avec delay 3s
3. Un grid pattern très subtil en SVG (lignes grilles, opacity 0.03)
4. Le tout avec position:fixed, inset-0, z-index 0, pointer-events-none

Le composant est position fixed et couvre tout l'écran.
```

---

## 🔘 Étape 1.3 — Composant Button

### Prompt Cursor :

```
Dans src/components/ui/Button.tsx, crée un composant Button avec ces variantes :

Props :
- variant: 'primary' | 'secondary' | 'ghost' | 'outline'
- size: 'sm' | 'md' | 'lg'
- icon?: React.ReactNode (icône à gauche ou droite)
- iconPosition?: 'left' | 'right'
- loading?: boolean
- children, onClick, href, target, className, ...

Variantes de style :
- primary : bg gradient violet → purple (#7c3aed → #a855f7), text white, shadow violet, hover: scale 1.02, shadow plus grand
- secondary : bg violet/10, text violet-400, border violet/30, hover: bg violet/20
- ghost : transparent, text text-secondary, hover: text white bg white/5
- outline : border 1px white/20, text white, hover: border violet/50 bg white/5

Utilise Framer Motion whileHover + whileTap pour les animations.
Si href fourni, render <a> sinon <button>.
Utilise clsx pour combiner les classes.
```

---

## 🏷️ Étape 1.4 — Composant Badge

### Prompt Cursor :

```
Dans src/components/ui/Badge.tsx, crée un Badge pour afficher les technologies :

Props :
- label: string (nom de la techno)
- variant: 'default' | 'violet' | 'cyan' | 'mono'

Styles :
- default : bg surface-2, text text-secondary, border border/50
- violet : bg violet-600/20, text violet-400, border violet-600/30
- cyan : bg cyan-500/20, text cyan-400, border cyan-500/30
- mono : font-mono, bg surface-2, text text-primary, border border/50

Padding : px-3 py-1, border-radius: rounded-lg
Font size : text-xs ou text-sm
Utilise Framer Motion whileHover scale 1.05

Ajoute aussi une icône optionnelle devant le texte (prop icon?: React.ReactNode)
```

---

## 🃏 Étape 1.5 — Composant Card

### Prompt Cursor :

```
Dans src/components/ui/Card.tsx, crée un composant Card générique :

Props :
- children
- className?
- hover?: boolean (active les effets hover)
- glow?: 'violet' | 'cyan' | 'none'
- onClick?

Style de base :
- background rgba(17,17,24,0.8)
- backdrop-filter blur(16px)
- border: 1px solid rgba(255,255,255,0.08)
- border-radius: rounded-2xl
- padding: p-6 ou p-8

En hover (si hover=true) :
- border-color → rgba(124,58,237,0.4)
- transform translateY(-4px)
- box-shadow card-hover
- Transition smooth 300ms

Glow effect :
- violet : box-shadow 0 0 30px rgba(124,58,237,0.2)
- cyan : box-shadow 0 0 30px rgba(6,182,212,0.2)

Utilise Framer Motion pour les animations hover.
```

---

## 🎬 Étape 1.6 — Wrappers d'animation

### Prompt Cursor :

```
Crée ces composants d'animation dans src/components/animations/ :

1. FadeIn.tsx :
   Props : children, delay?:number, direction?: 'up'|'down'|'left'|'right'
   Animation : opacity 0→1, translate depuis la direction (30px), durée 0.6s
   Utilise useInView de framer-motion (once: true, margin: "-50px")

2. StaggerContainer.tsx :
   Props : children, staggerDelay?: number (default 0.1)
   Anime les enfants en cascade avec Framer Motion staggerChildren
   
3. ScaleIn.tsx :
   Props : children, delay?
   Animation : scale 0.8→1, opacity 0→1

Chaque composant utilise motion.div avec viewport={{ once: true, margin: '-100px' }}
```

---

## 📐 Étape 1.7 — Composant Section

### Prompt Cursor :

```
Dans src/components/ui/Section.tsx, crée un wrapper de section :

Props :
- id: string
- children
- className?
- label?: string (petit texte en haut style "// 01 À PROPOS")

Rendu :
<section id={id} className="section relative z-10 {className}">
  <div className="container mx-auto px-6 max-w-6xl">
    {label && (
      <div className="flex items-center gap-3 mb-8">
        <span className="text-violet-400 font-mono text-sm">{label}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
      </div>
    )}
    {children}
  </div>
</section>
```

---

## 🧭 Étape 1.8 — Navbar

### Prompt Cursor :

```
Dans src/components/layout/Navbar.tsx, crée une navbar avec :

Design :
- Position : fixed top-0, left-0, right-0, z-50
- Fond : transparent au top, glass (backdrop-blur + bg surface/80) au scroll
- Hauteur : 72px
- Transition smooth au scroll

Contenu :
- Logo gauche : "<RW />" en font-mono, text-gradient violet→cyan, lien vers #hero
- Navigation centrale : liens vers #about, #skills, #projects, #contact
  - Style : text-text-secondary, hover text-white, transition
  - Indicateur actif : underline violet sous la section visible (useScrollSpy)
- Bouton droit : Button variant="outline" size="sm" texte "Me contacter" → scroll vers #contact

Mobile :
- Menu hamburger (icône Lucide Menu / X)
- Menu déroulant fullscreen avec animation slide-down
- Background #0a0a0f, liens grands et centrés
- Fermeture au clic sur un lien

Hook useScrollSpy : écoute IntersectionObserver sur les sections, retourne l'ID actif.

Utilise Framer Motion pour l'animation de la navbar (opacity + translateY) et du menu mobile.
```

---

## 🦶 Étape 1.9 — Footer

### Prompt Cursor :

```
Dans src/components/layout/Footer.tsx, crée un footer minimal :

Layout :
- Border top : 1px solid rgba(255,255,255,0.08)
- Padding : py-8
- Container max-w-6xl

Contenu :
- Gauche : "© 2026 [Ton Nom] — revestaweb.tech"
- Centre : liens GitHub, LinkedIn, Email (icônes Lucide, petits, text-secondary hover:text-violet-400)
- Droite : "Fait avec React + ❤️"

Tout en text-text-muted, taille text-sm.
Responsive : sur mobile, stack vertical, centré.
```

---

## 🔧 Étape 1.10 — Utilitaires lib/

### Prompt Cursor :

```
Crée ces fichiers utilitaires :

1. src/lib/cn.ts :
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

2. src/lib/variants.ts :
Objets de variantes Framer Motion réutilisables :
- fadeInUp : opacity 0→1, y 30→0, duration 0.6
- fadeInLeft : opacity 0→1, x -30→0
- fadeInRight : opacity 0→1, x 30→0
- staggerContainer : staggerChildren 0.1
- scaleIn : scale 0.8→1, opacity 0→1

Export chacun nommément.
```

---

## ✅ Checklist de fin de Phase 1

- [ ] CustomCursor fonctionne (visible, change au hover)
- [ ] Background avec orbes animés visible
- [ ] Button avec 4 variantes fonctionnel
- [ ] Badge avec variantes fonctionnel
- [ ] Card avec effets hover et glow
- [ ] FadeIn, StaggerContainer, ScaleIn fonctionnels
- [ ] Section wrapper utilisable
- [ ] Navbar : transparente → glass au scroll, mobile responsive
- [ ] Footer minimal en place
- [ ] `npm run dev` sans erreurs TypeScript

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-2-HERO.md` et commence la Phase 2.
