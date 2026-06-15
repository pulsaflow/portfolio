# 🧠 CURSOR CONTEXT — Portfolio revestaweb.tech

> **GARDE CE FICHIER TOUJOURS OUVERT DANS CURSOR**
> C'est la boussole du projet. Cursor s'y réfère pour comprendre le contexte global.

---

## 📍 Projet

**Nom** : Portfolio développeur — revestaweb.tech  
**Owner** : Gabriel Revest  
**Repo** : github.com/gabrielrevest/portfolio  
**URL prod** : https://revestaweb.tech  
**Hébergement** : DigitalOcean App Platform (FRA1)

---

## 🛠️ Stack technique

```
Framework     : React 19 + Vite 6
Langage       : TypeScript
Styling       : Tailwind CSS 3 (config custom dark)
Animations    : Framer Motion 12
Icônes UI     : Lucide React
Icônes tech   : react-icons (Simple Icons)
Fonts         : Space Grotesk (titres) + Inter (corps) + JetBrains Mono (code)
Formulaire    : Formspree (@formspree/react)
Build         : Vite (chunks séparés: react, framer, icons)
```

---

## 🎨 Design System

```
Palette :
  background  : #0a0a0f  (fond principal)
  surface     : #111118  (cartes)
  surface-2   : #1a1a24  (surcartes)
  border      : rgba(255,255,255,0.08)
  
  violet-600  : #7c3aed  ← couleur primaire / accent
  violet-500  : #8b5cf6
  violet-400  : #a78bfa
  cyan-500    : #06b6d4  ← couleur secondaire
  cyan-400    : #22d3ee
  
  text-primary   : #f8fafc
  text-secondary : #94a3b8
  text-muted     : #475569

Fonts :
  font-display  : 'Space Grotesk' (h1, h2, h3)
  font-sans     : 'Inter' (corps de texte)
  font-mono     : 'JetBrains Mono' (code, badges, labels)

Effects :
  glass         : bg rgba(17,17,24,0.8) + backdrop-blur-xl + border white/8
  text-gradient : linear-gradient(135deg, #a78bfa, #22d3ee)
  shadow-violet : 0 0 30px rgba(124,58,237,0.4)
```

---

## 📁 Structure src/

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          ← variant: primary|secondary|ghost|outline
│   │   ├── Badge.tsx           ← variant: default|violet|cyan|mono
│   │   ├── Card.tsx            ← hover+glow props
│   │   ├── Section.tsx         ← wrapper avec label "// XX NOM"
│   │   ├── CustomCursor.tsx    ← curseur custom qui suit souris
│   │   ├── Typewriter.tsx      ← texte animé
│   │   ├── TechIcon.tsx        ← icônes react-icons/si
│   │   ├── StatusBadge.tsx     ← production|beta|wip|archive
│   │   └── ProjectModal.tsx    ← modale détail projet
│   ├── layout/
│   │   ├── Navbar.tsx          ← fixed, glass au scroll, hamburger mobile
│   │   ├── Footer.tsx          ← 3 colonnes + bottom bar
│   │   └── Background.tsx      ← orbes animés + grid pattern, position:fixed
│   ├── animations/
│   │   ├── FadeIn.tsx          ← wrapper animation entrée
│   │   ├── StaggerContainer.tsx← enfants en cascade
│   │   └── ScaleIn.tsx         ← zoom + fade
│   └── sections/
│       ├── Hero.tsx            ← fullscreen, typewriter, stats, avatar card
│       ├── About.tsx           ← timeline parcours, cards infos
│       ├── Skills.tsx          ← grid catégories, tech wall, méthodologie
│       ├── Projects.tsx        ← featured + filtre + grille + modale
│       └── Contact.tsx         ← form Formspree + liens sociaux
├── data/
│   ├── overview.ts             ← nom, titre, parcours, objectifs, pointsForts
│   ├── projects.ts             ← tableau Project[] avec image, stats, tags
│   ├── skills.ts               ← developpement, methodologie, langues
│   └── contact.ts              ← liens, disponibilite, preference
├── hooks/
│   ├── useMousePosition.ts     ← position souris pour spotlight
│   └── useScrollSpy.ts         ← section active pour navbar
├── lib/
│   ├── cn.ts                   ← clsx + tailwind-merge
│   └── variants.ts             ← variantes Framer Motion réutilisables
└── types/
    └── index.ts                ← types Project, Skill, ContactLink...
```

---

## 🔄 Phase actuelle

```
Marque la phase en cours :

[ ] Phase 0 : Setup & Remise à zéro
[ ] Phase 1 : Design System
[ ] Phase 2 : Hero Cinématique
[ ] Phase 3 : Sections About & Skills
[ ] Phase 4 : Section Projets
[ ] Phase 5 : Contact & Footer
[ ] Phase 6 : Assets & Médias
[ ] Phase 7 : Performance & SEO
[ ] Phase 8 : Déploiement DigitalOcean
[ ] Phase 9 : Domaine & DNS
[ ] Phase 10: Maintenance
[ ] Phase 11: Hardening sécurité
[ ] Phase 12: Tests complets (unitaires + sécurité + E2E)
```

---

## 🧩 Conventions de code

```typescript
// Composants : PascalCase
// Props interfaces : NomProps
// Fichiers : PascalCase.tsx pour composants, camelCase.ts pour utils

// Import order :
// 1. React
// 2. Librairies externes (framer-motion, lucide-react)
// 3. Composants locaux (@/components/...)
// 4. Data (@/data/...)
// 5. Types (@/types/...)

// Toujours utiliser cn() pour les classes conditionnelles
// Toujours motion.div pour les éléments animés
// viewport={{ once: true }} sur toutes les animations whileInView
// Eviter les magic numbers, utiliser les valeurs Tailwind
```

---

## ⚠️ Règles importantes pour Cursor

1. **Ne jamais modifier** les fichiers dans `src/data/` sans confirmation
2. **Toujours utiliser** les couleurs du design system (pas de couleurs hardcodées)
3. **Toujours ajouter** `viewport={{ once: true }}` sur les animations scroll
4. **Responsive** : tester sur 375px (mobile), 768px (tablette), 1280px (desktop)
5. **TypeScript** : pas de `any`, typer toutes les props
6. **Performance** : `loading="lazy"` sur toutes les images non-hero

---

## 📎 Fichiers de référence

```
Ouvre pour contexte design :  @tailwind.config.js
Ouvre pour phase en cours :   @cursor-prompts/PHASE-X-NOM.md
Ouvre pour les données :      @src/data/overview.ts
                              @src/data/projects.ts
Ouvre pour les types :        @src/types/index.ts
```

---

*Mis à jour automatiquement — Dernière session : [DATE]*
