# PHASE 0 — Setup & Remise à zéro

> **Durée estimée** : 2h
> **Statut** : ⬜ À faire
> **Prochaine phase** : `PHASE-1-DESIGN-SYSTEM.md`

---

## 🎯 Objectif de cette phase

Repartir d'une base propre, installer les bonnes dépendances, configurer le projet pour accueillir un design de niveau professionnel.

---

## 📦 Étape 0.1 — Installer les nouvelles dépendances

Lance dans le terminal :

```bash
npm install @fontsource/space-grotesk @fontsource/inter @fontsource/jetbrains-mono
npm install react-icons
npm install sonner
npm install react-intersection-observer
npm install clsx tailwind-merge
npm install @types/node
```

---

## 🗑️ Étape 0.2 — Vider les anciennes sections (garder la structure)

### Prompt Cursor :

```
Ouvre le projet portfolio React + Vite + TypeScript + Tailwind + Framer Motion.

Vide le contenu de ces fichiers (garde les imports et exports vides) :
- src/sections/Hero.tsx
- src/sections/About.tsx
- src/sections/Skills.tsx
- src/sections/Projects.tsx
- src/sections/Contact.tsx
- src/components/Navbar.tsx
- src/components/Footer.tsx
- src/components/ParticlesBackground.tsx
- src/index.css

Supprime src/components/Typewriter.tsx et src/components/Section.tsx (on les refera mieux).

Garde intact :
- src/data/ (tous les fichiers)
- src/App.tsx (structure générale)
- tailwind.config.js
- vite.config.ts
```

---

## 🏗️ Étape 0.3 — Créer la structure de dossiers

### Prompt Cursor :

```
Crée la structure de dossiers suivante dans src/ :

src/
├── components/
│   ├── ui/
│   ├── layout/
│   └── animations/
├── hooks/
├── lib/
├── styles/
└── types/

Crée un fichier index.ts vide dans chaque dossier.
```

---

## 🔧 Étape 0.4 — Reconfigurer Tailwind

### Prompt Cursor :

```
Remplace complètement tailwind.config.js par cette configuration :

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#111118',
        'surface-2': '#1a1a24',
        border: 'rgba(255,255,255,0.08)',
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-violet': 'linear-gradient(135deg, #7c3aed, #a855f7)',
        'gradient-cyan': 'linear-gradient(135deg, #06b6d4, #22d3ee)',
        'gradient-hero': 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.7)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'violet': '0 0 30px rgba(124, 58, 237, 0.4)',
        'violet-lg': '0 0 60px rgba(124, 58, 237, 0.5)',
        'cyan': '0 0 30px rgba(6, 182, 212, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.6), 0 0 30px rgba(124, 58, 237, 0.2)',
      },
    },
  },
  plugins: [],
}
```

---

## 🎨 Étape 0.5 — Reconfigurer index.css

### Prompt Cursor :

```
Remplace complètement src/index.css par :

@import '@fontsource/inter/400.css';
@import '@fontsource/inter/500.css';
@import '@fontsource/inter/600.css';
@import '@fontsource/space-grotesk/400.css';
@import '@fontsource/space-grotesk/500.css';
@import '@fontsource/space-grotesk/600.css';
@import '@fontsource/space-grotesk/700.css';
@import '@fontsource/jetbrains-mono/400.css';
@import '@fontsource/jetbrains-mono/500.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #0a0a0f;
    color: #f8fafc;
    font-family: 'Inter', system-ui, sans-serif;
    overflow-x: hidden;
  }

  /* Scrollbar custom */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #0a0a0f;
  }
  ::-webkit-scrollbar-thumb {
    background: #7c3aed;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #8b5cf6;
  }

  /* Sélection de texte */
  ::selection {
    background: rgba(124, 58, 237, 0.4);
    color: #f8fafc;
  }

  /* Focus visible */
  :focus-visible {
    outline: 2px solid #7c3aed;
    outline-offset: 2px;
    border-radius: 4px;
  }
}

@layer utilities {
  /* Texte gradient */
  .text-gradient {
    background: linear-gradient(135deg, #a78bfa, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-gradient-violet {
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Glassmorphism */
  .glass {
    background: rgba(17, 17, 24, 0.8);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .glass-light {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Glow effects */
  .glow-violet {
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.4);
  }

  .glow-cyan {
    box-shadow: 0 0 30px rgba(6, 182, 212, 0.4);
  }

  /* Grain texture overlay */
  .grain::before {
    content: '';
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.04;
    animation: grain 8s steps(10) infinite;
  }

  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-2%, -3%); }
    20% { transform: translate(2%, 3%); }
    30% { transform: translate(-3%, 1%); }
    40% { transform: translate(3%, -1%); }
    50% { transform: translate(-1%, 4%); }
    60% { transform: translate(1%, -4%); }
    70% { transform: translate(-4%, 2%); }
    80% { transform: translate(4%, -2%); }
    90% { transform: translate(-2%, -4%); }
  }

  /* Section spacing */
  .section {
    padding: 6rem 0;
  }

  @media (min-width: 768px) {
    .section {
      padding: 8rem 0;
    }
  }
}
```

---

## 🔄 Étape 0.6 — Mettre à jour App.tsx

### Prompt Cursor :

```
Remplace src/App.tsx par :

import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Background from '@/components/layout/Background'
import CustomCursor from '@/components/ui/CustomCursor'

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-x-hidden grain">
      <Background />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Note: ces imports pointeront vers les nouveaux emplacements dans components/layout/ et components/sections/.
Laisse les imports en place même si les fichiers n'existent pas encore, on les créera dans les phases suivantes.
```

---

## ✅ Checklist de fin de Phase 0

- [ ] Dépendances installées (`npm install` sans erreur)
- [ ] Tailwind reconfiguré avec la nouvelle palette
- [ ] `index.css` mis à jour avec fonts + utilities
- [ ] Structure de dossiers créée
- [ ] `App.tsx` mis à jour

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-1-DESIGN-SYSTEM.md` et commence la Phase 1.
