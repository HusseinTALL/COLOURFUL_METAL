export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specifications: string[];
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  about: string;
  mission: string;
  vision: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'production' | 'factory' | 'projects';
}

export const companyInfo: CompanyInfo = {
  name: "COLOURFUL METAL PRODUCTS CO LTD.",
  slogan: "Excellence en fabrication métallique depuis 1985",
  about: "Leader dans la production de matériaux de construction métalliques, nous offrons une gamme complète de produits de haute qualité pour vos projets industriels et commerciaux.",
  mission: "Fournir des solutions métalliques innovantes et durables qui dépassent les attentes de nos clients tout en respectant les normes les plus strictes de l'industrie.",
  vision: "Devenir le partenaire de référence dans la fabrication de matériaux métalliques en Afrique, reconnu pour notre excellence, notre innovation et notre engagement envers la qualité.",
  address: "Zone Industrielle, BP 1234, Ville, Pays",
  phone: "+226 06 33 66 96",
  email: "contact@metalindustries.com",
  hours: "Lundi - Vendredi: 8h00 - 17h00 | Samedi: 8h00 - 12h00"
};

export const products: Product[] = [
  // Tôles
  {
    id: "tole-1",
    name: "Tôle Ondulée Galvanisée",
    category: "Tôles",
    description: "Tôle ondulée en acier galvanisé, idéale pour toitures et bardages.",
    image: "/assets/images/products/tole-ondulee.jpg",
    specifications: [
      "Épaisseur: 0.4mm - 0.8mm",
      "Largeur: 762mm - 1050mm",
      "Longueur: Sur mesure jusqu'à 12m",
      "Matière: Acier galvanisé Z275"
    ]
  },
  {
    id: "tole-2",
    name: "Tôle Lisse Galvanisée",
    category: "Tôles",
    description: "Tôle lisse en acier galvanisé pour applications diverses.",
    image: "/assets/images/products/tole-lisse.jpg",
    specifications: [
      "Épaisseur: 0.3mm - 3.0mm",
      "Dimensions: 1000x2000mm, 1250x2500mm",
      "Matière: Acier galvanisé",
      "Finition: Lisse, brillante"
    ]
  },
  {
    id: "tole-3",
    name: "Tôle Bac Acier",
    category: "Tôles",
    description: "Tôle nervurée haute résistance pour toitures industrielles.",
    image: "/assets/images/products/bac-acier.jpg",
    specifications: [
      "Épaisseur: 0.5mm - 1.0mm",
      "Largeur utile: 1000mm",
      "Hauteur nervure: 40mm - 60mm",
      "Portée: Jusqu'à 8m"
    ]
  },

  // Tubes & Profilés
  {
    id: "tube-1",
    name: "Tube Carré Galvanisé",
    category: "Tubes & Profilés",
    description: "Tube carré en acier galvanisé pour structures et charpentes.",
    image: "/assets/images/products/tube-carre.jpg",
    specifications: [
      "Sections: 20x20mm à 150x150mm",
      "Épaisseur: 1.5mm - 6.0mm",
      "Longueur: 6m standard",
      "Matière: Acier S235JR galvanisé"
    ]
  },
  {
    id: "tube-2",
    name: "Tube Rond Galvanisé",
    category: "Tubes & Profilés",
    description: "Tube rond pour applications structurelles et décoratives.",
    image: "/assets/images/products/tube-rond.jpg",
    specifications: [
      "Diamètres: 21.3mm à 219.1mm",
      "Épaisseur: 2.0mm - 8.0mm",
      "Longueur: 6m standard",
      "Norme: EN 10255"
    ]
  },
  {
    id: "profile-1",
    name: "Profilé en U (UPN)",
    category: "Tubes & Profilés",
    description: "Profilé en U laminé à chaud pour constructions métalliques.",
    image: "/assets/images/products/profile-u.jpg",
    specifications: [
      "Dimensions: UPN 80 à UPN 300",
      "Matière: Acier S235JR",
      "Longueur: 6m, 12m",
      "Applications: Charpentes, ossatures"
    ]
  },

  // Grilles & Crochets
  {
    id: "grille-1",
    name: "Grille Caillebotis Galvanisée",
    category: "Grilles & Crochets",
    description: "Grille caillebotis pour plateformes et passages.",
    image: "/assets/images/products/caillebotis.jpg",
    specifications: [
      "Maille: 30x30mm, 30x100mm",
      "Épaisseur porteur: 20mm - 40mm",
      "Traitement: Galvanisation à chaud",
      "Charge: Jusqu'à 500kg/m²"
    ]
  },
  {
    id: "grille-2",
    name: "Grille Soudée Anti-Intrusion",
    category: "Grilles & Crochets",
    description: "Grille de sécurité pour fenêtres et ouvertures.",
    image: "/assets/images/products/grille-securite.jpg",
    specifications: [
      "Fil: Ø 4mm - 8mm",
      "Maille: 50x50mm, 100x100mm",
      "Dimensions: Sur mesure",
      "Finition: Galvanisé ou thermolaqué"
    ]
  },
  {
    id: "crochet-1",
    name: "Crochets de Fixation",
    category: "Grilles & Crochets",
    description: "Crochets robustes pour fixation de tôles et bardages.",
    image: "/assets/images/products/crochets.jpg",
    specifications: [
      "Matière: Acier galvanisé",
      "Charge: Jusqu'à 50kg/pièce",
      "Types: Crochets à visser, à souder",
      "Conditionnement: Par 100"
    ]
  },

  // Vis & Attaches
  {
    id: "vis-1",
    name: "Vis Autoperceuses Toiture",
    category: "Vis & Attaches",
    description: "Vis autoperceuses avec joint EPDM pour fixation de tôles.",
    image: "/assets/images/products/vis-toiture.jpg",
    specifications: [
      "Diamètre: 5.5mm - 6.3mm",
      "Longueur: 19mm - 150mm",
      "Tête: Hexagonale avec joint",
      "Conditionnement: Boîte de 100, 250, 500"
    ]
  },
  {
    id: "vis-2",
    name: "Vis à Tôle Standard",
    category: "Vis & Attaches",
    description: "Vis à tôle pour fixations légères et assemblages.",
    image: "/assets/images/products/vis-tole.jpg",
    specifications: [
      "Diamètre: 3.5mm - 6.0mm",
      "Longueur: 13mm - 100mm",
      "Tête: Fraisée, bombée, hexagonale",
      "Matière: Acier zingué"
    ]
  },
  {
    id: "attache-1",
    name: "Fers d'Attache Torsadés",
    category: "Vis & Attaches",
    description: "Fils de fer galvanisés pour ligatures et attaches.",
    image: "/assets/images/products/fer-attache.jpg",
    specifications: [
      "Diamètre: 1.0mm - 3.0mm",
      "Présentation: Rouleaux de 5kg, 25kg",
      "Traitement: Galvanisé",
      "Usage: Ligature, armature, clôtures"
    ]
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "prod-1",
    src: "/assets/images/gallery/production-1.jpg",
    alt: "Ligne de production de tôles ondulées",
    category: "production"
  },
  {
    id: "prod-2",
    src: "/assets/images/gallery/production-2.jpg",
    alt: "Galvanisation des tubes",
    category: "production"
  },
  {
    id: "prod-3",
    src: "/assets/images/gallery/production-3.jpg",
    alt: "Découpe et façonnage",
    category: "production"
  },
  {
    id: "factory-1",
    src: "/assets/images/gallery/factory-1.jpg",
    alt: "Vue d'ensemble de l'usine",
    category: "factory"
  },
  {
    id: "factory-2",
    src: "/assets/images/gallery/factory-2.jpg",
    alt: "Zone de stockage",
    category: "factory"
  },
  {
    id: "factory-3",
    src: "/assets/images/gallery/factory-3.jpg",
    alt: "Équipe de production",
    category: "factory"
  },
  {
    id: "project-1",
    src: "/assets/images/gallery/project-1.jpg",
    alt: "Projet commercial - Toiture métallique",
    category: "projects"
  },
  {
    id: "project-2",
    src: "/assets/images/gallery/project-2.jpg",
    alt: "Projet industriel - Charpente métallique",
    category: "projects"
  },
  {
    id: "project-3",
    src: "/assets/images/gallery/project-3.jpg",
    alt: "Projet résidentiel - Portail et clôture",
    category: "projects"
  }
];
