<script setup lang="ts">
import { ref, computed } from 'vue';
import Hero from '../components/Hero.vue';
import ProductCard from '../components/ProductCard.vue';
import { products } from '../data/content';

const categories = ['Tous', 'Tôles', 'Tubes & Profilés', 'Grilles & Crochets', 'Vis & Attaches'];
const selectedCategory = ref('Tous');

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return products;
  }
  return products.filter(product => product.category === selectedCategory.value);
});
</script>

<template>
  <div>
    <Hero
      title="Nos Produits"
      subtitle="Une gamme complète de matériaux métalliques pour tous vos projets"
      ctaText="Demander un devis"
      ctaLink="/quote"
    />

    <!-- Category Filter -->
    <section class="py-8 px-4 bg-primary-dark/50 sticky top-16 z-40 border-b border-text-secondary/20">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-custom transition-all duration-custom font-semibold',
              selectedCategory === category
                ? 'bg-primary-blue text-white shadow-custom'
                : 'bg-primary-dark text-text-secondary hover:bg-primary-blue/20 hover:text-primary-blue'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8">
          <p class="text-text-secondary">
            {{ filteredProducts.length }} produit{{ filteredProducts.length > 1 ? 's' : '' }}
            {{ selectedCategory !== 'Tous' ? `dans la catégorie "${selectedCategory}"` : 'au total' }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <div v-if="filteredProducts.length === 0" class="text-center py-12">
          <p class="text-text-secondary text-lg">
            Aucun produit trouvé dans cette catégorie.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 px-4 bg-primary-dark/50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
        <p class="text-text-secondary mb-8 text-lg">
          Contactez-nous pour discuter de vos besoins spécifiques. Nous pouvons réaliser des produits sur mesure.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/contact" class="btn">
            Nous contacter
          </a>
          <a href="/quote" class="btn bg-primary-orange hover:bg-primary-blue">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
