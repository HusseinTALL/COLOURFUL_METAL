# Métal Industries - Site Vitrine

Site vitrine statique moderne pour une unité de production de matériaux de construction métalliques, construit avec Vue 3, TypeScript, et Tailwind CSS.

## Table des matières

- [Aperçu](#aperçu)
- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Développement](#développement)
- [Tests](#tests)
- [Build et Déploiement](#build-et-déploiement)
- [Structure du projet](#structure-du-projet)
- [Configuration](#configuration)
- [Contribution](#contribution)

## Aperçu

Ce site vitrine présente les produits et services d'une entreprise de fabrication de matériaux métalliques. Il comprend :

- **6 pages principales** : Accueil, À propos, Produits, Galerie, Contact, Devis
- **Design industriel-chic** avec palette de couleurs métalliques
- **Responsive design** (mobile-first)
- **Galerie photo** avec lightbox
- **Formulaires de contact** intégrés avec Formspree
- **Navigation fluide** avec Vue Router
- **TypeScript strict** pour la robustesse du code

## Technologies

### Stack Principal
- **Vue 3** (Composition API) - Framework JavaScript progressif
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Vue Router** - Routing côté client
- **Vite** - Build tool et dev server ultra-rapide

### Développement
- **ESLint** - Linting JavaScript/TypeScript
- **Prettier** - Formatage de code
- **Vitest** - Tests unitaires
- **Vue Test Utils** - Utilitaires de test pour Vue

## Prérequis

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0 (ou yarn/pnpm)
- Un éditeur de code (VS Code recommandé avec les extensions Vue)

## Installation

1. **Cloner le repository**
   ```bash
   git clone <url-du-repo>
   cd metal-vitrine
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** (optionnel)

   Créez un fichier `.env` à la racine du projet :
   ```env
   VITE_FORMSPREE_CONTACT_ID=your_contact_form_id
   VITE_FORMSPREE_QUOTE_ID=your_quote_form_id
   ```

## Développement

### Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Scripts disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Démarrer le serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build de production |
| `npm run lint` | Linter le code (auto-fix) |
| `npm run format` | Formater le code avec Prettier |
| `npm run test` | Lancer les tests unitaires |
| `npm run test:ui` | Lancer les tests avec interface UI |
| `npm run test:coverage` | Générer le rapport de couverture |

## Tests

Le projet utilise **Vitest** pour les tests unitaires.

### Lancer les tests

```bash
# Mode watch
npm run test

# Interface UI
npm run test:ui

# Coverage
npm run test:coverage
```

### Écrire des tests

Les tests sont situés dans `src/__tests__/`. Exemple :

```typescript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyComponent from '../components/MyComponent.vue';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.text()).toContain('Expected text');
  });
});
```

## Build et Déploiement

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Déploiement

#### Netlify

1. Connectez votre repository GitHub à Netlify
2. Configuration :
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Variables d'environnement (si nécessaire) :
   - Ajoutez vos clés Formspree dans les settings Netlify

#### Vercel

```bash
npm install -g vercel
vercel
```

Ou connectez votre repo via le dashboard Vercel.

#### GitHub Pages

1. Installer `gh-pages` :
   ```bash
   npm install -D gh-pages
   ```

2. Ajouter au `package.json` :
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Configurer `vite.config.ts` :
   ```typescript
   export default defineConfig({
     base: '/nom-du-repo/',
     // ...
   });
   ```

4. Déployer :
   ```bash
   npm run deploy
   ```

### Configuration Formspree

1. Créez un compte sur [Formspree.io](https://formspree.io)
2. Créez deux formulaires : un pour Contact, un pour Devis
3. Récupérez les endpoints (format: `https://formspree.io/f/YOUR_FORM_ID`)
4. Remplacez les endpoints dans :
   - `src/pages/Contact.vue`
   - `src/pages/Quote.vue`

## Structure du projet

```
metal-vitrine/
├── public/
│   └── assets/
│       └── images/          # Images statiques
├── src/
│   ├── __tests__/           # Tests unitaires
│   ├── components/          # Composants Vue réutilisables
│   │   ├── Navbar.vue
│   │   ├── Hero.vue
│   │   ├── ProductCard.vue
│   │   ├── Footer.vue
│   │   └── Lightbox.vue
│   ├── pages/               # Pages de l'application
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Products.vue
│   │   ├── Gallery.vue
│   │   ├── Contact.vue
│   │   └── Quote.vue
│   ├── router/              # Configuration Vue Router
│   │   └── index.ts
│   ├── data/                # Données statiques
│   │   └── content.ts
│   ├── App.vue              # Composant racine
│   ├── main.ts              # Point d'entrée
│   └── style.css            # Styles Tailwind
├── .eslintrc.cjs            # Configuration ESLint
├── .prettierrc              # Configuration Prettier
├── tailwind.config.js       # Configuration Tailwind
├── tsconfig.json            # Configuration TypeScript
├── vite.config.ts           # Configuration Vite
├── vitest.config.ts         # Configuration Vitest
└── package.json
```

## Configuration

### Design Tokens (Tailwind)

Les couleurs de la marque sont configurées dans `tailwind.config.js` :

```javascript
colors: {
  'primary-dark': '#0F3D75',      // Bleu profond (navbar, titres)
  'primary-blue': '#0F3D75',      // Bleu profond
  'primary-orange': '#F68B1E',    // Orange vibrant (CTA)
  'primary-yellow': '#FFD447',    // Jaune doré (hover, accents)
  'bg-light': '#FFFFFF',          // Blanc pur (fond principal)
  'bg-cream': '#FFF8F0',          // Crème clair (sections alternées)
  'footer-dark': '#1E2A3A',       // Bleu nuit (footer)
  'text-primary': '#333333',      // Gris anthracite (texte)
  'text-secondary': '#6B7280',    // Gris moyen (texte secondaire)
  'border-light': '#E6EAF2',      // Bordures claires
}
```

### Typographies

- **Titres** : Montserrat (Bold)
- **Corps de texte** : Open Sans (Regular, 16px)

Importées via Google Fonts dans `src/style.css`.

### Contenu Statique

Le contenu du site est défini dans `src/data/content.ts`. Pour modifier :

1. Ouvrez `src/data/content.ts`
2. Modifiez les données selon vos besoins
3. Les changements seront reflétés automatiquement

### Images

**📸 Pour gérer les images, consultez [IMAGES_README.md](./IMAGES_README.md)**

**Option rapide - Télécharger des placeholders:**
```bash
./scripts/download-placeholder-images.sh
```

**Structure:**
```
public/assets/images/
├── hero-bg.jpg              # 1920x1080px
├── factory-exterior.jpg     # 1200x800px
├── team.jpg                 # 1200x800px
├── products/                # 12 images (800x600px)
│   ├── tole-ondulee.jpg
│   └── ...
└── gallery/                 # 9 images (1200x800px)
    ├── production-1.jpg
    └── ...
```

**Documentation complète:** [GUIDE_IMAGES.md](./GUIDE_IMAGES.md)

## Conventions de Code

### Git Commit Messages

Suivre le format [Conventional Commits](https://www.conventionalcommits.org/) :

```
feat: add new product category filter
fix: correct responsive layout on mobile
docs: update README deployment section
style: format code with prettier
refactor: simplify product card logic
test: add tests for lightbox component
```

### Code Style

- Utiliser `npm run lint` avant chaque commit
- Utiliser `npm run format` pour formater automatiquement
- TypeScript strict mode activé
- Props et Events typés dans les composants Vue

### Composants Vue

```vue
<script setup lang="ts">
// Props typés
interface Props {
  title: string;
  count?: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
});

// Emits typés
const emit = defineEmits<{
  click: [id: string];
}>();
</script>

<template>
  <!-- Utiliser les classes Tailwind -->
  <div class="bg-primary-dark p-4 rounded-lg">
    <h3>{{ title }}</h3>
  </div>
</template>
```

## Accessibilité

- Balises sémantiques HTML5
- Labels appropriés pour les formulaires
- Attributs `aria-label` sur les boutons d'icônes
- Contrastes de couleurs respectant WCAG 2.1 AA
- Navigation au clavier fonctionnelle

## Performance

- Code-splitting automatique via Vue Router
- Images optimisées (pensez à utiliser WebP)
- Lazy loading des routes
- Minification et tree-shaking en production
- CSS purgé (Tailwind JIT)

## Navigateurs supportés

- Chrome/Edge (dernières 2 versions)
- Firefox (dernières 2 versions)
- Safari (dernières 2 versions)
- iOS Safari (dernières 2 versions)
- Android Chrome (dernières 2 versions)

## Checklist de Déploiement

- [ ] Remplacer les endpoints Formspree
- [ ] Ajouter toutes les images réelles
- [ ] Vérifier les informations de contact
- [ ] Tester tous les formulaires
- [ ] Vérifier le responsive sur différents appareils
- [ ] Optimiser les images (compression, WebP)
- [ ] Ajouter Google Maps (iframe dans Contact.vue)
- [ ] Configurer le domaine personnalisé
- [ ] Configurer les meta tags SEO (title, description)
- [ ] Tester la navigation complète
- [ ] Vérifier les performances (Lighthouse)
- [ ] Configurer Google Analytics (optionnel)

## Support et Contact

Pour toute question ou problème :

- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement

## Licence

Propriétaire - Tous droits réservés © 2025 Métal Industries

---

**Développé avec Vue 3, TypeScript et Tailwind CSS**
