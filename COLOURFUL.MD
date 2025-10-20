 # 🏗️ Documentation du Site Vitrine – **[Nom de l’entreprise]**

## 1. 🎯 Objectif du site

Présenter de manière claire, esthétique et crédible l’unité de production et la gamme de produits (tôles, tubes, grilles, crochets, vis, fers d’attache, etc.), afin d’attirer clients, distributeurs et partenaires sans gestion dynamique du contenu.

---

## 2. 🧱 Architecture du site

### 🌐 Pages principales

1. **Accueil (index.html)**

   * Bannière principale avec slogan & image d’usine / métal
   * Section “À propos” résumée
   * Aperçu des produits (3-6 cartes avec lien vers page Produits)
   * Appel à l’action (“Demandez un devis”, “Contactez-nous”)

2. **À propos (about.html)**

   * Présentation de l’entreprise : historique, valeurs, expertise
   * Photo de l’usine / équipe
   * Mission & vision

3. **Produits (products.html)**

   * Liste organisée par catégories :

     * Tôles
     * Tubes & Profilés
     * Grilles & Crochets
     * Vis & Attaches
   * Chaque produit : image, nom, description, caractéristiques techniques (ex : épaisseur, dimensions, matière)
   * Grille responsive (3 colonnes desktop / 2 tablette / 1 mobile)

4. **Galerie (gallery.html)**

   * Photos de la production, de l’usine, et des projets clients
   * Lightbox pour agrandir les images
   * Disposition en Masonry Grid

5. **Contact (contact.html)**

   * Formulaire statique (Nom, Email, Message) → service externe type Formspree / Netlify Forms
   * Coordonnées : adresse, téléphone, email
   * Google Maps intégré
   * Horaires d’ouverture

6. *(optionnel)* **Devis (quote.html)**

   * Petit formulaire pour demander un devis avec champ de sélection du produit

---

## 3. 🎨 Identité visuelle

### Palette de couleurs

| Élément           | Couleur         | Code Hex  |
| ----------------- | --------------- | --------- |
| Fond principal    | Gris anthracite | `#2C3E50` |
| Accent principal  | Bleu industriel | `#3498DB` |
| Accent secondaire | Orange rouille  | `#E74C3C` |
| Texte principal   | Blanc cassé     | `#ECF0F1` |
| Texte secondaire  | Gris clair      | `#BDC3C7` |

### Typographie

* **Titres (H1–H4)** : `Montserrat`, bold

  * H1 : 48px
  * H2 : 32px
  * H3 : 24px
* **Texte** : `Open Sans`, regular, 16px, line-height: 1.6

### Style général

* **Design industriel-chic** : textures métalliques discrètes, ombres douces.
* **Ombres portées** :

  ```css
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  ```
* **Transitions fluides sur hover** :

  ```css
  transition: all 0.3s ease;
  ```
* **Bordures et coins** : radius doux (8px–12px)
* **Espacement** : padding généreux (min 2rem)

---

## 4. 🧩 Structure technique

### Stack

* **HTML5** + **CSS3** (Flexbox & CSS Grid)
* **JavaScript** (vanilla) pour les interactions de base (menu, lightbox, animations)
* **Aucun backend** : site entièrement statique
* Hébergement possible sur :

  * GitHub Pages / Netlify / Vercel / OVH

### Arborescence des fichiers

```
/ (racine du projet)
│
├── index.html
├── about.html
├── products.html
├── gallery.html
├── contact.html
├── quote.html
│
├── /assets
│   ├── /images (photos produits, usine, etc.)
│   ├── /icons
│   └── /fonts
│
├── /css
│   ├── style.css
│   └── responsive.css
│
└── /js
    ├── main.js
    └── lightbox.js
```

---

## 5. 📱 Responsive Design

### Mobile-first

* **Navigation hamburger**
* **Grille produit** :

  * 1 colonne sur mobile
  * 2 colonnes sur tablette
  * 3–4 colonnes sur desktop
* **Images adaptatives** : `max-width: 100%; height: auto;`

### Breakpoints recommandés

```css
@media (max-width: 768px) { ... }  /* Tablette */
@media (max-width: 480px) { ... }  /* Mobile */
```

---

## 6. ✨ Interactions & Effets

* **Hover sur les cartes produits** : zoom léger + ombre renforcée

  ```css
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.15);
  }
  ```
* **Boutons** : couleurs dynamiques

  ```css
  .btn {
    background-color: #3498DB;
    color: white;
    border-radius: 8px;
    transition: background 0.3s ease;
  }
  .btn:hover {
    background-color: #E74C3C;
  }
  ```
* **Animation d’entrée (scroll reveal)** avec `IntersectionObserver` ou `AOS.js`

---

## 7. 🧾 Contenu à préparer

* **Logo vectoriel** (SVG si possible)
* **Slogan / phrase d’accroche**
* **Photos haute qualité** des produits et de l’usine
* **Texte de présentation de l’entreprise**
* **Descriptions produits**
* **Coordonnées (adresse, email, téléphone, horaires)**

---

## 8. 📈 Évolutivité

Même si le site est statique :

* Possibilité d’ajouter un blog futur via Markdown + générateur statique (Hugo, Astro ou Jekyll)
* Intégration d’un mini back-office plus tard (Strapi, Sanity, ou Notion API)

---
 