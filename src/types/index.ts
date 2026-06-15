export interface ProjectStat {
  label: string
  value: string
}

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
  stats?: ProjectStat[]
}

