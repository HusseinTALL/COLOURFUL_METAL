/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0F3D75',     // Bleu profond (navbar, titres)
        'primary-blue': '#0F3D75',     // Bleu profond
        'primary-orange': '#F68B1E',   // Orange vibrant (CTA)
        'primary-yellow': '#FFD447',   // Jaune doré (accents, hover)
        'bg-light': '#FFFFFF',         // Blanc pur (fond général)
        'bg-cream': '#FFF8F0',         // Crème clair (sections alternées)
        'footer-dark': '#1E2A3A',      // Bleu nuit (footer)
        'text-primary': '#333333',     // Gris anthracite (texte principal)
        'text-secondary': '#6B7280',   // Gris moyen (texte secondaire)
        'border-light': '#E6EAF2',     // Bordures claires
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '32px',
        'h3': '24px',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0,0,0,0.1)',
        'custom-hover': '0 8px 12px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        'custom': '8px',
        'custom-lg': '12px',
      },
      transitionDuration: {
        'custom': '300ms',
      },
    },
  },
  plugins: [],
}
