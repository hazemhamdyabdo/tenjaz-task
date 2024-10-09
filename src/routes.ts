export const routes = [
  { path: '/', name: 'Home', component: () => import('./views/Home.vue'), meta: { title: 'Home' } },
  { path: '/users', name: 'Users', component: () => import('./views/Users.vue'), meta: { title: 'Users' } },
  // { path: '/dashboard', component: () => import('./views/Home.vue'), meta: { title: 'dashboard' } },
  { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue'), meta: { title: 'Page not found' } },
]
