import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Historia from './components/Historia.vue'
import Fotos from './components/Fotos.vue'
import Contacto from './components/Contacto.vue'
import e404 from './components/404.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, meta: {title: 'Home'} },
  { path: '/historia', component: Historia, meta: {title: 'Historia'} },
  { path: '/fotos', component: Fotos, meta: {title: 'Fotos'} },
  { path: '/contacto', component: Contacto, meta: {title: 'Contacto'} },
  { path: '*', component: e404, meta: {title: 'Página no encontrada'}}
]

const router = new VueRouter({
  routes // forma corta para routes: routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})