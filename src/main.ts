import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import pinia from './stores/pinia';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import "echarts";
import './assets/index.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Setup PrimeVue with theme configuration
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.app-dark'
    }
  }
});

// Global components
app.component('Toast', Toast);
// Use plugins and router
app.use(pinia)
app.use(ToastService);
app.use(router)

app.mount('#app')
