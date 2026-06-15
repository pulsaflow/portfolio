# PHASE 7 — Performance & SEO

> **Durée estimée** : 2h
> **Prérequis** : Phase 6 terminée ✅
> **Prochaine phase** : `PHASE-8-DEPLOY.md`

---

## 🎯 Objectif

Optimiser le portfolio pour Lighthouse > 90 sur les 4 métriques, configurer le SEO, les meta tags Open Graph, et préparer les fichiers de déploiement.

---

## 🏷️ Étape 7.1 — Meta tags dans index.html

### Prompt Cursor :

```
Remplace le contenu de <head> dans index.html par :

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/favicon.svg" />
  
  <!-- Titre et description -->
  <title>Gabriel Revest — Développeur Full-Stack React & Node.js</title>
  <meta name="description" content="Portfolio de Gabriel Revest, développeur full-stack JavaScript spécialisé React, Node.js et TypeScript. Projet PulsaBot et plus." />
  <meta name="keywords" content="développeur full-stack, React, Node.js, TypeScript, JavaScript, portfolio, revestaweb.tech" />
  <meta name="author" content="Gabriel Revest" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://revestaweb.tech" />
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://revestaweb.tech" />
  <meta property="og:title" content="Gabriel Revest — Développeur Full-Stack" />
  <meta property="og:description" content="Développeur full-stack passionné, créateur de PulsaBot. React, Node.js, TypeScript." />
  <meta property="og:image" content="https://revestaweb.tech/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:site_name" content="Gabriel Revest Portfolio" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Gabriel Revest — Développeur Full-Stack" />
  <meta name="twitter:description" content="Développeur full-stack passionné, créateur de PulsaBot." />
  <meta name="twitter:image" content="https://revestaweb.tech/og-image.png" />
  
  <!-- Thème -->
  <meta name="theme-color" content="#7c3aed" />
  <meta name="color-scheme" content="dark" />
  
  <!-- Preconnect pour Google Fonts si utilisé -->
  <!-- <link rel="preconnect" href="https://fonts.googleapis.com" /> -->
  
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

---

## ⚡ Étape 7.2 — Optimisation Vite (lazy loading)

### Prompt Cursor :

```
Dans src/App.tsx, remplace les imports directs des sections par du lazy loading :

import { lazy, Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Background from '@/components/layout/Background'
import CustomCursor from '@/components/ui/CustomCursor'

// Chargement différé des sections (sauf Hero qui doit être immédiat)
import Hero from '@/components/sections/Hero'
const About = lazy(() => import('@/components/sections/About'))
const Skills = lazy(() => import('@/components/sections/Skills'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Contact = lazy(() => import('@/components/sections/Contact'))

// Fallback de chargement
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-x-hidden grain">
      <Background />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
```

---

## 🖼️ Étape 7.3 — Optimisation des images

### Prompt Cursor :

```
Dans tous les composants qui utilisent <img>, applique ces bonnes pratiques :

1. Ajoute loading="lazy" sur toutes les images sauf avatar du Hero
2. Ajoute fetchpriority="high" sur l'avatar du Hero
3. Utilise width et height explicites pour éviter le CLS
4. Préfère WebP avec fallback JPG

Exemple pour l'avatar Hero :
<img
  src="/images/avatar.webp"
  alt="Gabriel Revest - Développeur Full-Stack"
  width={320}
  height={320}
  fetchPriority="high"
  className="w-full h-full object-cover"
/>

Exemple pour screenshots projets :
<img
  src={project.image}
  alt={`Screenshot ${project.nom}`}
  width={1200}
  height={800}
  loading="lazy"
  decoding="async"
  className="..."
/>
```

---

## 🗺️ Étape 7.4 — Sitemap et robots.txt

### Prompt Cursor :

```
Crée public/robots.txt :
User-agent: *
Allow: /
Sitemap: https://revestaweb.tech/sitemap.xml
Disallow: /api/


Crée public/sitemap.xml :
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://revestaweb.tech/</loc>
    <lastmod>2026-02-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://revestaweb.tech/#about</loc>
    <lastmod>2026-02-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://revestaweb.tech/#projects</loc>
    <lastmod>2026-02-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://revestaweb.tech/#contact</loc>
    <lastmod>2026-02-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 📊 Étape 7.5 — Données structurées JSON-LD

### Prompt Cursor :

```
Dans index.html, juste avant </head>, ajoute :

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gabriel Revest",
  "url": "https://revestaweb.tech",
  "jobTitle": "Développeur Full-Stack JavaScript",
  "description": "Développeur full-stack spécialisé React, Node.js et TypeScript",
  "sameAs": [
    "https://github.com/gabrielrevest",
    "https://linkedin.com/in/gabriel-revest"
  ],
  "knowsAbout": ["React", "Node.js", "TypeScript", "Docker", "PostgreSQL"]
}
</script>
```

---

## ⚙️ Étape 7.6 — Optimiser vite.config.ts

### Prompt Cursor :

```
Mets à jour vite.config.ts :

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['lucide-react', 'react-icons'],
        },
      },
    },
    // Activer la compression
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
  // Précharger les assets critiques
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
```

---

## 🔍 Étape 7.7 — Audit Lighthouse

```
Procédure pour l'audit :

1. Lance le build de production :
   npm run build
   npm run preview

2. Dans Chrome (en mode incognito) :
   F12 → Lighthouse → Analyze page load
   Coche : Performance, Accessibility, SEO

3. Cibles :
   Performance : > 90
   Accessibility : > 90
   Best Practices : > 90
   SEO : > 90

4. Erreurs fréquentes et corrections :
   
   "Image sans width/height" → Ajoute width et height sur <img>
   "Contrast insufficient" → Vérifie les couleurs text-muted sur fond dark
   "Link has no text" → Ajoute aria-label sur les liens icône
   "No meta description" → Vérifie index.html
   "Unused JS" → lazy loading (déjà fait étape 7.2)
```

---

## ♿ Étape 7.8 — Accessibilité

### Prompt Cursor :

```
Vérifie et corrige l'accessibilité dans tous les composants :

1. Tous les <img> ont un attribut alt descriptif
2. Tous les boutons icône ont un aria-label :
   <button aria-label="Ouvrir le menu de navigation">
     <Menu className="w-6 h-6" />
   </button>

3. La navigation a un <nav aria-label="Navigation principale">

4. Les sections ont des rôles appropriés :
   <section aria-labelledby="about-title">
     <h2 id="about-title">...</h2>

5. Les liens externes ont aria-label avec destination :
   <a href={github.url} aria-label="Voir le code sur GitHub" target="_blank">

6. Le contraste de texte est suffisant :
   text-text-secondary (#94a3b8) sur #0a0a0f → ratio ~5.8:1 ✅
   text-text-muted (#475569) sur #0a0a0f → ratio ~4.6:1 ✅ (AA)

7. Ajoute skip link :
   <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-violet-600 text-white px-4 py-2 rounded-xl z-50">
     Aller au contenu principal
   </a>
```

---

## ✅ Checklist de fin de Phase 7

- [ ] Meta tags complets dans index.html
- [ ] Open Graph configuré (tester avec https://opengraph.xyz)
- [ ] Lazy loading sur les sections
- [ ] Images avec loading="lazy" et dimensions explicites
- [ ] robots.txt et sitemap.xml en place
- [ ] JSON-LD données structurées
- [ ] vite.config.ts optimisé (chunks)
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] `npm run build` sans erreurs ni warnings

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-8-DEPLOY.md` et commence la Phase 8.
