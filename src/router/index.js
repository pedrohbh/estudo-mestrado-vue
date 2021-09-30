import { createRouter, createWebHistory } from 'vue-router'
import LvLogin from '../componentes/LvLogin.vue'
const routes = [
  {
    path: '/',
    name: 'LvLogin',
    component: LvLogin
  },
  {
    path: '/registrar',
    name: 'LvRegistro',
    component: () => import(/* webpackChunkName: "registro" */ '../componentes/LvRegistro.vue')
  },
  {
    path: '/notas',
    name: 'LvPainel',
    component: () => import(/* webpackChunkName: "painel" */ '../componentes/LvPainel.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router