# Portfolio — Développeur full-stack

Portfolio personnel basé sur React, Vite et TypeScript.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** — Build et dev server
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icônes

## Démarrage

```bash
npm install
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173)

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build |
| `npm run test:unit` | Tests unitaires (Vitest) |
| `npm run test:coverage` | Tests + couverture |
| `npm run test:security` | Tests sécurité/a11y ciblés |
| `npm run test:e2e` | Tests E2E Playwright |

## Structure

```
src/
├── components/   # Navbar, Footer, Section, Typewriter, ParticlesBackground
├── sections/     # Hero, About, Projects, Skills, Contact (one-page)
├── data/         # Données (overview, projects, skills, contact)
└── main.tsx
```

## Fonctionnalités

- **One-page** avec scroll fluide et ancres
- **Animations** Framer Motion (scroll, hover, transitions)
- **Glassmorphism** sur les cartes et sections
- **Effet typewriter** sur le hero
- **Mode sombre** avec toggle
- **Design responsive** mobile-first

## Personnalisation

1. Modifier les fichiers dans `src/data/` pour mettre à jour le contenu
2. Remplacer les placeholders `[Ton nom]`, `[ton@email.com]`, etc.
3. Ajouter des projets dans `src/data/projects.ts`

## Déploiement

Le site est une SPA statique. Build : `npm run build` → dossier `dist/`

### Vercel (recommandé)

```bash
npm i -g vercel
vercel
```

Ou connecter le repo GitHub sur [vercel.com](https://vercel.com) — déploiement auto à chaque push.

### Netlify

1. Créer un site sur [netlify.com](https://netlify.com)
2. Build command : `npm run build`
3. Publish directory : `dist`

### GitHub Pages

Pour un repo `username.github.io` ou Pages sur un repo :

1. Dans `vite.config.ts`, ajouter `base: '/nom-du-repo/'` si sous-dossier
2. `npm run build` puis déployer le contenu de `dist/`
3. Ou utiliser l’action [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

### Après déploiement

- Remplacer `https://ton-site.com` dans `public/sitemap.xml` par ton URL réelle
- Ajouter une image `public/og-image.png` (1200×630) pour le partage social

## Sécurité

- Headers de sécurité définis dans `public/_headers` (CSP, HSTS, XFO, nosniff, etc.).
- Headers renforcés : `form-action`, `COOP`, `CORP`, `connect-src` Formspree explicite.
- Scans CI dédiés : `security.yml` (CodeQL, gitleaks, audit npm runtime).
- Durcissement liens externes : `target="_blank"` protégé par `rel="noopener noreferrer"`.
- Validation formulaire renforcée (longueurs minimales/maximales + pattern nom).

> Note: selon la plateforme d'hébergement, les headers de `public/_headers` peuvent nécessiter une configuration équivalente côté provider.

## Tests

- **Unitaires/Intégration** : Vitest + Testing Library.
- **Accessibilité** : jest-axe.
- **Sécurité DOM** : vérifications automatisées (liens externes, usage HTML dangereux).
- **E2E** : Playwright (navigation sections, filtres projets, modale, menu mobile).
- **E2E contact** : soumission formulaire avec mock Formspree.

## Documentation

- [Cahier des charges](./CAHIER-DES-CHARGES.md)
- [Roadmap](./ROADMAP.md)
- [Contexte](./context/00-README.md)
