# PHASE 11 — Hardening Sécurité

> **Durée estimée** : 3h  
> **Prérequis** : Phase 10 terminée ✅  
> **Prochaine phase** : `PHASE-12-TESTS.md`

---

## 🎯 Objectif

Renforcer la sécurité globale du portfolio (frontend, CI/CD, dépendances, secrets, headers HTTP) avec une checklist pragmatique et vérifiable.

---

## 🔐 Étape 11.1 — Headers HTTP de sécurité

### Prompt Cursor :

```
Ajoute une configuration de headers HTTP de sécurité pour le déploiement statique :

- Content-Security-Policy (CSP) restrictive adaptée au projet
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy minimale
- Strict-Transport-Security (HSTS) côté domaine prod (si géré par plateforme/proxy)

Si le provider ne supporte pas directement les headers, documente la configuration
dans README ou dans les settings du provider.
```

---

## 🧪 Étape 11.2 — Audit dépendances

### Prompt Cursor :

```
Lance et documente :
- npm audit --production
- npm outdated

Corrige les vulnérabilités critiques/hautes sans casser l'app.
Si une MAJ majeure est risquée, documente le risque et la mitigation.
```

---

## 🔎 Étape 11.3 — Scans sécurité en CI

### Prompt Cursor :

```
Ajoute au workflow GitHub Actions :

1) scan vulnérabilités dépendances (npm audit)
2) scan secrets (gitleaks)
3) scan SAST (CodeQL JavaScript/TypeScript)

Le pipeline doit échouer sur vulnérabilités critiques et secrets détectés.
```

---

## 🧰 Étape 11.4 — Gestion des secrets

### Prompt Cursor :

```
Vérifie .gitignore, .env.example et les usages import.meta.env.

Règles :
- Aucun secret réel en dur dans le code
- Variables attendues documentées dans .env.example
- Fallbacks non sensibles uniquement
- Logs ne doivent jamais exposer de secrets
```

---

## 🛡️ Étape 11.5 — Surfaces d'attaque front

### Prompt Cursor :

```
Passe en revue les points suivants :
- target="_blank" => rel="noopener noreferrer"
- Pas d'usage de dangerouslySetInnerHTML non maîtrisé
- Validation des entrées formulaire (longueur, format email)
- Limiter les liens externes et vérifier qu'ils sont explicites
- Désactiver toute source inline inutile pour CSP
```

---

## ✅ Checklist de fin de Phase 11

- [ ] Headers HTTP de sécurité définis
- [ ] Audit dépendances exécuté et traité
- [ ] CodeQL + audit + scan secrets en CI
- [ ] Aucune clé/secrets exposés
- [ ] Vérifications front (noopener, validation, CSP) OK
- [ ] Documentation sécurité ajoutée

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-12-TESTS.md` et commence la Phase 12.
