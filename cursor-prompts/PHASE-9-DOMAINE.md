# PHASE 9 — Domaine & DNS (revestaweb.tech)

> **Durée estimée** : 1h (+ 24-48h de propagation DNS)
> **Prérequis** : Phase 8 terminée ✅, site déployé sur DigitalOcean
> **Prochaine phase** : `PHASE-10-MAINTENANCE.md`

---

## 🎯 Objectif

Connecter ton domaine `revestaweb.tech` au déploiement DigitalOcean, activer le HTTPS sur le domaine custom, et configurer l'email professionnel.

---

## 🌐 Étape 9.1 — Où est ton domaine ?

```
Identifie chez quel registrar tu as acheté revestaweb.tech :

□ Namecheap → https://ap.www.namecheap.com → Domain List
□ OVH → https://www.ovh.com → Domaines
□ Infomaniak → https://www.infomaniak.com
□ Porkbun → https://porkbun.com
□ GoDaddy → https://www.godaddy.com
□ Autre ?

→ Note le registrar, les étapes DNS seront dans son interface.
```

---

## 📡 Étape 9.2 — Ajouter le domaine sur DigitalOcean

```
1. Dans DigitalOcean App Platform → ton App
2. Onglet "Settings"
3. Section "Domains"
4. Clique "Add Domain"
5. Entre : revestaweb.tech
6. DigitalOcean te donnera soit :
   
   Option A — Enregistrement CNAME (recommandé pour sous-domaine) :
   Type  : CNAME
   Nom   : www
   Valeur: ton-app.ondigitalocean.app
   
   Option B — Enregistrement ALIAS/ANAME (pour le domaine racine) :
   Type  : A
   Nom   : @
   Valeur: [IP fournie par DigitalOcean, ex: 164.92.123.45]
   
   OU si DigitalOcean supporte le CNAME sur racine :
   Type  : CNAME  
   Nom   : @
   Valeur: ton-app.ondigitalocean.app

7. DigitalOcean gère le certificat SSL automatiquement après vérification
```

---

## ⚙️ Étape 9.3 — Configurer les DNS chez ton registrar

### Si Namecheap :
```
1. Namecheap → Domain List → Gérer revestaweb.tech
2. Onglet "Advanced DNS"
3. Supprime les enregistrements A existants (parking)
4. Ajoute :

   Pour le domaine racine (@) :
   Type   : A Record
   Host   : @
   Value  : [IP DigitalOcean fournie]
   TTL    : Automatic (300s)
   
   Pour www :
   Type   : CNAME Record
   Host   : www
   Value  : ton-app.ondigitalocean.app.
   TTL    : Automatic
   
5. Sauvegarde → Propagation : 15min à 48h

Vérifie la propagation sur : https://dnschecker.org/#A/revestaweb.tech
```

### Si OVH :
```
1. OVH Manager → Domaines → revestaweb.tech
2. Zone DNS
3. Modifie/Ajoute les enregistrements comme ci-dessus
4. Validation → 24-48h maximum
```

---

## 🔒 Étape 9.4 — HTTPS sur domaine custom

```
DigitalOcean App Platform gère automatiquement le certificat SSL pour ton domaine custom :

1. Après avoir ajouté le domaine ET configuré les DNS :
2. Attends la propagation DNS (dnschecker.org)
3. DigitalOcean génère automatiquement un certificat Let's Encrypt
4. Délai : généralement 5-30 minutes après propagation DNS

Vérifie dans App Platform :
→ Settings → Domains → revestaweb.tech → ✅ "Certificate issued"
→ Le cadenas vert doit apparaître sur https://revestaweb.tech

Si le certificat ne se génère pas après 1h :
→ Vérifie que les DNS pointent bien vers DigitalOcean
→ Sur dnschecker.org : A record de revestaweb.tech = IP DigitalOcean
→ Relance la vérification dans App Platform
```

---

## 📧 Étape 9.5 — Email professionnel (Optionnel mais pro)

```
Pour avoir une adresse gabriel@revestaweb.tech ou contact@revestaweb.tech :

Option A — Cloudflare Email Routing (GRATUIT)
1. Transfère la gestion DNS vers Cloudflare (gratuit)
   → Va sur cloudflare.com → Add site → revestaweb.tech
   → Cloudflare te donnera 2 nameservers à configurer chez ton registrar
   → Remplace les nameservers actuels par les nameservers Cloudflare
   
2. Dans Cloudflare → Email → Email Routing
3. Crée une règle :
   De : contact@revestaweb.tech → Vers : ton@gmail.com
   De : gabriel@revestaweb.tech → Vers : ton@gmail.com
4. Gratuit, illimité en réception

Option B — Zoho Mail (GRATUIT 5GB)
1. https://www.zoho.com/mail/
2. Plan Gratuit → Add Domain → revestaweb.tech
3. Zoho te donnera des enregistrements MX à ajouter en DNS
4. Crée gabriel@revestaweb.tech
5. Interface webmail incluse

Option C — Forwardemail.net (GRATUIT, open-source)
1. https://forwardemail.net
2. Gratuit pour la redirection d'emails
3. Ajoute les MX records dans ton DNS
```

---

## 🔀 Étape 9.6 — Redirection www → sans www (ou inverse)

### Prompt Cursor :

```
Dans DigitalOcean App Platform → Settings → Domains :
Configure la redirection :
→ www.revestaweb.tech → revestaweb.tech (301 redirect)

OU mets à jour le code :
Dans index.html, canonical doit pointer vers la version canonique :
<link rel="canonical" href="https://revestaweb.tech" />

Assure-toi que le meta OG:URL pointe aussi vers la bonne URL :
<meta property="og:url" content="https://revestaweb.tech" />
```

---

## ✅ Étape 9.7 — Tests finaux

```
Checklist de vérification domaine :

□ https://revestaweb.tech → charge le portfolio ✅
□ https://www.revestaweb.tech → redirige vers revestaweb.tech ✅
□ Cadenas HTTPS vert dans le navigateur ✅
□ Certificat SSL valide (clic sur cadenas → details) ✅
□ Google Search Console : soumets ton URL
  → https://search.google.com/search-console
  → Ajoute revestaweb.tech → Vérifie via meta tag ou DNS
  → Soumets ton sitemap : revestaweb.tech/sitemap.xml
□ Test Open Graph : https://opengraph.xyz/url/https://revestaweb.tech
□ Test SEO : https://www.seobility.net/en/seocheck/
□ Test performance finale : https://pagespeed.web.dev/?url=https://revestaweb.tech
```

---

## 🎉 Étape 9.8 — Partage et visibilité

```
Maintenant que le portfolio est en ligne :

1. Met à jour ton profil GitHub :
   → github.com/TON_USERNAME → Edit profile
   → Website : https://revestaweb.tech

2. Met à jour LinkedIn :
   → Profile → Contact info → Website : revestaweb.tech

3. Ajoute à ta signature email :
   Gabriel Revest | Développeur Full-Stack
   🌐 revestaweb.tech | 💼 linkedin.com/in/ton-profil

4. Partage sur LinkedIn avec un post :
   "Mon nouveau portfolio est en ligne ! Développeur full-stack React/Node.js,
   disponible pour CDI et missions freelance. [revestaweb.tech] 🚀"
```

---

## ✅ Checklist de fin de Phase 9

- [ ] Domaine ajouté dans App Platform
- [ ] DNS configurés chez le registrar
- [ ] Propagation DNS vérifiée (dnschecker.org)
- [ ] HTTPS actif sur revestaweb.tech
- [ ] Redirection www → sans www
- [ ] Site accessible et rapide sur le domaine final
- [ ] Google Search Console configuré
- [ ] Sitemap soumis
- [ ] Profil GitHub mis à jour
- [ ] LinkedIn mis à jour

## ➡️ Prochaine étape

Ouvre `cursor-prompts/PHASE-10-MAINTENANCE.md` pour les tâches continues.

---

## 🎊 Félicitations !

**Ton portfolio revestaweb.tech est en ligne !**

Stack finale :
- ⚡ React 19 + Vite + TypeScript
- 🎨 Tailwind CSS + Framer Motion
- 🌊 Animations smooth + Glassmorphism
- 🖱️ Curseur custom + Spotlight
- 📧 Formulaire Formspree
- 🚀 DigitalOcean App Platform
- 🔒 HTTPS automatique
- 🌐 revestaweb.tech
