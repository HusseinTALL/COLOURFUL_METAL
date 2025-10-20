# Guide de Gestion des Images

Ce guide vous explique comment gérer et ajouter des images réelles pour votre site web.

## Structure des Dossiers

```
public/assets/images/
├── hero-bg.jpg              # Image de fond pour la section Hero (1920x1080px recommandé)
├── team.jpg                 # Photo de l'équipe (1200x800px)
├── factory-exterior.jpg     # Vue extérieure de l'usine (1200x800px)
├── products/                # Images des produits (800x600px recommandé)
│   ├── tole-ondulee.jpg
│   ├── tole-lisse.jpg
│   ├── bac-acier.jpg
│   ├── tube-carre.jpg
│   ├── tube-rond.jpg
│   ├── profile-u.jpg
│   ├── caillebotis.jpg
│   ├── grille-securite.jpg
│   ├── crochets.jpg
│   ├── vis-toiture.jpg
│   ├── vis-tole.jpg
│   └── fer-attache.jpg
└── gallery/                 # Images de la galerie (1200x800px recommandé)
    ├── production-1.jpg
    ├── production-2.jpg
    ├── production-3.jpg
    ├── factory-1.jpg
    ├── factory-2.jpg
    ├── factory-3.jpg
    ├── project-1.jpg
    ├── project-2.jpg
    └── project-3.jpg
```

## Tailles Recommandées par Section

### 1. Hero Background (`hero-bg.jpg`)
- **Dimensions**: 1920x1080px (Full HD)
- **Format**: JPG (qualité 80-90%)
- **Poids max**: 300 KB
- **Sujet**: Vue large de votre usine, production, ou produits métalliques
- **Conseil**: Image avec beaucoup d'espace pour le texte overlay

### 2. Images Produits (dossier `products/`)
- **Dimensions**: 800x600px (ratio 4:3)
- **Format**: JPG (qualité 85%)
- **Poids max**: 150 KB par image
- **Sujet**: Photos nettes sur fond neutre (blanc ou gris)
- **Conseil**: Éclairage uniforme, plusieurs angles si possible

**Liste des 12 produits à photographier:**
1. `tole-ondulee.jpg` - Tôle ondulée galvanisée
2. `tole-lisse.jpg` - Tôle lisse galvanisée
3. `bac-acier.jpg` - Tôle bac acier nervurée
4. `tube-carre.jpg` - Tube carré galvanisé
5. `tube-rond.jpg` - Tube rond galvanisé
6. `profile-u.jpg` - Profilé en U (UPN)
7. `caillebotis.jpg` - Grille caillebotis
8. `grille-securite.jpg` - Grille anti-intrusion
9. `crochets.jpg` - Crochets de fixation
10. `vis-toiture.jpg` - Vis autoperceuses avec joint EPDM
11. `vis-tole.jpg` - Vis à tôle standard
12. `fer-attache.jpg` - Fils de fer torsadés

### 3. Images Galerie (dossier `gallery/`)

#### Production (3 images)
- **Dimensions**: 1200x800px (ratio 3:2)
- **Format**: JPG (qualité 85%)
- **Sujets**:
  - `production-1.jpg` - Ligne de production de tôles
  - `production-2.jpg` - Galvanisation des tubes
  - `production-3.jpg` - Découpe et façonnage

#### Usine (3 images)
- **Dimensions**: 1200x800px
- **Sujets**:
  - `factory-1.jpg` - Vue d'ensemble de l'usine
  - `factory-2.jpg` - Zone de stockage
  - `factory-3.jpg` - Équipe de production

#### Projets (3 images)
- **Dimensions**: 1200x800px
- **Sujets**:
  - `project-1.jpg` - Projet commercial (toiture métallique)
  - `project-2.jpg` - Projet industriel (charpente)
  - `project-3.jpg` - Projet résidentiel (portail/clôture)

### 4. Autres Images
- `team.jpg` - Photo de l'équipe (1200x800px)
- `factory-exterior.jpg` - Vue extérieure usine (1200x800px)

## Comment Ajouter vos Images

### Méthode 1: Remplacement Direct
1. Prenez vos photos avec un appareil de qualité
2. Redimensionnez-les aux dimensions recommandées (utilisez Photoshop, GIMP, ou un outil en ligne)
3. Optimisez le poids (compression JPG 80-90%)
4. Renommez-les exactement comme indiqué ci-dessus
5. Copiez-les dans le dossier approprié en remplaçant les fichiers vides

```bash
# Exemple depuis Terminal
cp /chemin/vers/votre/photo.jpg public/assets/images/products/tole-ondulee.jpg
```

### Méthode 2: Par Glisser-Déposer
1. Ouvrez le dossier `public/assets/images/` dans Finder
2. Glissez vos images redimensionnées et renommées
3. Remplacez les fichiers existants

## Outils d'Optimisation d'Images

### En Ligne (Gratuits)
- **TinyPNG** (https://tinypng.com/) - Compression PNG/JPG
- **Squoosh** (https://squoosh.app/) - Optimisation avancée
- **iloveimg** (https://www.iloveimg.com/fr) - Redimensionnement et compression

### Logiciels
- **Photoshop** - Exportation "Enregistrer pour le web"
- **GIMP** (gratuit) - Exportation avec qualité ajustable
- **XnConvert** (gratuit) - Traitement par lots

## Images Placeholder Temporaires

Si vous n'avez pas encore vos photos, vous pouvez utiliser des images temporaires:

### Option 1: Unsplash (Images gratuites haute qualité)
```bash
# Exemples d'URLs Unsplash pour métallurgie
Hero: https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920
Produits métalliques: https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800
Usine: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200
```

### Option 2: Images de démonstration colorées
Le site fonctionne déjà avec des fichiers vides - ils s'affichent avec un fond gris par défaut.

## Checklist Avant Mise en Production

- [ ] Toutes les images sont de la bonne taille
- [ ] Le poids total des images < 5 MB
- [ ] Les images sont optimisées (compression 80-90%)
- [ ] Les noms de fichiers correspondent exactement à la structure
- [ ] Les images sont professionnelles et de bonne qualité
- [ ] Vous avez les droits d'utilisation de toutes les images
- [ ] Les images s'affichent correctement sur mobile et desktop

## Format Alternatif: WebP (Optionnel)

Pour de meilleures performances, vous pouvez convertir en WebP:

```bash
# Installer cwebp (macOS avec Homebrew)
brew install webp

# Convertir une image
cwebp -q 85 input.jpg -o output.webp

# Traitement par lots
for i in *.jpg; do cwebp -q 85 "$i" -o "${i%.jpg}.webp"; done
```

Puis modifier les chemins dans `src/data/content.ts` en remplaçant `.jpg` par `.webp`.

## Support et Contact

Pour toute question sur l'intégration des images:
- Vérifiez que les noms de fichiers sont exacts (sensible à la casse)
- Les chemins commencent toujours par `/assets/images/`
- Redémarrez le serveur de développement après avoir ajouté de nouvelles images

---

**Astuce**: Commencez par ajouter l'image hero et 2-3 images de produits pour voir le résultat, puis continuez avec le reste.
