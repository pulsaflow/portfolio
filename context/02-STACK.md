# Stack technique

## Vue d'ensemble

| Domaine | Technologies principales |
|---------|--------------------------|
| **Backend** | Node.js, Express, better-sqlite3 |
| **Frontend** | React 19, TypeScript, Vite 7 |
| **Discord** | discord.js 14, Lavalink |
| **DevOps** | Docker, GitHub Actions |

---

## Backend (Node.js)

| Technologie | Version | Usage |
|-------------|---------|-------|
| Node.js | >=22.16 | Runtime |
| Express | ^5.2 | API REST, serveur dashboard |
| better-sqlite3 | ^11.7 | Base de données (config, playlists, stats) |
| discord.js | ^14.25 | Bot Discord, slash commands |
| lavalink-client | ^2.7 | Streaming audio |
| zod | ^4.3 | Validation des requêtes API |
| chart.js / chartjs-node-canvas | ^4.5 / ^5.0 | Génération de graphiques (niveaux, stats) |

---

## Frontend (React)

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | ^19.2 | UI |
| TypeScript | ~5.9 | Typage |
| Vite | ^7.3 | Build, dev server |
| react-router-dom | ^7.13 | Routing |
| @tanstack/react-query | ^5.90 | Cache, requêtes API |
| lucide-react | ^0.563 | Icônes |
| recharts | ^3.7 | Graphiques (stats, niveaux) |
| fuse.js | ^7.1 | Recherche floue |
| @dnd-kit/* | ^6–10 | Drag & drop (playlists, queue) |

---

## DevOps & Outils

| Outil | Usage |
|-------|-------|
| Docker | Conteneurisation (bot + Lavalink) |
| docker-compose | Orchestration multi-conteneurs |
| GitHub Actions | CI/CD, déploiement SSH |
| Git | Versioning, conventions de commit |

---

## Versions clés (PulsaBot)

```json
{
  "node": ">=22.16.0",
  "npm": ">=11.4.2",
  "discord.js": "^14.25.1",
  "react": "^19.2.4",
  "vite": "^7.3.1",
  "typescript": "~5.9.3"
}
```
