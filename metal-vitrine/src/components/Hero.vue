<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';

interface Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ctaText: 'En savoir plus',
  ctaLink: '/about',
  backgroundImage: '/assets/images/hero-bg.jpg'
});

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <section
    class="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Gradient Overlay Multi-couches pour profondeur -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary-dark/85 to-footer-dark/90"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

    <!-- Motif de grille subtil pour texture -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px); background-size: 50px 50px;"></div>

    <!-- Content avec animations -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Badge animé -->
        <div
          :class="[
            'inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          ]"
        >
          <div class="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
          <span class="text-white/90 text-sm font-medium tracking-wide">Depuis 1985 • Excellence & Innovation</span>
        </div>

        <!-- Titre principal avec animation -->
        <h1
          :class="[
            'text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white font-montserrat font-bold leading-tight transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <span class="block mb-2">{{ title.split(' ').slice(0, -3).join(' ') }}</span>
          <span class="bg-gradient-to-r from-primary-orange via-primary-yellow to-primary-orange bg-clip-text text-transparent animate-gradient-x">
            {{ title.split(' ').slice(-3).join(' ') }}
          </span>
        </h1>

        <!-- Sous-titre -->
        <p
          :class="[
            'text-lg sm:text-xl md:text-2xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          {{ subtitle }}
        </p>

        <!-- CTAs avec design moderne -->
        <div
          :class="[
            'flex flex-col sm:flex-row gap-4 mb-10 justify-center items-center transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <RouterLink
            :to="ctaLink"
            class="group relative inline-flex items-center gap-3 bg-primary-orange hover:bg-primary-yellow text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-primary-orange/50 hover:scale-105 overflow-hidden"
          >
            <span class="relative z-10">{{ ctaText }}</span>
            <svg class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
            <div class="absolute inset-0 bg-gradient-to-r from-primary-yellow/0 via-primary-yellow/50 to-primary-yellow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </RouterLink>

          <RouterLink
            to="/contact"
            class="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:border-white/60 transition-all duration-300"
          >
            <span>Contactez-nous</span>
            <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </RouterLink>
        </div>

        <!-- Indicateur de scroll -->
        <div
          :class="[
            'absolute bottom--1 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500',
            isVisible ? 'opacity-100' : 'opacity-0'
          ]"
        >
          <div class="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer">
            <span class="text-xs uppercase tracking-wider font-medium">Découvrir</span>
            <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% auto;
  animation: gradient-x 3s ease infinite;
}
</style>
