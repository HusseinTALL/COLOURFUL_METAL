<script setup lang="ts">
import { ref, computed } from 'vue';
import Hero from '../components/Hero.vue';
import Lightbox from '../components/Lightbox.vue';
import { galleryImages } from '../data/content';

type CategoryFilter = 'all' | 'production' | 'factory' | 'projects';

const selectedCategory = ref<CategoryFilter>('all');
const lightboxOpen = ref(false);
const lightboxIndex = ref(0);
const isAnimating = ref(false);

const categories = [
  {
    id: 'all' as CategoryFilter,
    name: 'Toutes',
    icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'
  },
  {
    id: 'production' as CategoryFilter,
    name: 'Production',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    id: 'factory' as CategoryFilter,
    name: 'Usine',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 'projects' as CategoryFilter,
    name: 'Projets',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  }
];

const filteredImages = computed(() => {
  if (selectedCategory.value === 'all') {
    return galleryImages;
  }
  return galleryImages.filter(img => img.category === selectedCategory.value);
});

const getCategoryCount = (categoryId: CategoryFilter) => {
  if (categoryId === 'all') return galleryImages.length;
  return galleryImages.filter(img => img.category === categoryId).length;
};

const selectCategory = (categoryId: CategoryFilter) => {
  if (selectedCategory.value === categoryId) return;
  isAnimating.value = true;
  selectedCategory.value = categoryId;
  setTimeout(() => {
    isAnimating.value = false;
  }, 400);
};

const openLightbox = (index: number) => {
  lightboxIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};
</script>

<template>
  <div class="bg-bg-light">
    <Hero
      title="Galerie Photos"
      subtitle="Découvrez notre usine moderne, nos processus de production et nos réalisations exceptionnelles"
      ctaText="Voir nos produits"
      ctaLink="/products"
      backgroundImage="/assets/images/gallery/factory-1.jpg"
    />

    <!-- Category Filter Premium -->
    <section class="sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b border-border-light shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <!-- Title & Count -->
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-primary-dark mb-2">Filtrer par catégorie</h2>
          <p class="text-text-secondary text-sm">
            <span class="font-semibold text-primary-orange">{{ filteredImages.length }}</span>
            photo{{ filteredImages.length > 1 ? 's' : '' }} affichée{{ filteredImages.length > 1 ? 's' : '' }}
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="[
              'group relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3 overflow-hidden',
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-primary-orange to-primary-yellow text-white shadow-lg scale-105'
                : 'bg-white border-2 border-border-light text-text-primary hover:border-primary-orange hover:text-primary-orange hover:scale-105'
            ]"
          >
            <!-- Icon -->
            <div :class="[
              'w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300',
              selectedCategory === category.id
                ? 'bg-white/20'
                : 'bg-border-light group-hover:bg-primary-orange/10'
            ]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path :d="category.icon"/>
              </svg>
            </div>

            <!-- Text -->
            <span>{{ category.name }}</span>

            <!-- Count Badge -->
            <div :class="[
              'px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300',
              selectedCategory === category.id
                ? 'bg-white/30 text-white'
                : 'bg-border-light text-text-secondary group-hover:bg-primary-orange/10 group-hover:text-primary-orange'
            ]">
              {{ getCategoryCount(category.id) }}
            </div>

            <!-- Active indicator (underline) -->
            <div
              v-if="selectedCategory === category.id"
              class="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full"
            ></div>

            <!-- Shimmer effect on active -->
            <div
              v-if="selectedCategory === category.id"
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
            ></div>
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid Premium -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-bg-cream to-white">
      <div class="max-w-7xl mx-auto">
        <!-- Empty State -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="filteredImages.length === 0" class="text-center py-20">
            <div class="inline-flex items-center justify-center w-24 h-24 bg-border-light rounded-full mb-6">
              <svg class="w-12 h-12 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-primary-dark mb-2">Aucune photo trouvée</h3>
            <p class="text-text-secondary text-lg">
              Aucune photo dans cette catégorie pour le moment.
            </p>
          </div>
        </Transition>

        <!-- Gallery Grid with Staggered Animation -->
        <TransitionGroup
          v-if="filteredImages.length > 0"
          name="gallery"
          tag="div"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="(image, index) in filteredImages"
            :key="image.id"
            :style="{ transitionDelay: `${index * 50}ms` }"
            @click="openLightbox(index)"
            class="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <!-- Image Container -->
            <div class="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-border-light to-bg-cream">
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                loading="lazy"
              />

              <!-- Overlay with gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <!-- Zoom Icon -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                  </svg>
                </div>
              </div>

              <!-- Category Badge -->
              <div class="absolute top-4 left-4 z-10">
                <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary-dark text-xs font-bold rounded-full shadow-lg">
                  <div class="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
                  {{ image.category === 'production' ? 'Production' : image.category === 'factory' ? 'Usine' : 'Projet' }}
                </span>
              </div>
            </div>

            <!-- Caption Bar -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
              <p class="text-white font-medium text-sm leading-relaxed line-clamp-2">
                {{ image.alt }}
              </p>
              <div class="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <svg class="w-4 h-4 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-white/80 text-xs">Cliquer pour agrandir</span>
              </div>
            </div>

            <!-- Decorative corner accent -->
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-orange/0 to-primary-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 bg-gradient-to-br from-primary-dark via-primary-blue to-footer-dark">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Intéressé par nos <span class="text-primary-yellow">réalisations</span> ?
        </h2>
        <p class="text-white/80 text-lg mb-8">
          Découvrez notre catalogue complet de produits métalliques de haute qualité
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/products"
            class="group inline-flex items-center justify-center gap-3 bg-white text-primary-dark px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            <span>Voir nos produits</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </RouterLink>

          <RouterLink
            to="/quote"
            class="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white/60 transition-all duration-300 hover:bg-white/20"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>Demander un devis</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Lightbox
      :images="filteredImages"
      :initial-index="lightboxIndex"
      :is-open="lightboxOpen"
      @close="closeLightbox"
    />
  </div>
</template>

<style scoped>
/* Gallery Grid Transitions */
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s ease;
}

.gallery-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.gallery-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

.gallery-move {
  transition: transform 0.5s ease;
}

/* Shimmer animation */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
