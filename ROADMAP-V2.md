# 🚀 ROADMAP V2 — Portfolio à la pointe (revestaweb.tech)

> **Statut actuel** : Base technique ✅ | Design ❌ | Animations ❌ | Déploiement ❌
> **Objectif** : Portfolio ultra-moderne, déployé sur DigitalOcean avec domaine `revestaweb.tech`
> **Stack** : React 19 + Vite + TypeScript + Tailwind + Framer Motion

---

## 📌 PREMIER RÉFLEXE : Ouvre ces fichiers dans Cursor

```
@cursor-prompts/CURSOR-CONTEXT.md   ← Contexte complet du projet (TOUJOURS OUVERT)
@cursor-prompts/PHASE-X-NOM.md     ← Prompt de la phase en cours
@src/data/overview.ts               ← Tes données
@tailwind.config.js                 ← Design system
```

---

## 🗺️ Plan complet

| # | Phase | Durée | Statut | Fichier prompt |
|---|-------|-------|--------|----------------|
| 0 | Setup & Remise à zéro | 2h | ⬜ | `PHASE-0-SETUP.md` |
| 1 | Design System (UI components) | 3h | ⬜ | `PHASE-1-DESIGN-SYSTEM.md` |
| 2 | Hero Cinématique | 4h | ⬜ | `PHASE-2-HERO.md` |
| 3 | About & Skills | 3h | ⬜ | `PHASE-3-SECTIONS.md` |
| 4 | Projets (featured + filtre + modale) | 3h | ⬜ | `PHASE-4-PROJETS.md` |
| 5 | Contact & Footer | 2h | ⬜ | `PHASE-5-CONTACT.md` |
| 6 | Assets (photo, screenshots, favicon, CV) | 2h | ⬜ | `PHASE-6-ASSETS.md` |
| 7 | Performance & SEO | 2h | ⬜ | `PHASE-7-PERF-SEO.md` |
| 8 | Déploiement DigitalOcean | 3h | ⬜ | `PHASE-8-DEPLOY.md` |
| 9 | Domaine revestaweb.tech & DNS | 1h | ⬜ | `PHASE-9-DOMAINE.md` |
| 10 | Maintenance & évolutions | ∞ | ⬜ | `PHASE-10-MAINTENANCE.md` |
| 11 | Hardening sécurité (app + CI/CD + headers) | 3h | ⬜ | `PHASE-11-SECURITY.md` |
| 12 | Tests complets (unitaires + sécurité + E2E) | 5h | ⬜ | `PHASE-12-TESTS.md` |

**Total estimé : ~33h de développement**

---

## 🎨 Résultat attendu

### Visuellement
- 🌑 Dark-first, fond `#0a0a0f` avec grain subtil
- 💜 Accents violet `#7c3aed` + cyan `#06b6d4`
- 🪟 Glassmorphism sur toutes les cartes
- 🖱️ Curseur custom qui change au survol
- 🌟 Spotlight qui suit la souris dans le Hero
- 🔤 Typewriter pour les technos
- ✨ Animations Framer Motion sur tout
- 📱 100% responsive mobile

### Techniquement
- ⚡ Lighthouse Performance > 90
- ♿ Lighthouse Accessibility > 90
- 🔍 Lighthouse SEO > 90
- 📦 Lazy loading des sections
- 🔄 CI/CD auto via GitHub Actions
- 🔒 HTTPS automatique

### Fonctionnellement
- 🏆 Section Hero avec stats animées et avatar
- 📅 Timeline de parcours interactive
- 🛠️ Tech Wall avec vraies icônes de logos
- 📂 Grille projets avec filtre et modale de détail
- 📧 Formulaire de contact via Formspree (email réel)
- 📄 CV téléchargeable en PDF

---

## 💰 Coût final

| Service | Coût | Note |
|---------|------|------|
| DigitalOcean App Platform | $0/mois | Static Site gratuit OU $200 crédit Student |
| Formspree | $0/mois | 50 emails/mois gratuits |
| revestaweb.tech | Déjà acheté | Renouvellement ~10€/an |
| Fonts (Fontsource) | $0 | NPM, pas de CDN |

**Total mensuel : $0** (pendant 1 an avec le crédit Student)

---

## 🎓 GitHub Student Pack — Avantages utilisés

| Avantage | Valeur | Où l'activer |
|----------|--------|-------------|
| DigitalOcean $200 | $200 crédit | education.github.com/pack → DigitalOcean |
| GitHub Pro | Gratuit | Déjà activé avec Student |
| Namecheap .me gratuit | ~10€ | Si tu veux un second domaine |
| JetBrains IDEs | ~200€/an | Si pas encore activé |
| MongoDB Atlas | 50$ crédit | Pour futures APIs |

---

## 📐 Architecture cible

```
GitHub (main)
    │
    ├── Push → GitHub Actions (npm run build)
    │                │
    │          Build réussi ✅
    │                │
    └──────────────→ DigitalOcean App Platform
                            │
                    Static Site (dist/)
                            │
                    revestaweb.tech
                    (DNS chez registrar)
```

---

## 🚦 Par où commencer ?

**→ Ouvre `cursor-prompts/PHASE-0-SETUP.md` et lis-le entièrement avant de commencer.**

Chaque fichier PHASE se termine par :
- Une checklist ✅ pour confirmer que tout est fait
- Le nom du prochain fichier à ouvrir

Cursor sait toujours quoi faire ensuite.

---

*Portfolio revestaweb.tech — Gabriel Revest — 2026*
