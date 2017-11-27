import Vue from 'vue'

import VueRouter from 'vue-router'
import VueImg from 'v-img'
import VueProgressBar from 'vue-progressbar'
import BootstrapVue from 'bootstrap-vue'
// import VueParticles from 'vue-particles'

import App from './App.vue'
import Home from './components/Home.vue'
import Nosotros from './components/Nosotros.vue'
import Fotos from './components/Fotos.vue'
import Contacto from './components/Contacto.vue'
import Gremiales from './components/Gremiales.vue'
import Sociales from './components/Sociales.vue'
import e404 from './components/404.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
// Vue.use(VueParticles)
Vue.use(VueImg)
Vue.use(VueProgressBar, { color: 'rgb(143, 255, 199)', failedColor: 'red', height: '4px' })

const routes = [
  { path: '/', component: Home, meta: {title: 'Inicio'} },
  { path: '/nosotros', component: Nosotros, meta: {title: 'Nosotros'} },
  { path: '/fotos', component: Fotos, meta: {title: 'Fotos'} },
  { path: '/gremiales', component: Gremiales, meta: {title: 'Gremiales'} },
  { path: '/sociales', component: Sociales, meta: {title: 'Sociales'} },
  { path: '/contacto', component: Contacto, meta: {title: 'Contacto', icono: 'envelope-o'} },
  { path: '*', component: e404, meta: {title: 'Página no encontrada'}}
]

const router = new VueRouter({
  mode: 'history',
  routes, // forma corta para routes: routes
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

const vm = new Vue({
  el: '#app',
  router,
  data: {
    nombreApp: "Template",
    rutas: routes
  },
  render: h => h(App)
})