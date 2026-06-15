# PHASE 3 — Sections About & Skills

> **Durée estimée** : 3h
> **Prérequis** : Phase 2 terminée ✅
> **Prochaine phase** : `PHASE-4-PROJETS.md`

---

## 🎯 Objectif

Créer les sections "À propos" et "Compétences" avec une mise en page moderne, des icônes de technologies, et des animations au scroll.

---

## 👤 SECTION ABOUT

### Étape 3.1 — Structure de la section About

### Prompt Cursor :

```
Dans src/components/sections/About.tsx, crée la section À propos.

Importe : overviewData depuis @/data/overview
Importe : Section depuis @/components/ui/Section
Importe : FadeIn, StaggerContainer depuis @/components/animations/
Importe : Card depuis @/components/ui/Card
Importe les icônes Lucide : MapPin, Calendar, Zap, Target

Structure en 2 colonnes sur desktop :

Colonne 1 (60%) :
- Introduction text avec overviewData.enBref
- Timeline du parcours (overviewData.parcours)
- Style timeline : ligne verticale violet, points, contenu à droite

Colonne 2 (40%) :
- Card "Qui suis-je" : infos rapides (localisation, disponibilité, langues)
- Card "Objectifs" : objectifs court/moyen terme

Label de section : "// 01 À PROPOS"
```

---

### Étape 3.2 — Timeline du parcours

### Prompt Cursor :

```
Dans la section About, crée un composant Timeline pour le parcours :

Props : items: Array<{ periode: string, role: string, contexte: string }>

Rendu :
<div className="relative">
  {/* Ligne verticale */}
  <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-violet-500/50 to-transparent" />
  
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15 }}
      className="relative pl-12 pb-10 last:pb-0"
    >
      {/* Point violet sur la timeline */}
      <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-violet-600 border-2 border-background ring-2 ring-violet-500/30" />
      
      {/* Contenu */}
      <div className="glass rounded-xl p-5 border border-white/5">
        <span className="font-mono text-violet-400 text-xs mb-1 block">{item.periode}</span>
        <h3 className="font-display font-semibold text-white mb-1">{item.role}</h3>
        <p className="text-text-secondary text-sm">{item.contexte}</p>
      </div>
    </motion.div>
  ))}
</div>
```

---

### Étape 3.3 — Cards infos rapides

### Prompt Cursor :

```
Dans la colonne droite de About, crée deux cards :

Card 1 - "En bref" :
Liste d'infos avec icône + texte :
- 📍 Localisation : [depuis overviewData]
- 🟢 Disponibilité : CDI, Freelance
- 🌍 Langues : Français (natif), Anglais (pro)
- 💼 Expérience : 2+ ans

Style de chaque ligne :
<div className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
    <Icon className="w-4 h-4 text-violet-400" />
  </div>
  <div>
    <span className="text-text-muted text-xs block">{label}</span>
    <span className="text-white text-sm font-medium">{value}</span>
  </div>
</div>

Card 2 - "Objectifs" :
Affiche overviewData.objectifs avec bullet points violets.
```

---

## 🛠️ SECTION SKILLS

### Étape 3.4 — Structure de la section Skills

### Prompt Cursor :

```
Dans src/components/sections/Skills.tsx, crée la section Compétences.

Importe : skillsData depuis @/data/skills
Importe les composants Badge, Card, Section, FadeIn
Label de section : "// 02 COMPÉTENCES"

Structure :

1. Titre + intro

2. Grid de 4 cards technos :
   - Frontend : React, TypeScript, Vite, Tailwind, Framer Motion
   - Backend : Node.js, Express, PostgreSQL, SQLite, REST API
   - DevOps : Docker, GitHub Actions, Linux, Nginx
   - Discord : discord.js, Lavalink, Slash commands, Bot architecture

3. Section "Tech Stack" : tous les badges en grille avec icônes

4. Section "Méthodologie" : 3 cards (Documentation, Tests, CI/CD)

5. Barre de compétences animées (optionnel)
```

---

### Étape 3.5 — Cards de catégories tech

### Prompt Cursor :

```
Crée 4 cards de catégories dans Skills :

Structure d'une card catégorie :
<Card hover glow="violet" className="p-6">
  <div className="flex items-center gap-3 mb-5">
    <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
      <Icon className="w-5 h-5 text-violet-400" />
    </div>
    <h3 className="font-display font-semibold text-white">{category.name}</h3>
  </div>
  <div className="flex flex-wrap gap-2">
    {category.techs.map(tech => (
      <Badge key={tech} label={tech} variant="default" />
    ))}
  </div>
</Card>

Les 4 catégories :
1. Frontend (icône Monitor) : React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, HTML/CSS
2. Backend (icône Server) : Node.js, Express, PostgreSQL, SQLite, REST API, Prisma
3. DevOps (icône Cloud) : Docker, GitHub Actions, Linux, Nginx, Git, CI/CD
4. Discord (icône MessageSquare) : discord.js, Lavalink, Slash Commands, Bot Architecture

Layout : grid grid-cols-1 md:grid-cols-2 gap-6
```

---

### Étape 3.6 — Icônes de technologies avec react-icons

### Prompt Cursor :

```
Crée un composant TechIcon.tsx dans src/components/ui/ pour afficher les icônes de technologies.

Installe react-icons si pas encore fait : npm install react-icons

Mapping des icônes (utilise SiX de 'react-icons/si') :
const techIcons: Record<string, { icon: IconType, color: string }> = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'GitHub': { icon: SiGithub, color: '#ffffff' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Vite': { icon: SiVite, color: '#646CFF' },
  'Express': { icon: SiExpress, color: '#ffffff' },
  'Linux': { icon: SiLinux, color: '#FCC624' },
  'Nginx': { icon: SiNginx, color: '#009639' },
  'Discord': { icon: SiDiscord, color: '#5865F2' },
}

Rendu du composant :
<div className="flex flex-col items-center gap-2 group cursor-default">
  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
    <Icon size={24} color={color} />
  </div>
  <span className="text-xs text-text-muted">{name}</span>
</div>
```

---

### Étape 3.7 — Section "Tech Wall" animée

### Prompt Cursor :

```
Dans Skills, crée une grille de toutes les technos avec animation stagger :

<motion.div
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } }
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mt-12"
>
  {allTechs.map(tech => (
    <motion.div
      key={tech}
      variants={{
        hidden: { opacity: 0, scale: 0.6 },
        show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300 } }
      }}
    >
      <TechIcon name={tech} />
    </motion.div>
  ))}
</motion.div>

allTechs = ['React', 'TypeScript', 'Node.js', 'Docker', 'PostgreSQL', 'GitHub', 
             'Tailwind CSS', 'Vite', 'Express', 'Linux', 'Nginx', 'Discord',
             'Git', 'SQLite', 'HTML', 'CSS']
```

---

### Étape 3.8 — Cards Méthodologie

### Prompt Cursor :

```
Dans Skills, ajoute une section méthodologie avec 3 cards :

<div className="grid md:grid-cols-3 gap-6 mt-16">
  
  Card 1 - Documentation :
  Icône : BookOpen (violet)
  Titre : "Documentation"
  Contenu : skillsData.methodologie.Documentation
  
  Card 2 - Versioning :
  Icône : GitBranch (cyan)
  Titre : "Versioning"
  Contenu : skillsData.methodologie['Versioning/Git']
  
  Card 3 - Déploiement :
  Icône : Rocket (violet)
  Titre : "Déploiement"
  Contenu : skillsData.methodologie.CI_CD ou similaire

</div>

Style card : glassmorphism, border subtil, icône dans badge coloré en haut, titre font-display, contenu text-secondary text-sm
```

---

## ✅ Checklist de fin de Phase 3

- [ ] Section About avec timeline parcours animée
- [ ] Card "En bref" avec infos rapides + icônes
- [ ] Card "Objectifs"
- [ ] Section Skills avec 4 cards catégories
- [ ] TechIcon avec icônes react-icons
- [ ] Tech Wall animé (stagger)
- [ ] Cards Méthodologie
- [ ] Labels "// 01 À PROPOS" et "// 02 COMPÉTENCES"
- [ ] Animations au scroll (FadeIn, viewport)
- [ ] Responsive sur mobile

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-4-PROJETS.md` et commence la Phase 4.
