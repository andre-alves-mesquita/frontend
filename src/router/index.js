import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import GerenciarUpload from '../views/GerenciarUpload.vue'
import Cadastro from '../views/Cadastro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/gerenciar-upload',
      name: 'gerenciar-upload',
      component: GerenciarUpload
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    }
  ]
})

export default router
