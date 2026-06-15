# Cahier des charges — Portfolio développeur

> Document de spécification pour la création du portfolio. Basé sur le contexte `context/`.

**Version** : 1.0  
**Date** : 18 février 2025

---

## 1. Contexte et objectifs

### 1.1 Contexte

Le portfolio vise à présenter le profil de développeur full-stack JavaScript, avec un projet phare (PulsaBot) et d'autres réalisations. La documentation existante dans `context/` sert de source de vérité pour le contenu.

### 1.2 Objectifs

| Objectif | Description |
|----------|-------------|
| **Visibilité** | Présenter compétences, projets et parcours de manière professionnelle |
| **Recrutement** | Faciliter la prise de contact (CDI, freelance, stage) |
| **Crédibilité** | Montrer des projets concrets, une stack moderne et une approche méthodique |
| **Référence** | Centraliser liens GitHub, LinkedIn, site PulsaBot, etc. |

### 1.3 Cibles

- Recruteurs techniques et RH
- Clients potentiels (freelance)
- Développeurs / pairs (réseau, open-source)

---

## 2. Périmètre fonctionnel

### 2.1 Pages principales

| Page | Contenu | Priorité |
|------|---------|----------|
| **Accueil** | Pitch court, CTA vers projets et contact | P0 |
| **À propos** | Présentation, parcours, objectifs, points forts (01-OVERVIEW) | P0 |
| **Projets** | Liste des projets avec descriptions, stack, liens (03-PROJETS) | P0 |
| **Compétences** | Stack technique, méthodologie, langues, soft skills (04-COMPETENCES) | P0 |
| **Contact** | Liens, disponibilité, formulaire ou infos (05-CONTACT) | P0 |

### 2.2 Fonctionnalités secondaires

| Fonctionnalité | Description | Priorité |
|----------------|-------------|----------|
| **Thème clair/sombre** | Toggle ou détection système | P1 |
| **Navigation responsive** | Mobile-first, menu hamburger | P0 |
| **SEO** | Meta tags, Open Graph, sitemap | P1 |
| **Accessibilité** | Contraste, navigation clavier, ARIA | P1 |
| **Section extras** | Pitch, FAQ, réponses types (06-EXTRAS) — optionnel | P2 |

### 2.3 Contenu dynamique

| Source | Fichier | Usage |
|--------|---------|-------|
| Présentation | `01-OVERVIEW.md` | À propos, parcours, objectifs |
| Stack | `02-STACK.md` | Compétences, badges technos |
| Projets | `03-PROJETS.md` | Cartes projets, liens |
| Compétences | `04-COMPETENCES.md` | Tableaux, méthodologie |
| Contact | `05-CONTACT.md` | Liens, disponibilité |
| Extras | `06-EXTRAS.md` | Pitch, FAQ (optionnel) |

---

## 3. Spécifications techniques

### 3.1 Stack recommandée

Alignée avec les compétences et projets existants :

| Domaine | Technologie | Justification |
|---------|-------------|---------------|
| **Framework** | React 19 + Vite 7 | Cohérence avec PulsaBot, stack maîtrisée |
| **Langage** | TypeScript | Typage, maintenabilité |
| **Styling** | Tailwind CSS ou CSS modules | Rapidité, responsive |
| **Routing** | react-router-dom v7 | SPA multi-pages |
| **Build** | Vite | Performance, DX |
| **Hébergement** | Vercel / Netlify / GitHub Pages | Gratuit, déploiement simple |

### 3.2 Alternatives possibles

| Option | Avantages | Inconvénients |
|--------|-----------|---------------|
| **Astro** | SEO natif, contenu statique, léger | Nouvelle techno à apprendre |
| **Next.js** | SSR, écosystème riche | Plus lourd pour un portfolio simple |
| **HTML/CSS/JS vanilla** | Minimal, aucun build | Moins de réutilisation, maintenance |

### 3.3 Contraintes techniques

| Contrainte | Détail |
|------------|--------|
| **Performance** | Lighthouse > 90 (Performance, Accessibilité, SEO) |
| **Compatibilité** | Navigateurs modernes (Chrome, Firefox, Safari, Edge) |
| **Responsive** | Mobile, tablette, desktop |
| **Pas de backend** | Site statique ou SPA sans API dédiée |

---

## 4. Design et UX

### 4.1 Principes

- **Clarté** : Hiérarchie visuelle nette, contenu lisible
- **Cohérence** : Palette, typographie, espacements uniformes
- **Simplicité** : Pas de surcharge, focus sur le contenu
- **Identité** : Refléter le profil (dev full-stack, projets concrets)

### 4.2 Éléments à prévoir

| Élément | Spécification |
|---------|---------------|
| **Typographie** | 1–2 polices (ex. Inter, Geist, JetBrains Mono pour le code) |
| **Couleurs** | Palette limitée (primaire, secondaire, fond, texte) |
| **Icônes** | Lucide React ou équivalent |
| **Animations** | Subtiles (transitions, hover) — pas de surcharge |
| **Dark mode** | Optionnel mais recommandé |

### 4.3 Structure type d'une page projet

- Titre + type
- Description courte
- Stack (badges ou liste)
- Liens (repo, démo, site)
- Captures d'écran ou visuels (optionnel)
- Points clés (architecture, déploiement, etc.)

---

## 5. Intégration du contenu

### 5.1 Stratégie

| Approche | Description |
|----------|-------------|
| **Manuelle** | Copier-coller depuis les MD vers les composants |
| **Semi-automatique** | Script pour parser les MD et générer du JSON/JS |
| **CMS headless** | Si évolution future (Sanity, Contentful) — P2 |

Recommandation : **Manuelle** pour démarrer, avec structure de composants réutilisables.

### 5.2 Placeholders à remplacer

Avant mise en production, vérifier et remplacer dans `context/` :

- `[Ton nom ou pseudo]`
- `[github.com/ton-username]`
- `[linkedin.com/in/ton-profil]`
- `[ton@email.com]`
- Dates, formations, objectifs personnalisés

---

## 6. Déploiement et maintenance

### 6.1 Hébergement

| Option | Avantages | Coût |
|--------|-----------|------|
| **Vercel** | Intégration Git, preview, gratuit | Gratuit |
| **Netlify** | Similaire, formulaires natifs | Gratuit |
| **GitHub Pages** | Simple, intégré GitHub | Gratuit |

### 6.2 CI/CD

- Build automatique sur push (main/master)
- Preview sur PR (si Vercel/Netlify)
- Pas de déploiement SSH nécessaire (site statique)

### 6.3 Maintenance

| Tâche | Fréquence |
|-------|-----------|
| Mise à jour projets | À chaque nouveau projet |
| Mise à jour parcours | Lors de changement de poste/formation |
| Vérification liens | Trimestriel |
| Mise à jour dépendances | Mensuel ou selon alertes |

---

## 7. Livrables attendus

| Livrable | Description |
|----------|-------------|
| **Code source** | Repo Git (public ou privé) |
| **Site en ligne** | URL accessible (ex. portfolio.ton-domaine.com) |
| **README** | Instructions de setup, stack, déploiement |
| **Documentation** | Ce cahier des charges + roadmap |

---

## 8. Critères d'acceptation

- [ ] Toutes les pages P0 sont fonctionnelles
- [ ] Contenu à jour (pas de placeholders visibles)
- [ ] Responsive sur mobile, tablette, desktop
- [ ] Liens GitHub, LinkedIn, projets vérifiés
- [ ] Performance Lighthouse > 90
- [ ] Site déployé et accessible

---

## 9. Annexes

### 9.1 Références

- Documentation context : `context/00-README.md`
- Projet PulsaBot : [github.com/gabrielrevest/PulsaBot](https://github.com/gabrielrevest/PulsaBot)
- Site PulsaBot : [pulsabot.com](https://pulsabot.com)

### 9.2 Glossaire

| Terme | Définition |
|-------|------------|
| **P0** | Priorité critique, indispensable |
| **P1** | Priorité haute, fortement recommandé |
| **P2** | Priorité moyenne, optionnel |
