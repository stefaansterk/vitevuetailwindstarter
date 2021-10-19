import Starter from './Starter.vue';
import VueRouter from 'vue-router';

export const routes = [{ path: '/', component: Starter }];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
