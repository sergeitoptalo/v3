import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from './dashboard.component.vue';

export const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
];
