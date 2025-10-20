<script setup lang="ts">
import type { Product } from '../data/content';
import { ref } from 'vue';

interface Props {
  product: Product;
}

defineProps<Props>();

const isHovered = ref(false);
</script>

<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary-orange/10"
  >
    <!-- Image avec overlay gradient au hover -->
    <div class="relative overflow-hidden h-64 bg-gradient-to-br from-border-light to-bg-cream">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        :class="{ 'brightness-90': isHovered }"
      />

      <!-- Overlay gradient au hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent transition-opacity duration-500"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
      ></div>

      <!-- Badge catégorie flottant -->
      <div class="absolute top-4 left-4 z-10">
        <span class="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-primary-dark text-sm font-semibold rounded-full shadow-lg">
          <div class="w-2 h-2 bg-primary-orange rounded-full"></div>
          {{ product.category }}
        </span>
      </div>

      <!-- Icône hover -->
      <div
        class="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500"
        :class="isHovered ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'"
      >
        <svg class="w-5 h-5 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
      </div>
    </div>

    <!-- Contenu avec espacement professionnel -->
    <div class="p-6 space-y-4">
      <!-- Titre -->
      <h3 class="text-xl font-bold text-primary-dark group-hover:text-primary-orange transition-colors duration-300 leading-tight">
        {{ product.name }}
      </h3>

      <!-- Description -->
      <p class="text-text-secondary text-sm leading-relaxed line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Séparateur subtil -->
      <div class="h-px bg-gradient-to-r from-transparent via-border-light to-transparent"></div>

      <!-- Caractéristiques avec design moderne -->
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-primary-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <h4 class="text-xs font-bold text-primary-dark uppercase tracking-wider">Spécifications</h4>
        </div>

        <ul class="space-y-2">
          <li
            v-for="(spec, index) in product.specifications.slice(0, 3)"
            :key="index"
            class="flex items-start gap-2 text-text-secondary text-xs group/item"
          >
            <svg class="w-4 h-4 text-primary-yellow flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{ spec }}</span>
          </li>
        </ul>

        <!-- Indicateur "plus de specs" si > 3 -->
        <div v-if="product.specifications.length > 3" class="text-xs text-primary-orange font-medium flex items-center gap-1">
          <span>+{{ product.specifications.length - 3 }} autres spécifications</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      <!-- CTA Button -->
      <button
        class="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-dark to-primary-blue text-white font-semibold rounded-xl transition-all duration-300 group-hover:from-primary-orange group-hover:to-primary-yellow group-hover:shadow-lg group-hover:shadow-primary-orange/30 flex items-center justify-center gap-2"
      >
        <span>Voir les détails</span>
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </button>
    </div>

    <!-- Bande décorative au hover -->
    <div
      class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange via-primary-yellow to-primary-orange transition-all duration-500"
      :class="isHovered ? 'opacity-100' : 'opacity-0'"
    ></div>
  </div>
</template>
