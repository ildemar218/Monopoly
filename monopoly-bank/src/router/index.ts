import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/login.vue';

const routes = [
  { path: '/', component: login }, // Página principal
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

