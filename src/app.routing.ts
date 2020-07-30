import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { dashboardRoutes } from './dashboard/dashboard.routing';

const routes: Array<RouteRecordRaw> = [
  ...dashboardRoutes,
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './about/about.component.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
