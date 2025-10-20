<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import type { GalleryImage } from '../data/content';

interface Props {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  close: [];
}>();

const currentIndex = ref(props.initialIndex);
const imageLoaded = ref(false);
const isZoomed = ref(false);

watch(() => props.initialIndex, (newIndex) => {
  currentIndex.value = newIndex;
  imageLoaded.value = false;
  isZoomed.value = false;
});

watch(() => currentIndex.value, () => {
  imageLoaded.value = false;
  isZoomed.value = false;
});

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    isZoomed.value = false;
  }
});

const currentImage = computed(() => props.images[currentIndex.value]);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.isOpen) return;

  switch (e.key) {
    case 'ArrowRight':
      nextImage();
      break;
    case 'ArrowLeft':
      prevImage();
      break;
    case 'Escape':
      emit('close');
      break;
    case ' ':
      e.preventDefault();
      toggleZoom();
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        @click="emit('close')"
      >
        <!-- Header Bar -->
        <div class="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-4">
          <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Counter & Title -->
            <div class="text-white">
              <div class="text-sm text-white/60 mb-1">
                Photo {{ currentIndex + 1 }} sur {{ images.length }}
              </div>
              <div v-if="currentImage" class="font-semibold text-lg">
                {{ currentImage.alt }}
              </div>
            </div>

            <!-- Close button -->
            <button
              class="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary-dark transition-all duration-300 hover:scale-110"
              @click="emit('close')"
              aria-label="Fermer"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          v-if="images.length > 1"
          class="group absolute left-4 md:left-8 z-20 w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary-dark transition-all duration-300 hover:scale-110 hover:-translate-x-1"
          @click.stop="prevImage"
          aria-label="Image précédente"
        >
          <svg class="w-7 h-7 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          v-if="images.length > 1"
          class="group absolute right-4 md:right-8 z-20 w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary-dark transition-all duration-300 hover:scale-110 hover:translate-x-1"
          @click.stop="nextImage"
          aria-label="Image suivante"
        >
          <svg class="w-7 h-7 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Image Container -->
        <div
          v-if="currentImage"
          class="relative max-w-7xl max-h-[85vh] mx-4 md:mx-16"
          @click.stop
        >
          <!-- Loading spinner -->
          <Transition
            enter-active-class="transition duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="!imageLoaded"
              class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl"
            >
              <div class="w-16 h-16 border-4 border-primary-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
          </Transition>

          <!-- Main Image -->
          <Transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <img
              :key="currentImage.id"
              :src="currentImage.src"
              :alt="currentImage.alt"
              :class="[
                'max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300',
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in hover:scale-[1.02]'
              ]"
              @load="imageLoaded = true"
              @click="toggleZoom"
            />
          </Transition>
        </div>

        <!-- Bottom Controls -->
        <div class="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <!-- Category Badge -->
            <div v-if="currentImage" class="flex items-center gap-3">
              <span class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full">
                <div class="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
                {{ currentImage.category === 'production' ? 'Production' : currentImage.category === 'factory' ? 'Usine' : 'Projet' }}
              </span>
            </div>

            <!-- Keyboard Shortcuts -->
            <div class="hidden md:flex items-center gap-6 text-white/60 text-xs">
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">←</kbd>
                <kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">→</kbd>
                <span>Naviguer</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">Espace</kbd>
                <span>Zoom</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">Esc</kbd>
                <span>Fermer</span>
              </div>
            </div>

            <!-- Zoom Toggle Button -->
            <button
              @click.stop="toggleZoom"
              class="group px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300 flex items-center gap-2 text-sm font-semibold"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  v-if="!isZoomed"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                />
              </svg>
              <span>{{ isZoomed ? 'Dézoomer' : 'Zoomer' }}</span>
            </button>
          </div>
        </div>

        <!-- Thumbnail Strip (optional, for desktop) -->
        <div
          v-if="images.length > 1"
          class="hidden lg:block absolute bottom-24 left-0 right-0 z-20"
        >
          <div class="max-w-4xl mx-auto px-4">
            <div class="flex items-center gap-2 overflow-x-auto scrollbar-hide justify-center">
              <button
                v-for="image in images.slice(Math.max(0, currentIndex - 3), Math.min(images.length, currentIndex + 4))"
                :key="image.id"
                @click.stop="currentIndex = images.findIndex(img => img.id === image.id)"
                :class="[
                  'relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300',
                  images.findIndex(img => img.id === image.id) === currentIndex
                    ? 'border-primary-orange scale-110 shadow-lg shadow-primary-orange/50'
                    : 'border-white/20 hover:border-white/50 hover:scale-105 opacity-60 hover:opacity-100'
                ]"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                />
                <div
                  v-if="images.findIndex(img => img.id === image.id) === currentIndex"
                  class="absolute inset-0 bg-primary-orange/20"
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Zoom cursor */
.cursor-zoom-in {
  cursor: zoom-in;
}

.cursor-zoom-out {
  cursor: zoom-out;
}

/* Keyboard shortcuts */
kbd {
  font-family: ui-monospace, monospace;
  font-size: 0.75rem;
}
</style>
