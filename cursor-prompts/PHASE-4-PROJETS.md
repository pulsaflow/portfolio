# PHASE 4 — Section Projets

> **Durée estimée** : 3h
> **Prérequis** : Phase 3 terminée ✅
> **Prochaine phase** : `PHASE-5-CONTACT.md`

---

## 🎯 Objectif

Créer une section Projets premium avec des cartes interactives, des modales de détail, des filtres par technologie, et des screenshots.

---

## 🗂️ Étape 4.1 — Mettre à jour les données projets

### Prompt Cursor :

```
Ouvre src/data/projects.ts et assure-toi que la structure est complète.

Type Project :
interface Project {
  nom: string
  type: string
  description: string
  descriptionLongue: string
  stack: string[]
  repo?: string
  site?: string
  featured: boolean
  image?: string    // chemin vers /public/images/projects/xxx.jpg
  tags: string[]    // pour le filtre
  statut: 'production' | 'beta' | 'wip' | 'archive'
  stats?: { label: string, value: string }[]
}

Assure-toi que chaque projet a tous ces champs (utilise les données existantes et complète).
Ajoute un champ featured: true pour le projet principal (PulsaBot).
```

---

## 🃏 Étape 4.2 — Projet Featured (mise en avant)

### Prompt Cursor :

```
Dans src/components/sections/Projects.tsx, crée d'abord une card featured pour le projet principal.

Structure d'une featured card :
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative rounded-3xl overflow-hidden border border-violet-500/20 mb-16"
>
  {/* Layout 2 colonnes */}
  <div className="grid lg:grid-cols-2 gap-0">
    
    {/* Colonne image */}
    <div className="relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-violet-900/50 to-cyan-900/50">
      <img src={project.image} alt={project.nom} className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50" />
    </div>
    
    {/* Colonne contenu */}
    <div className="p-8 lg:p-12 glass">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs font-mono">
          ⭐ Projet phare
        </span>
        <StatusBadge statut={project.statut} />
      </div>
      
      <h3 className="font-display text-3xl font-bold text-white mb-3">{project.nom}</h3>
      <p className="text-text-secondary mb-6">{project.descriptionLongue}</p>
      
      {/* Stats du projet */}
      {project.stats && (
        <div className="flex gap-6 mb-6">
          {project.stats.map(stat => (
            <div key={stat.label}>
              <div className="text-xl font-bold text-gradient">{stat.value}</div>
              <div className="text-text-muted text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      
      {/* Stack badges */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map(tech => <Badge key={tech} label={tech} variant="violet" />)}
      </div>
      
      {/* Liens */}
      <div className="flex gap-4">
        {project.repo && <Button variant="outline" href={project.repo} target="_blank"><Github /> Code</Button>}
        {project.site && <Button variant="primary" href={project.site} target="_blank"><ExternalLink /> Voir le site</Button>}
      </div>
    </div>
    
  </div>
</motion.div>
```

---

## 🏷️ Étape 4.3 — Badge de statut

### Prompt Cursor :

```
Crée un composant StatusBadge.tsx dans src/components/ui/ :

Props : statut: 'production' | 'beta' | 'wip' | 'archive'

Rendu :
const config = {
  production: { label: 'En production', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  beta: { label: 'Beta', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  wip: { label: 'En cours', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  archive: { label: 'Archivé', color: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30' },
}

<span className={`px-2 py-1 rounded-md border text-xs font-mono ${config[statut].color}`}>
  <span className="w-1.5 h-1.5 rounded-full bg-current inline-block mr-1.5 animate-pulse" />
  {config[statut].label}
</span>
```

---

## 🔽 Étape 4.4 — Filtre par technologie

### Prompt Cursor :

```
Dans Projects, ajoute un système de filtre avant la grille de projets :

State : const [activeFilter, setActiveFilter] = useState<string>('tous')

Génère les filtres dynamiquement depuis les tags des projets :
const filters = ['tous', ...new Set(projectsData.flatMap(p => p.tags))]

Rendu des filtres :
<div className="flex flex-wrap gap-3 mb-12">
  {filters.map(filter => (
    <button
      key={filter}
      onClick={() => setActiveFilter(filter)}
      className={cn(
        'px-4 py-2 rounded-xl text-sm font-medium transition-all',
        activeFilter === filter
          ? 'bg-violet-600 text-white shadow-violet'
          : 'glass text-text-secondary hover:text-white hover:border-violet-500/30 border border-white/10'
      )}
    >
      {filter}
    </button>
  ))}
</div>

Filtre les projets :
const filtered = activeFilter === 'tous' 
  ? projectsData.filter(p => !p.featured)
  : projectsData.filter(p => !p.featured && p.tags.includes(activeFilter))

Anime le changement de filtre avec AnimatePresence de Framer Motion.
```

---

## 🃏 Étape 4.5 — Grille de cartes projets

### Prompt Cursor :

```
Crée la grille de projets avec AnimatePresence pour les filtres :

<AnimatePresence mode="wait">
  <motion.div
    key={activeFilter}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {filtered.map((project, i) => (
      <ProjectCard key={project.nom} project={project} index={i} onClick={() => setSelectedProject(project)} />
    ))}
  </motion.div>
</AnimatePresence>

Composant ProjectCard :
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ y: -8 }}
  className="glass rounded-2xl overflow-hidden border border-white/8 hover:border-violet-500/30 cursor-pointer group transition-all"
  onClick={onClick}
>
  {/* Image du projet */}
  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-900/30 to-surface-2">
    {project.image 
      ? <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      : <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gradient opacity-20">{project.nom[0]}</div>
    }
    <div className="absolute top-3 right-3">
      <StatusBadge statut={project.statut} />
    </div>
  </div>
  
  {/* Contenu */}
  <div className="p-6">
    <h3 className="font-display font-semibold text-white mb-1">{project.nom}</h3>
    <p className="text-violet-400 text-xs font-mono mb-3">{project.type}</p>
    <p className="text-text-secondary text-sm line-clamp-2 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.stack.slice(0, 4).map(tech => <Badge key={tech} label={tech} />)}
      {project.stack.length > 4 && <Badge label={`+${project.stack.length - 4}`} />}
    </div>
    <div className="flex items-center justify-between text-text-muted text-sm">
      <span className="flex items-center gap-1">
        <Eye className="w-3.5 h-3.5" />
        Voir détails
      </span>
      <div className="flex gap-3">
        {project.repo && <Github className="w-4 h-4 hover:text-white transition-colors" />}
        {project.site && <ExternalLink className="w-4 h-4 hover:text-white transition-colors" />}
      </div>
    </div>
  </div>
</motion.div>
```

---

## 📋 Étape 4.6 — Modale de détail projet

### Prompt Cursor :

```
Crée un composant ProjectModal.tsx dans src/components/ui/ :

Props : project: Project | null, onClose: () => void

Utilise AnimatePresence + motion.div pour l'animation d'entrée/sortie.

Structure :
{/* Overlay */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  onClick={onClose}
>
  {/* Modal */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, y: 20 }}
    className="bg-surface rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
    onClick={e => e.stopPropagation()}
  >
    {/* Header image */}
    <div className="relative h-56 overflow-hidden rounded-t-3xl">
      <img src={project.image} className="w-full h-full object-cover" />
      <button onClick={onClose} className="absolute top-4 right-4 glass rounded-xl p-2">
        <X className="w-5 h-5" />
      </button>
    </div>
    
    {/* Contenu */}
    <div className="p-8">
      <StatusBadge statut={project.statut} />
      <h2 className="font-display text-2xl font-bold text-white mt-3 mb-2">{project.nom}</h2>
      <p className="text-text-secondary mb-6">{project.descriptionLongue}</p>
      
      {project.stats && (
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-surface-2">
          {project.stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-lg font-bold text-gradient">{stat.value}</div>
              <div className="text-text-muted text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      
      <h4 className="font-semibold text-white mb-3">Stack technique</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map(tech => <Badge key={tech} label={tech} variant="violet" />)}
      </div>
      
      <div className="flex gap-3">
        {project.repo && <Button variant="outline" href={project.repo} target="_blank"><Github /> Code source</Button>}
        {project.site && <Button variant="primary" href={project.site} target="_blank"><ExternalLink /> Voir en ligne</Button>}
      </div>
    </div>
  </motion.div>
</motion.div>

Dans Projects.tsx :
const [selectedProject, setSelectedProject] = useState<Project | null>(null)
...
<AnimatePresence>
  {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
</AnimatePresence>
```

---

## ✅ Checklist de fin de Phase 4

- [ ] Featured card (projet principal) avec image et stats
- [ ] StatusBadge fonctionnel
- [ ] Filtres par technologie avec animation
- [ ] Grille de cartes projets avec hover
- [ ] Modale de détail avec animation
- [ ] AnimatePresence sur filtre et modale
- [ ] Label "// 03 PROJETS"
- [ ] Responsive mobile

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-5-CONTACT.md` et commence la Phase 5.
