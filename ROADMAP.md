# Roadmap — Portfolio développeur

> Plan de développement par phases. Durée estimée : 2–4 semaines (selon disponibilité).

**Dernière mise à jour** : 18 février 2025

---

## Vue d'ensemble

```
Phase 0: Préparation        → 1–2 jours
Phase 1: Fondations         → 2–3 jours
Phase 2: Pages principales  → 3–5 jours
Phase 3: Polish & déploiement → 2–3 jours
Phase 4: Post-lancement     → Continu
```

---

## Phase 0 : Préparation (1–2 jours)

### Objectifs

- Valider le cahier des charges
- Configurer l'environnement
- Préparer le contenu

### Tâches

| # | Tâche | Statut |
|---|-------|--------|
| 0.1 | Lire et valider `CAHIER-DES-CHARGES.md` | ☑ |
| 0.2 | Remplacer les placeholders dans `context/` (nom, liens, email) | ☐ |
| 0.3 | Créer le projet (Vite + React + TypeScript) | ☑ |
| 0.4 | Configurer Tailwind CSS (ou autre solution de styling) | ☑ |
| 0.5 | Structurer les dossiers (components, pages, assets, data) | ☑ |
| 0.6 | Extraire les données des MD vers des fichiers JS/TS (optionnel) | ☐ |

### Livrables

- Projet initialisé et build fonctionnel
- Contenu `context/` à jour

---

## Phase 1 : Fondations (2–3 jours)

### Objectifs

- Mettre en place la structure de base
- Layout, navigation, thème
- Composants réutilisables

### Tâches

| # | Tâche | Statut |
|---|-------|--------|
| 1.1 | Créer le layout principal (header, footer, main) | ☑ |
| 1.2 | Implémenter la navigation (liens vers toutes les pages) | ☑ |
| 1.3 | Navigation responsive (menu hamburger mobile) | ☑ |
| 1.4 | Définir la palette de couleurs et typographie | ☑ |
| 1.5 | Implémenter le thème clair/sombre (toggle ou auto) | ☑ |
| 1.6 | Créer les composants de base (Button, Card, Badge, Section) | ☐ |
| 1.7 | Configurer react-router-dom (routes pour chaque page) | ☑ |

### Livrables

- Layout responsive avec navigation
- Thème clair/sombre
- Routes fonctionnelles (pages vides)

---

## Phase 2 : Pages principales (3–5 jours)

### Objectifs

- Remplir chaque page avec le contenu de `context/`
- Intégrer les liens et médias
- Assurer la cohérence visuelle

### 2.1 Page Accueil

| # | Tâche | Statut |
|---|-------|--------|
| 2.1.1 | Hero avec pitch court (06-EXTRAS) | ☑ |
| 2.1.2 | CTA vers Projets et Contact | ☑ |
| 2.1.3 | Aperçu des 2–3 derniers projets (optionnel) | ☐ |

### 2.2 Page À propos

| # | Tâche | Statut |
|---|-------|--------|
| 2.2.1 | Présentation (nom, titre, localisation, en bref) | ☑ |
| 2.2.2 | Tableau parcours (01-OVERVIEW) | ☑ |
| 2.2.3 | Objectifs (court/moyen terme, side-projects) | ☑ |
| 2.2.4 | Points forts (technique, méthode, projets, autonomie) | ☑ |

### 2.3 Page Projets

| # | Tâche | Statut |
|---|-------|--------|
| 2.3.1 | Carte projet PulsaBot (description, stack, liens) | ☑ |
| 2.3.2 | Architecture ou schéma (optionnel) | ☐ |
| 2.3.3 | Autres projets (si présents dans 03-PROJETS) | ☑ |
| 2.3.4 | Liens externes (GitHub, site) avec icônes | ☑ |

### 2.4 Page Compétences

| # | Tâche | Statut |
|---|-------|--------|
| 2.4.1 | Tableau développement (backend, frontend, Discord, BDD, DevOps) | ☑ |
| 2.4.2 | Méthodologie (documentation, tests, CI/CD, versioning) | ☑ |
| 2.4.3 | Langues et soft skills | ☑ |
| 2.4.4 | Badges ou icônes technos (optionnel) | ☐ |

### 2.5 Page Contact

| # | Tâche | Statut |
|---|-------|--------|
| 2.5.1 | Liens (GitHub, LinkedIn, email) | ☑ |
| 2.5.2 | Disponibilité (CDI, freelance, remote) | ☑ |
| 2.5.3 | Préférences de contact | ☑ |
| 2.5.4 | Formulaire de contact (optionnel, ex. Formspree) | ☐ |

### Livrables

- 5 pages complètes et cohérentes
- Contenu aligné avec `context/`

---

## Phase 3 : Polish & déploiement (2–3 jours)

### Objectifs

- Optimiser performance et SEO
- Vérifier accessibilité
- Déployer en production

### Tâches

| # | Tâche | Statut |
|---|-------|--------|
| 3.1 | Meta tags (title, description, Open Graph) | ☑ |
| 3.2 | Favicon et images sociales | ☑ |
| 3.3 | Sitemap et robots.txt | ☑ |
| 3.4 | Audit Lighthouse (Performance, Accessibilité, SEO) | ☐ |
| 3.5 | Corrections accessibilité (contraste, ARIA, clavier) | ☑ |
| 3.6 | Animations légères (transitions, hover) | ☑ |
| 3.7 | Créer compte Vercel/Netlify et lier le repo | ☐ |
| 3.8 | Configurer le domaine (optionnel) | ☐ |
| 3.9 | Déployer et vérifier en production | ☐ |
| 3.10 | Mettre à jour README (setup, déploiement) | ☑ |

### Livrables

- Site déployé et accessible
- Lighthouse > 90 sur les 3 métriques
- README à jour

---

## Phase 4 : Post-lancement (continu)

### Objectifs

- Maintenir le portfolio à jour
- Améliorer selon retours

### Tâches récurrentes

| Fréquence | Tâche |
|-----------|-------|
| **À chaque nouveau projet** | Ajouter une carte projet, mettre à jour 03-PROJETS |
| **Changement de poste** | Mettre à jour parcours (01-OVERVIEW) |
| **Trimestriel** | Vérifier les liens, mettre à jour les dépendances |
| **Selon besoin** | Ajouter section FAQ (06-EXTRAS), formulaire contact |

### Améliorations possibles (P2)

- [ ] Blog ou articles techniques
- [ ] Section "Extras" (pitch, FAQ, réponses entretien)
- [ ] Mode multilingue (FR/EN)
- [ ] Intégration analytics (Plausible, Umami)
- [ ] Tests E2E (Playwright, Cypress)

---

## Phase 5 : Sécurité (1–2 jours)

### Objectifs

- Renforcer la sécurité front, infra et CI/CD
- Réduire les risques d'exposition de secrets
- Ajouter des contrôles automatiques

### Tâches

| # | Tâche | Statut |
|---|-------|--------|
| 5.1 | Définir les en-têtes HTTP de sécurité (CSP, HSTS, X-Frame-Options) | ☐ |
| 5.2 | Vérifier la politique des dépendances (`npm audit`, updates critiques) | ☐ |
| 5.3 | Ajouter un scan SAST/Secrets en CI (CodeQL + gitleaks/trufflehog) | ☐ |
| 5.4 | Durcir la gestion des variables d'environnement (`.env`, `.env.example`) | ☐ |
| 5.5 | Vérifier les formulaires (anti-spam Formspree, validation côté client) | ☐ |
| 5.6 | Mettre en place des règles de sécurité de base dans la doc | ☐ |

### Livrables

- Pipeline CI avec scans de sécurité
- Politique de sécurité documentée
- Aucune vulnérabilité critique connue

---

## Phase 6 : Tests complets (1–2 jours)

### Objectifs

- Couvrir le socle critique avec tests unitaires, sécurité et E2E
- Fiabiliser les évolutions et éviter les régressions

### Tâches

| # | Tâche | Statut |
|---|-------|--------|
| 6.1 | Installer et configurer Vitest + Testing Library (unit/integration) | ☐ |
| 6.2 | Couvrir composants critiques (Navbar, Hero, Projects, ContactForm) | ☐ |
| 6.3 | Ajouter des tests d'accessibilité automatisés (`jest-axe`) | ☐ |
| 6.4 | Ajouter des tests E2E Playwright (navigation, formulaire, responsive) | ☐ |
| 6.5 | Ajouter des tests de sécurité (headers, liens externes, injection basique) | ☐ |
| 6.6 | Exécuter la suite de tests en CI sur chaque PR | ☐ |

### Livrables

- Suite de tests exécutable localement et en CI
- Rapport de couverture de tests
- Scénarios E2E principaux validés

---

## Récapitulatif des jalons

| Jalon | Date cible | Critère |
|-------|------------|---------|
| **M0** | J+2 | Projet initialisé, contenu préparé |
| **M1** | J+5 | Layout, navigation, thème en place |
| **M2** | J+10 | Toutes les pages remplies |
| **M3** | J+13 | Site déployé, Lighthouse OK |
| **Lancement** | J+14 | Portfolio en ligne, partageable |
| **M4** | J+16 | Hardening sécurité validé |
| **M5** | J+18 | Tests unitaires + sécurité + E2E au vert |

---

## Notes

- **Flexibilité** : Les durées sont indicatives. Adapter selon le temps disponible.
- **Priorisation** : En cas de contrainte, garder P0 (Accueil, À propos, Projets, Contact) et reporter P1/P2.
- **Contexte** : Référencer `@context/` ou `@portfolio/` dans Cursor pour restaurer le contexte lors du développement.
