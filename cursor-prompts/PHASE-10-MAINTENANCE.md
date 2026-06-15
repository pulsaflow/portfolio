# PHASE 10 — Maintenance & Évolutions

> **Durée** : Continue dans le temps
> **Prérequis** : Portfolio en ligne ✅
> **Ce fichier** : Guide de référence pour les mises à jour futures

---

## 🔄 Tâches récurrentes

### Chaque nouveau projet

```
Prompt Cursor :
"Ouvre src/data/projects.ts. Ajoute un nouveau projet avec cette structure :
{
  nom: 'Nom du projet',
  type: 'Application Web | Bot Discord | API | etc.',
  description: 'Description courte (2 lignes max)',
  descriptionLongue: 'Description détaillée pour la modale',
  stack: ['React', 'Node.js', ...],
  repo: 'https://github.com/...',
  site: 'https://...',
  featured: false,
  image: '/images/projects/nom-projet.webp',
  tags: ['react', 'backend', 'discord'],
  statut: 'production',
  stats: [{ label: 'Utilisateurs', value: '1k+' }]
}
Assure-toi de mettre l'image dans public/images/projects/."
```

---

### Mise à jour du parcours

```
Prompt Cursor :
"Ouvre src/data/overview.ts. Ajoute cette entrée au tableau parcours :
{ periode: '2026', role: 'Titre du poste', contexte: 'Entreprise, contexte' }
Garde les entrées triées du plus récent au plus ancien."
```

---

## 🚀 Améliorations futures (P2)

### A. Blog technique (haute valeur SEO)

```
Stack recommandée : Markdown + Vite
Librairie : vite-plugin-md ou MDX

Prompt Cursor pour l'initialiser :
"Installe vite-plugin-md et configure-le dans vite.config.ts.
Crée src/pages/blog/index.tsx avec une liste des articles.
Crée src/pages/blog/[slug].tsx pour afficher un article.
Premier article : src/content/blog/mon-setup-developpement.md"

Structure d'un article MD :
---
title: Mon setup de développement 2026
date: 2026-02-18
tags: [setup, vscode, tools]
description: Mon environnement de dev complet
---

# Mon setup...
```

---

### B. Mode multilingue FR/EN

```
Librairie : react-i18next

Prompt Cursor :
"Installe react-i18next et i18next.
Crée src/i18n/fr.json et src/i18n/en.json avec toutes les clés de traduction.
Ajoute un toggle FR/EN dans la Navbar.
Remplace tous les textes hardcodés par t('clé')."
```

---

### C. Analytics privacy-first

```
Plausible Analytics (léger, RGPD) :
→ Ajoute dans index.html :
<script defer data-domain="revestaweb.tech" src="https://plausible.io/js/script.js"></script>

Voir les stats sur : https://plausible.io/revestaweb.tech
(accès public optionnel ou privé)
```

---

### D. Testimonials / Recommandations

```
Prompt Cursor :
"Crée une section Testimonials après Projects avec :
- Composant TestimonialCard (avatar, nom, poste, texte, étoiles)
- Les données dans src/data/testimonials.ts
- Carousel avec Framer Motion ou static grid
- Animation FadeIn au scroll"
```

---

### E. Tests E2E avec Playwright

```
npm init playwright@latest

Crée des tests pour :
- Navigation vers chaque section
- Formulaire de contact (envoi)
- Responsive mobile
- Liens GitHub/LinkedIn (status 200)

Prompt Cursor :
"Crée tests/e2e/portfolio.spec.ts avec Playwright.
Teste que :
1. La page charge en < 3s
2. Le typewriter affiche du texte
3. Le bouton 'Voir mes projets' scroll vers #projects
4. Le formulaire contact accepte la soumission
5. Sur mobile (375px), le menu hamburger fonctionne"
```

---

## 📋 Commandes utiles

```bash
# Développement
npm run dev                    # Serveur dev localhost:5173
npm run build                  # Build production
npm run preview                # Prévisualiser le build

# Git workflow
git add .
git commit -m "feat: ..."
git push origin main           # → Déclenche redéploiement auto DigitalOcean

# Vérifications
npm run lint                   # Vérifier TypeScript + ESLint
npx tsc --noEmit              # Vérifier les types seulement
npx lighthouse https://revestaweb.tech --output html   # Audit

# Dépendances
npm outdated                   # Voir les mises à jour disponibles
npm update                     # Mettre à jour les dépendances mineures
```

---

## 🔒 Sécurité & Maintenance

```
Chaque mois :
□ npm audit → corriger les vulnérabilités
□ npm outdated → mettre à jour les deps majeures
□ Vérifier les liens des projets (GitHub, sites)
□ Vérifier les stats DigitalOcean (quota crédit)

Chaque trimestre :
□ Lighthouse audit sur le domaine live
□ Vérifier Google Search Console (erreurs, indexation)
□ Mettre à jour le CV PDF si changement
□ Renouveler le domaine revestaweb.tech (annuel)
```

---

## 💡 Idées de features premium

| Feature | Difficulté | Impact |
|---------|------------|--------|
| Curseur avec trail d'étoiles | Facile | ⭐⭐ |
| 3D avec Three.js (hero) | Difficile | ⭐⭐⭐⭐ |
| Dark/Light mode toggle | Facile | ⭐⭐ |
| Scroll progress bar | Très facile | ⭐ |
| Confetti au chargement | Facile | ⭐⭐ |
| Easter egg (konami code) | Moyen | ⭐⭐⭐ |
| Page 404 créative | Facile | ⭐⭐ |
| Animation de chargement | Moyen | ⭐⭐⭐ |
| Générateur de CV auto | Difficile | ⭐⭐⭐⭐ |
| Section "Actuellement" | Très facile | ⭐⭐ |

---

## 📌 Contexte Cursor — Rappel

**Pour tout travail sur le portfolio, garde ces fichiers ouverts dans Cursor :**

```
@ROADMAP-V2.md
@cursor-prompts/PHASE-X-EN-COURS.md
@src/data/
@tailwind.config.js
```

**Prompt de contexte à utiliser au début de chaque session Cursor :**

```
Contexte : Je travaille sur mon portfolio personnel "revestaweb.tech".
Stack : React 19 + Vite + TypeScript + Tailwind CSS + Framer Motion.
Design : Dark-first, palette violet (#7c3aed) + cyan (#06b6d4), glassmorphism.
Structure : src/components/sections/, src/components/ui/, src/data/, src/components/layout/.

Phase actuelle : [INDIQUER LA PHASE EN COURS]
Fichier en cours : [INDIQUER LE FICHIER]

Objectif de cette session : [DÉCRIRE CE QU'ON FAIT]
```

---

*Portfolio revestaweb.tech — Gabriel Revest — 2026*
