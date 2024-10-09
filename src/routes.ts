export const routes = [
  { path: '/', component: () => import('./views/Home.vue'), meta: { title: 'Home' } },
  { path: '/dashboard', component: () => import('./views/Home.vue'), meta: { title: 'dashboard' } },
  { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue'), meta: { title: 'Page not found' } },
]
