# PHASE 12 — Tests complets (unitaires + sécurité + E2E)

> **Durée estimée** : 5h  
> **Prérequis** : Phase 11 terminée ✅  
> **Prochaine phase** : Maintien continu

---

## 🎯 Objectif

Mettre en place une stratégie de tests complète : unitaires, intégration, accessibilité/sécurité, et E2E pour couvrir les parcours critiques du portfolio.

---

## 🧪 Étape 12.1 — Setup tests unitaires/intégration

### Prompt Cursor :

```
Installe et configure :
- vitest
- @testing-library/react
- @testing-library/user-event
- @testing-library/jest-dom
- jsdom

Ajoute :
- fichier de setup tests
- scripts npm : test, test:watch, test:coverage
- config de couverture (seuils minimaux)
```

---

## 🧩 Étape 12.2 — Couverture composants critiques

### Prompt Cursor :

```
Crée des tests pour :
- Navbar (liens + état actif)
- Hero (render du titre, boutons CTA)
- Projects (filtres, ouverture/fermeture modale)
- Contact (validation formulaire)

Vérifie les cas nominaux + cas d'erreur.
```

---

## ♿ Étape 12.3 — Tests accessibilité

### Prompt Cursor :

```
Ajoute jest-axe et crée des tests d'accessibilité :
- App globalement
- Navbar
- Formulaire contact

Objectif : zéro violation critique sur les composants principaux.
```

---

## 🔐 Étape 12.4 — Tests sécurité ciblés

### Prompt Cursor :

```
Ajoute des tests automatisés qui vérifient :
- présence des rel="noopener noreferrer" sur liens externes
- absence de rendu HTML non sûr
- validation stricte du formulaire (email/message)
- conformité des headers de sécurité exposés (si testables)
```

---

## 🌐 Étape 12.5 — Tests E2E Playwright

### Prompt Cursor :

```
Installe Playwright et ajoute des scénarios E2E :

1) Chargement homepage + sections visibles
2) Navigation ancres (hero -> about -> projects -> contact)
3) Interaction filtres projets + modale
4) Envoi formulaire (mocké)
5) Responsive mobile (menu burger)

Ajoute les scripts npm :
- test:e2e
- test:e2e:ui
```

---

## 🔁 Étape 12.6 — Exécution CI

### Prompt Cursor :

```
Mets à jour GitHub Actions pour exécuter :
1) tests unitaires + couverture
2) tests sécurité
3) tests E2E headless

Le pipeline doit échouer en cas d'échec test.
Publie la couverture en artifact.
```

---

## ✅ Checklist de fin de Phase 12

- [ ] Vitest + Testing Library configurés
- [ ] Tests unitaires/intégration sur composants critiques
- [ ] Tests accessibilité (jest-axe) en place
- [ ] Tests sécurité automatisés en place
- [ ] Playwright E2E opérationnel
- [ ] CI exécute la suite complète
- [ ] Couverture et rapport disponibles
