import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Nosotros from './components/Nosotros.vue'
import Fotos from './components/Fotos.vue'
import Contacto from './components/Contacto.vue'
import e404 from './components/404.vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'
import 'bootstrap'

Vue.use(VueRouter)
Vue.use(VueParticles)

const routes = [
  { path: '/', component: Home, meta: {title: 'Home'} },
  { path: '/nosotros', component: Nosotros, meta: {title: 'Nosotros'} },
  { path: '/fotos', component: Fotos, meta: {title: 'Fotos'} },
  { path: '/contacto', component: Contacto, meta: {title: 'Contacto', icono: 'envelope-o'} },
  { path: '*', component: e404, meta: {title: 'Página no encontrada'}}
]

const router = new VueRouter({
  routes, // forma corta para routes: routes
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

const vm = new Vue({
  el: '#app',
  router,
  data: {
    nombreApp: "Demo",
    rutas: routes
  },
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  document.title = vm.nombreApp + " > " + to.meta.title
  next()
})