# Projets

## PulsaBot — Projet phare

| Champ | Valeur |
|-------|--------|
| **Nom** | PulsaBot |
| **Type** | Bot Discord musical + dashboard web |
| **Repo** | [github.com/gabrielrevest/PulsaBot](https://github.com/gabrielrevest/PulsaBot) |
| **Site** | [pulsabot.com](https://pulsabot.com) |
| **Version** | 2.1.0 |

### Stack

Node.js, discord.js, Lavalink, Express, React 19, TypeScript, Vite, SQLite (better-sqlite3), Docker, GitHub Actions.

### Description

Bot Discord musical moderne alimenté par Lavalink. Support Spotify, Deezer, SoundCloud (sans YouTube). Dashboard React pour la configuration serveur, playlists, player en temps réel, stats. Modules communautaires : niveaux/XP, bienvenue/départs, anniversaires, giveaways, tickets, modération, salons vocaux temporaires, rôles-réactions.

### Fonctionnalités marquantes

- **Musique** : File d'attente, playlists, sons similaires (Spotify/Deezer), mode 24/7
- **Dashboard** : OAuth Discord, config par serveur, player, playlists, stats, thème clair/sombre
- **Modules** : Niveaux, giveaways, sondages, tickets, rôles-réactions, modération
- **Déploiement** : Docker Compose, GitHub Actions (SSH), CI/CD automatisé

### Architecture

```
PulsaBot/
├── src/           # Bot (commands, api, database, utils)
├── dashboard/     # SPA React (Vite)
├── data/          # SQLite
├── docker-compose.yml
└── .github/workflows/deploy.yml
```

---

## Autres projets

### [Nom du projet 2]

| Champ | Valeur |
|-------|--------|
| **Type** | [ex. API, site web, outil CLI] |
| **Lien** | [URL ou repo] |
| **Stack** | [Technos] |

**Description** : [2–4 phrases sur le projet, ton rôle, les résultats.]

**Points clés** : [ex. Architecture, déploiement, métriques]

---

### [Nom du projet 3]

| Champ | Valeur |
|-------|--------|
| **Type** | [Type] |
| **Lien** | [URL] |
| **Stack** | [Technos] |

**Description** : [2–4 phrases]

---

## Template pour ajouter un projet

```markdown
### [Nom]

| Champ | Valeur |
|-------|--------|
| **Type** | [Type] |
| **Lien** | [URL] |
| **Stack** | [Technos] |

**Description** : [Courte description]

**Points clés** : [Fonctionnalités, architecture, impact]
```
