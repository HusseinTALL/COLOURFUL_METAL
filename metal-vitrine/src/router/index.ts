import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: { title: 'Accueil - Métal Industries' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'),
    meta: { title: 'À propos - Métal Industries' }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../pages/Products.vue'),
    meta: { title: 'Nos Produits - Métal Industries' }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../pages/Gallery.vue'),
    meta: { title: 'Galerie - Métal Industries' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue'),
    meta: { title: 'Contact - Métal Industries' }
  },
  {
    path: '/quote',
    name: 'Quote',
    component: () => import('../pages/Quote.vue'),
    meta: { title: 'Demande de Devis - Métal Industries' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string || 'Métal Industries';
  next();
});

export default router;
