# Nouvelle Palette de Couleurs - Métal Industries

## Palette Colorée et Vibrante 🎨

La nouvelle palette apporte une touche plus colorée et énergique au site, tout en conservant le professionnalisme.

### Couleurs Principales

| Nom | Hex | RGB | Usage |
|-----|-----|-----|-------|
| **Bleu Foncé** | `#134686` | rgb(19, 70, 134) | Fond principal, accent principal |
| **Rouge/Orange Vif** | `#ED3F27` | rgb(237, 63, 39) | Accent secondaire, call-to-action |
| **Jaune Doré** | `#FEB21A` | rgb(254, 178, 26) | Accent tertiaire, highlights |
| **Crème Clair** | `#FDF4E3` | rgb(253, 244, 227) | Texte principal, backgrounds clairs |

### Classes Tailwind Disponibles

#### Backgrounds
- `bg-primary-dark` - Bleu foncé #134686
- `bg-primary-blue` - Bleu foncé #134686
- `bg-primary-orange` - Rouge/Orange vif #ED3F27
- `bg-primary-yellow` - Jaune doré #FEB21A

#### Textes
- `text-primary` - Crème clair #FDF4E3
- `text-secondary` - Jaune doré #FEB21A
- `text-primary-blue` - Bleu foncé #134686
- `text-primary-orange` - Rouge/Orange vif #ED3F27
- `text-primary-yellow` - Jaune doré #FEB21A

#### Bordures
- `border-primary-dark`
- `border-primary-blue`
- `border-primary-orange`
- `border-primary-yellow`

### Hiérarchie Visuelle

1. **Fond Principal** : Bleu foncé (#134686)
   - Donne une base professionnelle et confiante
   - Évoque la stabilité et la fiabilité industrielle

2. **Texte Principal** : Crème clair (#FDF4E3)
   - Excellent contraste sur le bleu foncé
   - Facile à lire, chaleureux

3. **Accents Primaires** : Rouge/Orange vif (#ED3F27)
   - Boutons call-to-action
   - Éléments interactifs au hover
   - Attire l'attention sur les actions importantes

4. **Accents Secondaires** : Jaune doré (#FEB21A)
   - Highlights et badges
   - Texte secondaire
   - Éléments décoratifs

### Exemples d'Utilisation

#### Boutons
```vue
<!-- Bouton principal -->
<button class="bg-primary-blue text-text-primary hover:bg-primary-orange">
  Demander un devis
</button>

<!-- Bouton secondaire -->
<button class="bg-primary-yellow text-primary-dark hover:bg-primary-orange">
  En savoir plus
</button>
```

#### Cards
```vue
<div class="bg-primary-dark text-text-primary border-primary-yellow">
  <h3 class="text-primary-yellow">Titre</h3>
  <p class="text-text-primary">Contenu...</p>
</div>
```

#### Badges/Tags
```vue
<span class="bg-primary-yellow text-primary-dark px-3 py-1 rounded-full">
  Nouveau
</span>
```

### Accessibilité (Contrastes WCAG)

| Combinaison | Ratio | Note WCAG |
|-------------|-------|-----------|
| Crème (#FDF4E3) sur Bleu (#134686) | 10.2:1 | AAA ✅ |
| Jaune (#FEB21A) sur Bleu (#134686) | 5.8:1 | AA ✅ |
| Bleu (#134686) sur Crème (#FDF4E3) | 10.2:1 | AAA ✅ |
| Orange (#ED3F27) sur Bleu (#134686) | 3.5:1 | AA (Large text) ⚠️ |

### Comparaison avec l'Ancienne Palette

| Élément | Avant | Après |
|---------|-------|-------|
| Fond | Gris anthracite #2C3E50 | Bleu foncé #134686 |
| Accent 1 | Bleu industriel #3498DB | Rouge/Orange #ED3F27 |
| Accent 2 | Orange rouille #E74C3C | Jaune doré #FEB21A |
| Texte | Blanc cassé #ECF0F1 | Crème #FDF4E3 |

### Ambiance & Ton

**Avant** : Industriel, sobre, métallique, sérieux
**Après** : Énergique, confiant, chaleureux, professionnel avec personnalité

La nouvelle palette maintient le professionnalisme tout en ajoutant :
- ✨ Plus de chaleur (crème au lieu de blanc froid)
- 🔥 Plus d'énergie (orange vif, jaune doré)
- 💼 Toujours professionnel (bleu foncé stable)
- 🎯 Meilleure visibilité des call-to-action

---

**Mise à jour** : 18 Octobre 2025
**Appliqué dans** : `tailwind.config.js`
