<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Hero from '../components/Hero.vue';
import ProductCard from '../components/ProductCard.vue';
import { companyInfo, products } from '../data/content';

const featuredProducts = products.slice(0, 6);
</script>

<template>
  <div class="overflow-x-hidden">
    <Hero
      :title="companyInfo.name"
      :subtitle="companyInfo.slogan"
      ctaText="Découvrir nos produits"
      ctaLink="/products"
    />

    <!-- Stats Section - Juste après le Hero pour impact -->
    <section class="py-20 px-4 bg-white relative">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-primary-orange/5 hover:to-primary-yellow/5 transition-all duration-500">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div class="text-6xl font-bold bg-gradient-to-r from-primary-dark to-primary-blue bg-clip-text text-transparent mb-3">35+</div>
            <div class="text-text-primary font-semibold mb-2">Années d'expérience</div>
            <div class="text-text-secondary text-sm">Excellence et savoir-faire depuis 1985</div>
          </div>

          <div class="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-primary-orange/5 hover:to-primary-yellow/5 transition-all duration-500">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-dark to-primary-blue rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div class="text-6xl font-bold bg-gradient-to-r from-primary-dark to-primary-blue bg-clip-text text-transparent mb-3">500+</div>
            <div class="text-text-primary font-semibold mb-2">Clients satisfaits</div>
            <div class="text-text-secondary text-sm">Partenaires de confiance à travers l'Afrique</div>
          </div>

          <div class="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-primary-orange/5 hover:to-primary-yellow/5 transition-all duration-500">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <div class="text-6xl font-bold bg-gradient-to-r from-primary-dark to-primary-blue bg-clip-text text-transparent mb-3">50+</div>
            <div class="text-text-primary font-semibold mb-2">Produits disponibles</div>
            <div class="text-text-secondary text-sm">Large gamme de matériaux métalliques</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section avec design moderne -->
    <section class="py-24 px-4 bg-cream relative overflow-hidden">
      <!-- Décoration background -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Contenu texte -->
          <div class="space-y-6">
            <div class="inline-block">
              <span class="text-primary-orange font-bold text-sm uppercase tracking-wider bg-primary-orange/10 px-4 py-2 rounded-full">À propos de nous</span>
            </div>

            <h2 class="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
              Leader de la fabrication métallique
              <span class="text-primary-orange">depuis 35 ans</span>
            </h2>

            <p class="text-text-secondary text-lg leading-relaxed">
              {{ companyInfo.about }}
            </p>

            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="flex items-start gap-3">
                <div class="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-primary-dark">Qualité garantie</div>
                  <div class="text-sm text-text-secondary">Normes internationales</div>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-12 h-12 bg-primary-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-primary-dark">Livraison rapide</div>
                  <div class="text-sm text-text-secondary">Partout en Afrique</div>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <RouterLink
                to="/about"
                class="group inline-flex items-center gap-3 bg-primary-dark hover:bg-primary-orange text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>En savoir plus</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </RouterLink>
            </div>
          </div>

          <!-- Image ou visuel -->
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/factory-exterior.jpg"
                alt="Notre usine"
                class="w-full h-[500px] object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>

              <!-- Badge flottant -->
              <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-bold text-primary-dark text-lg">Usine moderne</div>
                    <div class="text-text-secondary text-sm">Équipements de pointe pour votre satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Élément décoratif -->
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-primary-yellow rounded-3xl -z-10 blur-xl opacity-50"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-orange rounded-3xl -z-10 blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products avec titre amélioré -->
    <section class="py-24 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-primary-orange font-bold text-sm uppercase tracking-wider bg-primary-orange/10 px-4 py-2 rounded-full inline-block mb-4">
            Notre Catalogue
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Nos Produits <span class="text-primary-orange">Phares</span>
          </h2>
          <p class="text-text-secondary text-lg max-w-2xl mx-auto">
            Découvrez notre sélection de produits métalliques de haute qualité, conformes aux normes internationales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="text-center">
          <RouterLink
            to="/products"
            class="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-dark to-primary-blue hover:from-primary-orange hover:to-primary-yellow text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>Voir tous nos produits</span>
            <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Call to Action - Design premium -->
    <section class="relative py-24 px-4 bg-gradient-to-br from-primary-dark via-primary-blue to-footer-dark overflow-hidden">
      <!-- Motif background -->
      <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 30px 30px;"></div>

      <!-- Bulles décoratives -->
      <div class="absolute top-10 left-10 w-64 h-64 bg-primary-orange/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-64 h-64 bg-primary-yellow/20 rounded-full blur-3xl"></div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <svg class="w-5 h-5 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-white/90 text-sm font-medium">Service personnalisé</span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Besoin d'un devis<br/>
          <span class="bg-gradient-to-r from-primary-orange via-primary-yellow to-primary-orange bg-clip-text text-transparent">personnalisé ?</span>
        </h2>

        <p class="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Notre équipe d'experts est à votre disposition pour étudier vos besoins et vous proposer les meilleures solutions
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RouterLink
            to="/quote"
            class="group relative inline-flex items-center gap-3 bg-white text-primary-dark px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-110 overflow-hidden"
          >
            <svg class="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="relative z-10">Demander un devis gratuit</span>
            <div class="absolute inset-0 bg-gradient-to-r from-primary-orange/0 via-primary-orange/10 to-primary-orange/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </RouterLink>

          <a
            href="tel:+22606336696"
            class="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-5 rounded-xl font-semibold text-lg border-2 border-white/30 hover:border-white/60 transition-all duration-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>+226 06 33 66 96</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
