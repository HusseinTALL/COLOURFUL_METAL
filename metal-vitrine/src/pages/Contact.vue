<script setup lang="ts">
import { ref } from 'vue';
import Hero from '../components/Hero.vue';
import { companyInfo } from '../data/content';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
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
      body: JSON.stringify(formData.value)
    });

    if (response.ok) {
      submitSuccess.value = true;
      formData.value = { name: '', email: '', phone: '', message: '' };
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
</script>

<template>
  <div>
    <Hero
      title="Contactez-nous"
      subtitle="Notre équipe est à votre écoute pour répondre à toutes vos questions"
      ctaText="Demander un devis"
      ctaLink="/quote"
    />

    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl mb-6">Envoyez-nous un message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
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
                  Téléphone
                </label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors"
                  placeholder="+123 456 789 000"
                />
              </div>

              <div>
                <label for="message" class="block text-text-primary mb-2 font-semibold">
                  Message <span class="text-primary-orange">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-primary-dark border border-text-secondary/30 rounded-custom text-text-primary focus:outline-none focus:border-primary-blue transition-colors resize-none"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>

              <div v-if="submitSuccess" class="p-4 bg-green-500/20 border border-green-500 rounded-custom text-green-400">
                Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
              </div>

              <div v-if="submitError" class="p-4 bg-red-500/20 border border-red-500 rounded-custom text-red-400">
                Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone.
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl mb-6">Informations de contact</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-text-primary mb-1">Adresse</h3>
                    <p class="text-text-secondary">{{ companyInfo.address }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-text-primary mb-1">Téléphone</h3>
                    <p class="text-text-secondary">{{ companyInfo.phone }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-text-primary mb-1">Email</h3>
                    <p class="text-text-secondary">{{ companyInfo.email }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-text-primary mb-1">Horaires</h3>
                    <p class="text-text-secondary">{{ companyInfo.hours }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="rounded-lg overflow-hidden shadow-custom h-64 bg-primary-dark/50 flex items-center justify-center">
              <p class="text-text-secondary">
                Google Maps intégré ici
              </p>
              <!-- Replace with actual Google Maps iframe:
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
