# PHASE 6 — Assets, Images & Icônes

> **Durée estimée** : 2h
> **Prérequis** : Phase 5 terminée ✅
> **Prochaine phase** : `PHASE-7-PERF-SEO.md`

---

## 🎯 Objectif

Sourcer et intégrer tous les assets visuels : photo de profil, screenshots projets, favicon, CV PDF, icônes tech.

---

## 📁 Structure des assets

```
public/
├── images/
│   ├── avatar.jpg          ← Ta photo de profil
│   ├── og-image.png        ← Image Open Graph (1200x630)
│   └── projects/
│       ├── pulsabot.jpg    ← Screenshot PulsaBot
│       ├── pulsabot.jpg    ← Screenshot PulsaBot
│       └── xxx.jpg         ← Autres projets
├── icons/
│   └── favicon.ico         ← Favicon
├── cv.pdf                  ← Ton CV PDF
└── robots.txt
```

---

## 🖼️ Étape 6.1 — Photo de profil

### Options pour obtenir/créer ta photo :

**Option A — Photo réelle (recommandé)**
```
1. Prends une photo de toi avec fond uni ou sombre
2. Utilise remove.bg (gratuit) pour enlever le fond
3. Redimensionne en 800x800px carré
4. Compresse avec squoosh.app (WebP, qualité 80%)
5. Place dans public/images/avatar.webp
```

**Option B — Avatar illustré (plus stylé)**
```
1. Va sur https://www.midjourney.com OU https://ideogram.ai (gratuit)
   Prompt : "professional developer avatar, dark background, purple glow, 
   anime style, half-face, neon lights, 4K, --ar 1:1 --style raw"
   
2. Ou utilise Ready Player Me : https://readyplayer.me
   → Crée un avatar 3D, exporte en PNG

3. Ou génère avec DiceBear (avatars stylisés, gratuit) :
   https://avatars.dicebear.com/
```

**Option C — Placeholder stylé (si pas encore de photo)**

### Prompt Cursor :
```
En attendant la vraie photo, crée un composant AvatarPlaceholder dans src/components/ui/ :

Un carré avec :
- Fond gradient from-violet-900 to-cyan-900
- Tes initiales centrées en énorme (text-8xl, font-display, text-gradient)
- Un effet de grain avec pseudo-element ::after
- Bordure avec effet glow violet

Utilise ce composant à la place de <img> dans le Hero.
```

---

## 📸 Étape 6.2 — Screenshots des projets

### Comment obtenir de belles screenshots :

```
Option 1 — Shots.so (RECOMMANDÉ, gratuit)
→ https://shots.so
→ Colle l'URL de ton site/app
→ Sélectionne le mockup (MacBook, iPhone, etc.)
→ Télécharge en PNG/JPG haute résolution

Option 2 — Screely
→ https://www.screely.com
→ Upload ta screenshot → cadre magnifique automatique

Option 3 — BrowserFrame
→ https://browserframe.com
→ Screenshot dans un cadre navigateur stylisé

Option 4 — Screenshot manuelles
1. Ouvre ton app/site
2. F12 → Toggle device toolbar → Règle sur 1440px
3. Ctrl+Shift+P → "Capture full size screenshot"
4. Traite avec Screely ou Shots.so

Dimensions cibles : 1200x800px (ratio 3:2)
Format : WebP (meilleure compression)
Nommage : public/images/projects/pulsabot.webp
```

---

## 🔑 Étape 6.3 — Favicon

### Prompt Cursor :
```
Crée un favicon SVG dans public/ :

Crée public/favicon.svg :
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#0a0a0f"/>
  <text x="16" y="22" text-anchor="middle" 
        font-family="JetBrains Mono, monospace" 
        font-size="14" font-weight="bold" fill="url(#grad)">
    RW
  </text>
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#06b6d4"/>
    </linearGradient>
  </defs>
</svg>

Puis mets à jour index.html avec :
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/favicon.svg" />
```

---

## 📄 Étape 6.4 — CV PDF

```
Pour créer un CV PDF pro :

Option 1 — FlowCV (RECOMMANDÉ)
→ https://flowcv.com
→ Template moderne, dark/light
→ Exporte en PDF
→ Place dans public/cv.pdf

Option 2 — Canva (templates gratuits)
→ https://www.canva.com
→ Recherche "CV développeur moderne"
→ Exporte en PDF
→ public/cv.pdf

Tips pour le CV :
- Maximum 1 page
- Même palette violet/dark que le portfolio
- Section projets : PulsaBot avec métriques
- Section compétences avec niveau de maîtrise
- GitHub + LinkedIn + revestaweb.tech bien visibles
```

---

## 🎨 Étape 6.5 — Image Open Graph

```
Pour l'image OG (prévisualisation liens réseaux sociaux) :

Option 1 — Créer avec Canva :
→ Taille : 1200x630px
→ Fond : #0a0a0f
→ Ton nom en grand, titre "Développeur Full-Stack"
→ Logo/avatar à droite
→ Palette violet/cyan
→ Exporte en PNG → public/og-image.png

Option 2 — Générer automatiquement avec Vercel OG (plus avancé) :
→ Si tu utilises Next.js uniquement, sinon garde Canva.

Utilisation dans index.html (voir Phase 7).
```

---

## 🎭 Étape 6.6 — Icônes supplémentaires

### Sources d'icônes gratuites :

```
1. Lucide React (déjà installé) — https://lucide.dev
   → 1000+ icônes modernes, cohérentes
   → Utilise pour l'UI générale

2. react-icons (déjà installé) — https://react-icons.github.io/react-icons/
   → Simple Icons (si..) : logos de technos
   → Font Awesome (fa..) : icônes générales
   → Phosphor (ph..) : icônes alternatives stylées

3. Devicons — pour les logos tech colorés
   → https://devicons.github.io/devicon/
   → CDN : <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
   
   Exemple d'utilisation dans un composant :
   const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
   const deviconMap: Record<string, string> = {
     'React': `${DEVICON_BASE}/react/react-original.svg`,
     'TypeScript': `${DEVICON_BASE}/typescript/typescript-original.svg`,
     'Node.js': `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
     'Docker': `${DEVICON_BASE}/docker/docker-original.svg`,
     'PostgreSQL': `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
     'GitHub': `${DEVICON_BASE}/github/github-original.svg`,
     'Nginx': `${DEVICON_BASE}/nginx/nginx-original.svg`,
     'Linux': `${DEVICON_BASE}/linux/linux-original.svg`,
   }
```

---

## 🖋️ Étape 6.7 — Fonts (déjà configuré mais vérifier)

```
Vérifie que les fonts sont bien chargées dans index.css :
@import '@fontsource/space-grotesk/700.css'; ← pour les titres gras
@import '@fontsource/inter/400.css';
@import '@fontsource/jetbrains-mono/400.css';

Test : dans ton browser, inspecte un titre → doit afficher "Space Grotesk"
Test : un badge mono → doit afficher "JetBrains Mono"
```

---

## ✅ Checklist de fin de Phase 6

- [ ] Avatar/photo en place (public/images/avatar.webp)
- [ ] Au moins 1 screenshot projet (PulsaBot)
- [ ] Favicon SVG personnalisé
- [ ] CV PDF uploadé (public/cv.pdf)
- [ ] Image OG créée (public/og-image.png)
- [ ] Fonts Space Grotesk et JetBrains Mono chargées
- [ ] Icônes react-icons SiX fonctionnelles
- [ ] `npm run build` sans warnings sur les assets

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-7-PERF-SEO.md` et commence la Phase 7.
