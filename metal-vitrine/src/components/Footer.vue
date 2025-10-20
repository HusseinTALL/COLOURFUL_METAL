<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { companyInfo } from '../data/content';
</script>

<template>
  <footer class="bg-footer-dark border-t border-border-light/20 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">{{ companyInfo.name }}</h3>
          <p class="text-white/70 text-sm mb-4">{{ companyInfo.slogan }}</p>
          <div class="flex space-x-4">
            <a href="#" class="text-white/70 hover:text-primary-yellow transition-colors" aria-label="Facebook">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-white/70 hover:text-primary-yellow transition-colors" aria-label="LinkedIn">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Liens rapides</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/" class="text-white/70 hover:text-primary-yellow transition-colors text-sm">
                Accueil
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-white/70 hover:text-primary-yellow transition-colors text-sm">
                À propos
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/products" class="text-white/70 hover:text-primary-yellow transition-colors text-sm">
                Produits
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/gallery" class="text-white/70 hover:text-primary-yellow transition-colors text-sm">
                Galerie
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-white/70 hover:text-primary-yellow transition-colors text-sm">
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Contact</h3>
          <ul class="space-y-2 text-white/70 text-sm">
            <li class="flex items-start">
              <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>{{ companyInfo.address }}</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-2 flex-shrink-0 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>{{ companyInfo.phone }}</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-2 flex-shrink-0 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>{{ companyInfo.email }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-border-light/20 mt-8 pt-8 text-center text-white/60 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} {{ companyInfo.name }}. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
