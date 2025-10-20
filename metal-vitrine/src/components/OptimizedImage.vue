<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
  src: string;
  alt: string;
  class?: string;
  placeholderColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  placeholderColor: '#E6EAF2'
});

const imageError = ref(false);
const imageLoaded = ref(false);

const handleError = () => {
  imageError.value = true;
};

const handleLoad = () => {
  imageLoaded.value = true;
};
</script>

<template>
  <div :class="['relative overflow-hidden', props.class]">
    <!-- Image principale -->
    <img
      v-if="!imageError"
      :src="src"
      :alt="alt"
      :class="[
        'w-full h-full object-cover transition-opacity duration-300',
        imageLoaded ? 'opacity-100' : 'opacity-0'
      ]"
      @error="handleError"
      @load="handleLoad"
      loading="lazy"
    />

    <!-- Placeholder avec gradient si l'image n'existe pas ou ne charge pas -->
    <div
      v-if="imageError || !imageLoaded"
      :class="[
        'absolute inset-0 flex items-center justify-center',
        imageError ? 'opacity-100' : 'opacity-0'
      ]"
      :style="{
        background: `linear-gradient(135deg, ${placeholderColor} 0%, #ffffff 100%)`
      }"
    >
      <svg
        class="w-16 h-16 text-text-secondary/30"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>

    <!-- Loading spinner pendant le chargement -->
    <div
      v-if="!imageLoaded && !imageError"
      class="absolute inset-0 flex items-center justify-center bg-border-light"
    >
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-orange"></div>
    </div>
  </div>
</template>
