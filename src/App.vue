<template>
  <div id="app">
    <nav id="mainNav" :class="'navbar fixed-top navbar-expand-lg navbar-dark ' + $route.meta.title.toLowerCase()">
      <div class="container-fluid">
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <!-- Elementos del menú -->
          <ul class="navbar-nav ml-auto">
            <li v-if="item.visible" class="nav-item menu-item" v-for="(item, key) in datos.menu" :key="key">
              <router-link class="nav-link" :to="item.to" :click="menu()">
                <i v-if="item.icono" :class="'fa fa-lg fa-' + item.icono" aria-hidden="true"></i>
                {{ item.nombre }}
              </router-link>
            </li>
            <!-- Iconos de las redes -->
            <li v-if="value.header" class="nav-item" v-for="(value, key) in datos.social" :key="key">
              <a class="nav-link" target="_blank" :href="'http://' + value.url + '/' + value.nombre" :style="'color: ' + value.color + ' !important'">
                <i :class="'fa fa-lg fa-' + value.font" aria-hidden="true"></i>
                <span class="d-lg-none" style="color:#FFF">/{{value.nombre}}</span>
              </a>
            </li>
          </ul>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span> <span class="small">MENÚ</span>
        </button>
      </div>
    </nav>
    <router-view></router-view>
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
    <!-- <pre class="m-5 card">
            <div class="card-body">
              {{$data}}
            </div>
          </pre> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      conf: 'src/conf.json',
      datos: []
    }
  },
  mounted: function() {
    $(window).scroll(function() {
      if ($("#mainNav").offset().top > 10)
        $("#mainNav").addClass("navbar-shrink")
      else
        $("#mainNav").removeClass("navbar-shrink")
    })
  },
  created: function() {    
    this.fetchData()
  },
  methods: {
    menu: function() {
      $('.navbar-collapse').collapse('hide');
    },
    fetchData: function() {
      var xhr = new XMLHttpRequest()
      var self = this

      xhr.open('GET', self.conf)
      xhr.onload = function() {
        self.datos = JSON.parse(xhr.response)
      }
      xhr.send()
    }
  }
}
</script>