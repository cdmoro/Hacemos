<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" :sticky="true" :class="[this.$route.meta.title.toLowerCase(), {'navbar-shrink': scrollTop > 10}]">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <!-- Elementos del menú -->
          <li class="nav-item" v-for="(item, key) in datos.menu" :key="key">
            <router-link class="nav-link" :to="item.to">
              <i v-if="item.icono" :class="'fa fa-lg fa-' + item.icono" aria-hidden="true"></i>
              {{ item.nombre }}
            </router-link>
          </li>
          <!-- Iconos de las redes -->
          <b-nav-item target="_blank" :href="'http://' + value.url + '/' + value.nombre" 
                      v-if="value.header" v-for="(value, key) in datos.social" :key="key">
            <i :class="'fa fa-lg fa-' + value.font" aria-hidden="true" :style="'color: ' + value.color + ' !important'"></i>
            <span class="d-lg-none" style="color:#FFF">/{{value.nombre}}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
    <footer>
      <div class="container text-center">
        <h5>¡Enterate de todo en nuestras redes sociales!</h5>
        <div class="row pt-2 pb-5 mt-4 justify-content-center">
          <div v-for="(value, i) in datos.social" :key="i" class="col-md-2 col-sm-4 col-xs-12">
            <a class="d-block m-3" target="_blank" :href="'http://' + value.url + '/' + value.nombre" :style="'color: ' + value.color + ' !important'">
              <i :class="'fa fa-2x fa-' + value.font" aria-hidden="true"></i>
              <div style="color:#FFF">{{value.nombre}}</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      conf: "src/conf.json",
      datos: [],
      scrollTop: 0
    };
  },
  mounted: function() {
    window.onscroll = () => {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    };
  },
  created: function() {
    axios
      .get(this.conf)
      .then(response => {
        this.datos = response.data;
      })
      .catch(function(error) {
        console.log(error)
      })

    this.$router.beforeEach((to, from, next) => {
      document.title = "Hacemos.AEFIP > " + to.meta.title
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>