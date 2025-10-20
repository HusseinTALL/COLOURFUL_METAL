<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Prevent body scroll when menu is open on mobile
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});

const navItems = [
  {
    name: 'Accueil',
    path: '/',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    name: 'À propos',
    path: '/about',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    name: 'Produits',
    path: '/products',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  },
  {
    name: 'Galerie',
    path: '/gallery',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
];
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-primary-dark/95 backdrop-blur-lg shadow-2xl border-b border-white/10'
        : 'bg-primary-dark border-b border-primary-dark/80 shadow-lg'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo Premium -->
        <RouterLink
          to="/"
          @click="closeMenu"
          class="group flex items-center gap-3 relative"
        >
          <!-- Logo Icon avec gradient -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
          </div>

          <!-- Company Name -->
          <div class="hidden lg:flex flex-col">
            <span class="font-montserrat font-bold text-lg text-white leading-tight group-hover:text-primary-yellow transition-colors duration-300">
              COLOURFUL METAL
            </span>
            <span class="text-xs text-white/60 font-medium tracking-wider uppercase">
              Products Co Ltd.
            </span>
          </div>

          <!-- Abbreviated for smaller screens -->
          <div class="flex lg:hidden">
            <span class="font-montserrat font-bold text-lg text-white group-hover:text-primary-yellow transition-colors duration-300">
              COLOURFUL METAL
            </span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-2">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="group relative px-4 py-2 text-white/80 hover:text-white font-medium text-sm transition-all duration-300"
          >
            <!-- Texte -->
            <span class="relative z-10">{{ item.name }}</span>

            <!-- Indicateur actif (underline animé) -->
            <div
              :class="[
                'absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-orange via-primary-yellow to-primary-orange rounded-full transition-all duration-300',
                route.path === item.path ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
              ]"
            ></div>

            <!-- Background hover -->
            <div
              :class="[
                'absolute inset-0 rounded-lg bg-white/5 transition-opacity duration-300',
                route.path === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              ]"
            ></div>
          </RouterLink>

          <!-- CTA Button Premium -->
          <RouterLink
            to="/quote"
            class="group relative ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-orange/50 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>Devis Gratuit</span>
            </span>
            <!-- Shimmer effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </RouterLink>
        </div>

        <!-- Mobile menu button - Design moderne -->
        <button
          @click="toggleMenu"
          class="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-primary-yellow transition-colors duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div class="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity"></div>
          <svg
            class="w-6 h-6 relative z-10 transition-transform duration-300"
            :class="{ 'rotate-90': isMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation - Redesigned with animations -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-primary-dark/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
      >
        <div class="max-w-7xl mx-auto px-4 py-6 space-y-2">
          <!-- Navigation Items avec icons -->
          <RouterLink
            v-for="(item, index) in navItems"
            :key="item.path"
            :to="item.path"
            @click="closeMenu"
            :style="{ animationDelay: `${index * 50}ms` }"
            class="group flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white rounded-xl transition-all duration-300 hover:bg-white/5 animate-slide-up"
          >
            <!-- Icon -->
            <div class="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-gradient-to-br group-hover:from-primary-orange/20 group-hover:to-primary-yellow/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
              </svg>
            </div>

            <!-- Text -->
            <span class="font-medium">{{ item.name }}</span>

            <!-- Active indicator -->
            <div
              v-if="route.path === item.path"
              class="ml-auto w-2 h-2 bg-primary-yellow rounded-full animate-pulse"
            ></div>

            <!-- Arrow on hover -->
            <svg
              class="ml-auto w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </RouterLink>

          <!-- Separator -->
          <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>

          <!-- CTA Button -->
          <RouterLink
            to="/quote"
            @click="closeMenu"
            class="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-orange/50"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>Demander un devis gratuit</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </RouterLink>

          <!-- Contact Info -->
          <div class="pt-4 flex items-center justify-center gap-6 text-white/60 text-sm">
            <a href="tel:+22606336696" class="flex items-center gap-2 hover:text-primary-yellow transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>+226 06 33 66 96</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Backdrop overlay for mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        @click="closeMenu"
        class="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
        style="top: 80px;"
      ></div>
    </Transition>
  </nav>
</template>

<style scoped>
/* Ensure proper stacking for mobile menu */
nav {
  will-change: transform;
}
</style>
