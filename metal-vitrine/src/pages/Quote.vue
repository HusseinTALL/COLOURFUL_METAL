<script setup lang="ts">
import { ref } from 'vue';
import Hero from '../components/Hero.vue';
import { products } from '../data/content';

const formData = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  details: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

// Replace with your actual Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitSuccess.value = false;
  submitError.value = false;

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData.value,
        subject: 'Nouvelle demande de devis'
      })
    });

    if (response.ok) {
      submitSuccess.value = true;
      formData.value = {
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        details: ''
      };
    } else {
      submitError.value = true;
    }
  } catch (error) {
    console.error('Form submission error:', error);
    submitError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Get unique product names
const productOptions = products.map(p => p.name);
</script>

<template>
  <div>
    <Hero
      title="Demande de Devis"
      subtitle="Obtenez un devis personnalisé pour vos besoins en matériaux métalliques"
      ctaText="Voir nos produits"
      ctaLink="/products"
    />

    <section class="py-16 px-4">
      <div class="max-w-3xl mx-auto">
        <div class="card">
          <div class="text-center mb-8">
            <h2 class="text-3xl mb-4">Formulaire de demande de devis</h2>
            <p class="text-text-secondary">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-text-primary mb-2 font-semibold">
                  Nom complet <span class="text-primary-orange">*</span>
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label for="company" class="block text-text-primary mb-2 font-semibold">
                  Entreprise
                </label>
                <input
                  id="company"
                  v-model="formData.company"
                  type="text"
                  class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
                  placeholder="Nom de l'entreprise"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="email" class="block text-text-primary mb-2 font-semibold">
                  Email <span class="text-primary-orange">*</span>
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label for="phone" class="block text-text-primary mb-2 font-semibold">
                  Téléphone <span class="text-primary-orange">*</span>
                </label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
                  placeholder="+123 456 789 000"
                />
              </div>
            </div>

            <div>
              <label for="product" class="block text-text-primary mb-2 font-semibold">
                Produit souhaité <span class="text-primary-orange">*</span>
              </label>
              <select
                id="product"
                v-model="formData.product"
                required
                class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
              >
                <option value="" disabled>Sélectionnez un produit</option>
                <option v-for="product in productOptions" :key="product" :value="product">
                  {{ product }}
                </option>
                <option value="autre">Autre (préciser dans les détails)</option>
              </select>
            </div>

            <div>
              <label for="quantity" class="block text-text-primary mb-2 font-semibold">
                Quantité estimée <span class="text-primary-orange">*</span>
              </label>
              <input
                id="quantity"
                v-model="formData.quantity"
                type="text"
                required
                class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
                placeholder="Ex: 1000 m², 50 unités, etc."
              />
            </div>

            <div>
              <label for="details" class="block text-text-primary mb-2 font-semibold">
                Détails de votre projet <span class="text-primary-orange">*</span>
              </label>
              <textarea
                id="details"
                v-model="formData.details"
                required
                rows="6"
                class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors resize-none"
                placeholder="Décrivez vos besoins spécifiques, dimensions, délais, etc."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande de devis' }}
            </button>

            <div v-if="submitSuccess" class="p-4 bg-green-500/20 border border-green-500 rounded-custom text-green-400">
              Merci ! Votre demande de devis a été envoyée avec succès. Notre équipe commerciale vous contactera dans les 24 heures.
            </div>

            <div v-if="submitError" class="p-4 bg-red-500/20 border border-red-500 rounded-custom text-red-400">
              Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone.
            </div>
          </form>
        </div>

        <!-- Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="text-center p-6 bg-primary-dark/50 rounded-lg">
            <div class="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-bold text-text-primary mb-2">Réponse rapide</h3>
            <p class="text-text-secondary text-sm">Devis dans les 24h</p>
          </div>

          <div class="text-center p-6 bg-primary-dark/50 rounded-lg">
            <div class="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-bold text-text-primary mb-2">Prix compétitifs</h3>
            <p class="text-text-secondary text-sm">Meilleur rapport qualité-prix</p>
          </div>

          <div class="text-center p-6 bg-primary-dark/50 rounded-lg">
            <div class="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="font-bold text-text-primary mb-2">Accompagnement</h3>
            <p class="text-text-secondary text-sm">Conseil personnalisé</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
