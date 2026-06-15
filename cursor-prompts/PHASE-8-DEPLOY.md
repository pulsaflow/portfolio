# PHASE 8 — Déploiement DigitalOcean

> **Durée estimée** : 3h
> **Prérequis** : Phase 7 terminée ✅, `npm run build` fonctionnel
> **Prochaine phase** : `PHASE-9-DOMAINE.md`

---

## 🎯 Objectif

Déployer le portfolio sur DigitalOcean App Platform avec CI/CD automatique depuis GitHub, en utilisant le crédit $200 du GitHub Student Pack.

---

## 💰 Étape 8.0 — Activer le crédit DigitalOcean Student

```
1. Va sur : https://education.github.com/pack
2. Connecte ton compte GitHub étudiant
3. Cherche "DigitalOcean" dans les offres
4. Clique sur "Get access"
5. Crée un compte DigitalOcean avec l'email étudiant
6. Le crédit de $200 est ajouté automatiquement (valable 1 an)

→ App Platform Basic : ~$5/mois = 40 mois gratuits !
```

---

## 📦 Étape 8.1 — Préparer le repo GitHub

### Prompt Cursor :

```
Crée ces fichiers de configuration pour le déploiement :

1. .github/workflows/deploy.yml :
name: Build & Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Check build output
        run: ls -la dist/

2. .gitignore (vérifier qu'il contient) :
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
```

---

## 🐙 Étape 8.2 — Push sur GitHub

```
Dans le terminal de ton projet :

# Initialise git si pas déjà fait
git init
git add .
git commit -m "feat: portfolio initial - React + Vite + TypeScript"

# Crée un repo sur github.com (interface web) : 
# Nom : portfolio ou revestaweb-portfolio
# Visibilité : PUBLIC (pour GitHub Pages si besoin) ou PRIVATE

# Puis :
git remote add origin https://github.com/TON_USERNAME/portfolio.git
git branch -M main
git push -u origin main

# Vérifie que GitHub Actions build correctement (onglet Actions sur GitHub)
```

---

## 🚀 Étape 8.3 — Configurer DigitalOcean App Platform

```
Méthode recommandée : App Platform (le plus simple, pas besoin de gérer un serveur)

1. Connecte-toi sur https://cloud.digitalocean.com
2. Menu gauche → "Apps"
3. Clique "Create App"
4. Source : GitHub → Autorise DigitalOcean → Sélectionne ton repo
5. Branch : main
6. Autodeploy : ✅ (redéploie à chaque push)

7. Configure le build :
   - Build Command : npm run build
   - Output Directory : dist
   - Environment : Node.js 20

8. Plan : 
   - Static Site : GRATUIT ($0/mois) ← CHOISIS ÇA pour un portfolio statique
   - Basic ($5/mois) : seulement si tu as du SSR/API

9. Region : FRA1 (Frankfurt) ← le plus proche de toi

10. Clique "Create Resources"
11. Premier déploiement : ~3-5 minutes

→ URL générée automatiquement : https://ton-app.ondigitalocean.app
```

---

## ⚙️ Étape 8.4 — Variables d'environnement

```
Si tu utilises Formspree ou des APIs, configure les variables :

Dans DigitalOcean App Platform :
1. Ton App → Settings → Environment Variables
2. Ajoute :
   VITE_FORMSPREE_ID = xyzabcde
   VITE_APP_URL = https://revestaweb.tech

Dans le code Vite, accède-y via :
import.meta.env.VITE_FORMSPREE_ID

Dans .env.local (ne pas commiter !) :
VITE_FORMSPREE_ID=xyzabcde
VITE_APP_URL=http://localhost:5173
```

---

## 🔄 Étape 8.5 — Configuration pour SPA (Important !)

### Prompt Cursor :

```
Pour une SPA React avec react-router (ou navigation avec ancres), 
il faut que toutes les routes redirigent vers index.html.

Crée public/_redirects :
/*    /index.html   200

Ce fichier est supporté nativement par DigitalOcean App Platform, Netlify, et Vercel.

Ou pour DigitalOcean spécifiquement, tu peux aussi configurer dans l'interface :
App Settings → Routing → "Catch-all route" → /index.html
```

---

## 📊 Étape 8.6 — Vérifier le déploiement

```
Checklist après déploiement :

1. Ouvre l'URL DigitalOcean (*.ondigitalocean.app)
2. Vérifie que le site s'affiche correctement
3. Teste la navigation (scroll vers les sections)
4. Teste sur mobile (Chrome DevTools)
5. Vérifie les images (si elles chargent)
6. Teste le formulaire de contact
7. Vérifie la console : pas d'erreurs

Si le site est blanc (écran blanc) :
→ F12 Console → regarde l'erreur
→ Souvent : mauvais chemin de base dans vite.config.ts
→ Solution : s'assurer que base: '/' dans vite.config.ts

Si les assets 404 :
→ Vérifie que dist/ contient bien les assets
→ Vérifie le Output Directory dans App Platform
```

---

## 🔐 Étape 8.7 — HTTPS (automatique)

```
DigitalOcean App Platform gère automatiquement :
✅ HTTPS avec Let's Encrypt
✅ Certificat SSL renouvelé automatiquement
✅ Redirection HTTP → HTTPS

Rien à faire de ta part pour l'HTTPS sur *.ondigitalocean.app.

Pour ton domaine custom revestaweb.tech → voir Phase 9.
```

---

## 📈 Étape 8.8 — Monitoring & Analytics

```
DigitalOcean App Platform fournit :
→ Onglet "Insights" : CPU, mémoire, requêtes
→ Onglet "Runtime Logs" : logs en temps réel

Pour des analytics visiteurs (optionnel, sans cookies) :

Option A — Plausible Analytics (via GitHub Student Pack)
→ https://plausible.io (9$/mois, mais parfois offert via Student Pack)
→ Léger, privacy-first, conforme RGPD
→ Ajoute dans index.html :
   <script defer data-domain="revestaweb.tech" src="https://plausible.io/js/script.js"></script>

Option B — Umami (self-hosted, gratuit)
→ https://umami.is
→ Tu peux l'héberger sur un autre DigitalOcean App avec Postgres
→ Plus complexe mais 100% gratuit

Option C — Google Analytics (gratuit, mais cookies)
→ Pas recommandé pour un dev conscient du privacy

Commence sans analytics, tu en ajouteras après si besoin.
```

---

## ✅ Checklist de fin de Phase 8

- [ ] Crédit DigitalOcean $200 activé (GitHub Student Pack)
- [ ] Repo GitHub créé et code pushé sur `main`
- [ ] GitHub Actions build réussi (onglet Actions)
- [ ] App Platform configuré : Static Site, FRA1, branch main
- [ ] public/_redirects créé
- [ ] Premier déploiement réussi
- [ ] Site accessible sur *.ondigitalocean.app
- [ ] HTTPS actif (cadenas vert)
- [ ] Test complet du site en production

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-9-DOMAINE.md` et commence la Phase 9.
