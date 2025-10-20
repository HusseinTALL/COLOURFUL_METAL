# Gestion des Images - Guide Rapide

## 🎯 3 Options pour vos Images

### Option 1: Télécharger des Images Placeholder (Recommandé pour démarrer)

```bash
cd /Users/mac/COLOURFULMETAL_VITRINE/metal-vitrine
./scripts/download-placeholder-images.sh
```

Ce script télécharge automatiquement 24 images placeholder depuis Unsplash.

### Option 2: Ajouter vos Propres Photos

1. Préparez vos photos (redimensionnées et optimisées)
2. Copiez-les dans les dossiers appropriés:

```bash
# Exemples
cp votre-photo-usine.jpg public/assets/images/hero-bg.jpg
cp photo-tole.jpg public/assets/images/products/tole-ondulee.jpg
```

**Consultez [GUIDE_IMAGES.md](./GUIDE_IMAGES.md) pour les détails complets**

### Option 3: Garder les Placeholders par Défaut

Le site fonctionne avec des images vides qui affichent un fond gris avec une icône.

## 📁 Structure des Dossiers

```
public/assets/images/
├── hero-bg.jpg                    # Image hero principale
├── team.jpg                       # Photo équipe
├── factory-exterior.jpg           # Vue usine
├── products/                      # 12 images produits
│   ├── tole-ondulee.jpg
│   ├── tole-lisse.jpg
│   ├── bac-acier.jpg
│   └── ... (9 autres)
└── gallery/                       # 9 images galerie
    ├── production-1.jpg
    ├── factory-1.jpg
    ├── project-1.jpg
    └── ... (6 autres)
```

## 🎨 Tailles Recommandées

| Type | Dimensions | Poids max |
|------|-----------|-----------|
| Hero | 1920x1080px | 300 KB |
| Produits | 800x600px | 150 KB |
| Galerie | 1200x800px | 200 KB |
| Autres | 1200x800px | 200 KB |

## 🔧 Commandes Utiles

```bash
# Télécharger les placeholders
./scripts/download-placeholder-images.sh

# Vérifier la structure
ls -R public/assets/images/

# Redémarrer le serveur après ajout d'images
npm run dev
```

## 📚 Documentation Complète

Pour plus de détails sur:
- Les spécifications exactes de chaque image
- Les outils d'optimisation
- La conversion WebP
- Les conseils de photographie

👉 Consultez [GUIDE_IMAGES.md](./GUIDE_IMAGES.md)

## ✅ Checklist Rapide

- [ ] Structure des dossiers créée (`public/assets/images/`)
- [ ] Images hero et produits ajoutées
- [ ] Images de galerie ajoutées
- [ ] Images optimisées (< 300 KB chacune)
- [ ] Serveur de développement redémarré
- [ ] Images visibles sur le site

---

**Note**: Les images placeholder sont parfaites pour le développement. Remplacez-les par vos vraies photos avant la mise en production.
