<script setup lang="ts">
import Hero from '../components/Hero.vue';
import { companyInfo } from '../data/content';
</script>

<template>
  <div>
    <Hero
      title="À propos de nous"
      subtitle="Découvrez notre histoire, nos valeurs et notre expertise"
      ctaText="Nous contacter"
      ctaLink="/contact"
    />

    <!-- Company Story -->
    <section class="py-16 px-4 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl mb-6">Notre Histoire</h2>
          <p class="text-text-secondary mb-4">
            Fondée en 1985, {{ companyInfo.name }} est devenue un acteur majeur dans la production
            de matériaux de construction métalliques en Afrique. Avec plus de 35 ans d'expérience,
            nous avons su développer un savoir-faire unique et une expertise reconnue dans l'industrie.
          </p>
          <p class="text-text-secondary mb-4">
            {{ companyInfo.about }}
          </p>
          <p class="text-text-secondary">
            Notre engagement envers la qualité et l'innovation nous a permis de tisser des relations
            durables avec nos clients, distributeurs et partenaires à travers le continent.
          </p>
        </div>
        <div class="rounded-lg overflow-hidden shadow-custom-hover">
          <img
            src="/assets/images/factory-exterior.jpg"
            alt="Notre usine"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 px-4 bg-primary-dark/50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <div class="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl mb-4">Notre Mission</h3>
            <p class="text-text-secondary">
              {{ companyInfo.mission }}
            </p>
          </div>

          <div class="card">
            <div class="w-16 h-16 bg-primary-orange rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl mb-4">Notre Vision</h3>
            <p class="text-text-secondary">
              {{ companyInfo.vision }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl mb-4">Nos Valeurs</h2>
        <p class="text-text-secondary max-w-3xl mx-auto">
          Les principes qui guident notre travail au quotidien
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="w-20 h-20 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Qualité</h3>
          <p class="text-text-secondary text-sm">
            Nous ne faisons aucun compromis sur la qualité de nos produits et services.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="w-20 h-20 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Innovation</h3>
          <p class="text-text-secondary text-sm">
            Nous investissons continuellement dans de nouvelles technologies et méthodes de production.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="w-20 h-20 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Engagement Client</h3>
          <p class="text-text-secondary text-sm">
            La satisfaction de nos clients est au cœur de toutes nos décisions.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 px-4 bg-primary-dark/50">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl mb-4">Notre Équipe</h2>
        <p class="text-text-secondary mb-8 max-w-3xl mx-auto">
          Plus de 150 professionnels dévoués travaillent chaque jour pour vous offrir les meilleurs
          produits et services. De la production à la livraison, notre équipe met son expertise à votre service.
        </p>
        <div class="rounded-lg overflow-hidden shadow-custom-hover max-w-4xl mx-auto">
          <img
            src="/assets/images/team.jpg"
            alt="Notre équipe"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>
