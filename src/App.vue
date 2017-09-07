<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#" v-html="title"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <!-- Elementos del menú -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item menu-item" v-for="(value, key) in menu" :key="key">
              <router-link class="nav-link" :to="value.to" v-html="value.nombre"></router-link>
            </li>
            <!-- Iconos de las redes -->
            <li class="nav-item" v-for="(value, key) in social" :key="key">
              <a class="nav-link" target="_blank" :href="'http://' + value.url + '/' + value.nombre" :style="'color: ' + value.color + ' !important'">
                <i :class="'fa fa-lg fa-' + value.font" aria-hidden="true"></i>
                <span class="d-lg-none">/{{value.nombre}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <pre class="m-5 card">
      <div class="card-body">
        {{$data}}
      </div>
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: '<i class="fa fa-bath" aria-hidden="true"></i> Template app',
        menu: [
          {
            nombre: "Home",
            to: "/"
          }, {
            nombre: "Historia",
            to: "historia"
          }, {
            nombre: "Fotos",
            to: "fotos"
          }, {
            nombre: '<i class="fa fa-lg fa-envelope-o" aria-hidden="true"></i> Contacto',
            to: "contacto"
          }
        ],
        social: [
          {
            nombre: "templateok",
            font: "facebook-official",
            url: "www.facebook.com",
            color: "#3954A1"
          }, {
            nombre: "template",
            font: "twitter",
            url: "www.twitter.com",
            color: "#56D7FE"
          }, {
            nombre: "templateok",
            font: "instagram",
            url: "www.instagram.com",
            color: "#C0328D"
          }
        ]
      }
    },
    mounted: function() {
      $(".navbar .menu-item").click(function() {
        $(".navbar-collapse").collapse("hide");
      });
    }
  }
</script>