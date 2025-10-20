#!/bin/bash

# Script pour télécharger des images placeholder depuis Unsplash
# Usage: ./scripts/download-placeholder-images.sh

echo "📥 Téléchargement des images placeholder depuis Unsplash..."

# Créer les dossiers si nécessaire
mkdir -p public/assets/images/products
mkdir -p public/assets/images/gallery

# Hero background - Industrial/Factory
echo "🎨 Hero background..."
curl -L "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop&q=85" \
  -o public/assets/images/hero-bg.jpg

# Team photo
echo "👥 Team photo..."
curl -L "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/team.jpg

# Factory exterior
echo "🏭 Factory exterior..."
curl -L "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/factory-exterior.jpg

echo "📦 Images produits..."

# Tôles
curl -L "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/tole-ondulee.jpg

curl -L "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/tole-lisse.jpg

curl -L "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/bac-acier.jpg

# Tubes
curl -L "https://images.unsplash.com/photo-1625740788753-b811c25bb487?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/tube-carre.jpg

curl -L "https://images.unsplash.com/photo-1620493409628-5c9e5e6a6e68?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/tube-rond.jpg

curl -L "https://images.unsplash.com/photo-1599934914024-6809b0e31f42?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/profile-u.jpg

# Grilles
curl -L "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/caillebotis.jpg

curl -L "https://images.unsplash.com/photo-1569437061238-3cf61084f487?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/grille-securite.jpg

curl -L "https://images.unsplash.com/photo-1606744837616-56c7f5c7e5e2?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/crochets.jpg

# Vis et attaches
curl -L "https://images.unsplash.com/photo-1590948347862-64584b09c069?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/vis-toiture.jpg

curl -L "https://images.unsplash.com/photo-1616401776686-89049ba6f4a2?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/vis-tole.jpg

curl -L "https://images.unsplash.com/photo-1609902726285-00668009f004?w=800&h=600&fit=crop&q=85" \
  -o public/assets/images/products/fer-attache.jpg

echo "🖼️ Images galerie..."

# Production
curl -L "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/production-1.jpg

curl -L "https://images.unsplash.com/photo-1621905195151-5111c6ce6e04?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/production-2.jpg

curl -L "https://images.unsplash.com/photo-1587293856387-6884f091df4a?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/production-3.jpg

# Factory
curl -L "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/factory-1.jpg

curl -L "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/factory-2.jpg

curl -L "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/factory-3.jpg

# Projects
curl -L "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/project-1.jpg

curl -L "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/project-2.jpg

curl -L "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=85" \
  -o public/assets/images/gallery/project-3.jpg

echo "✅ Téléchargement terminé !"
echo "🔄 Redémarrez le serveur de développement pour voir les images"
echo ""
echo "Note: Ces images sont des placeholders. Remplacez-les par vos vraies photos !"
