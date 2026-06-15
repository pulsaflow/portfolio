export interface Project {
  nom: string
  type: string
  description: string
  descriptionLongue: string
  stack: string[]
  repo?: string
  site?: string
  featured: boolean
  image?: string
  tags: string[]
  statut: 'production' | 'beta' | 'wip' | 'archive'
  stats?: { label: string; value: string }[]
}

export const projectsData: Project[] = [
  {
    nom: 'PulsaBot',
    type: 'Bot Discord musical + dashboard web',
    description:
      'Bot Discord musical moderne avec dashboard React, modules communautaires et déploiement CI/CD.',
    descriptionLongue:
      'Bot Discord musical moderne alimenté par Lavalink. Support Spotify, Deezer, SoundCloud (sans YouTube). Dashboard React pour la configuration serveur, playlists, player en temps réel, stats. Modules communautaires : niveaux/XP, bienvenue/départs, anniversaires, giveaways, tickets, modération, salons vocaux temporaires, rôles-réactions.',
    stack: [
      'Node.js',
      'discord.js',
      'Lavalink',
      'Express',
      'React 19',
      'TypeScript',
      'Vite',
      'SQLite',
      'Docker',
      'GitHub Actions',
    ],
    repo: 'https://github.com/gabrielrevest/PulsaBot',
    site: 'https://pulsabot.com',
    featured: true,
    image: '/images/projects/pulsabot.svg',
    tags: ['full-stack', 'react', 'node', 'discord', 'docker'],
    statut: 'production',
    stats: [
      { label: 'Modules', value: '10+' },
      { label: 'Technos', value: '12' },
      { label: 'Version', value: '2.1' },
    ],
  },
  {
    nom: 'Admin Analytics Dashboard',
    type: 'Dashboard analytics',
    description:
      'Dashboard d’analyse avec graphiques temps réel, filtres avancés et exports CSV pour le suivi business.',
    descriptionLongue:
      'Application dashboard orientée pilotage avec architecture React + API Node, visualisations, recherche rapide et widgets configurables. Focus sur performance, UX et modularité.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Chart.js', 'SQLite'],
    repo: 'https://github.com/gabrielrevest',
    featured: false,
    image: '/images/projects/dashboard.svg',
    tags: ['react', 'dashboard', 'full-stack', 'analytics'],
    statut: 'beta',
    stats: [
      { label: 'Widgets', value: '20+' },
      { label: 'Pages', value: '8' },
      { label: 'API routes', value: '25' },
    ],
  },
  {
    nom: 'DevOps Starter Boilerplate',
    type: 'Starter full-stack',
    description:
      'Boilerplate de démarrage pour projets full-stack avec Docker, CI/CD GitHub Actions et conventions de code.',
    descriptionLongue:
      'Template orienté productivité avec scripts de build, pipeline de tests, quality gates et déploiement continu. Conçu pour accélérer les lancements de projets en production.',
    stack: ['Node.js', 'Docker', 'GitHub Actions', 'Nginx', 'TypeScript'],
    repo: 'https://github.com/gabrielrevest',
    featured: false,
    image: '/images/projects/devops.svg',
    tags: ['devops', 'docker', 'ci-cd', 'node'],
    statut: 'wip',
    stats: [
      { label: 'Pipelines', value: '5' },
      { label: 'Services', value: '3' },
      { label: 'Setup', value: '<10 min' },
    ],
  },
  {
    nom: 'Legacy Community Bot',
    type: 'Bot Discord utilitaire',
    description:
      "Ancien bot de modération et utilitaires, désormais remplacé par l'architecture PulsaBot.",
    descriptionLongue:
      "Première itération d'un bot communautaire utilisé pour expérimenter l'architecture commandes/events avant migration vers une base plus robuste.",
    stack: ['Node.js', 'discord.js', 'SQLite'],
    repo: 'https://github.com/gabrielrevest',
    featured: false,
    tags: ['discord', 'node', 'archive'],
    statut: 'archive',
  },
]
