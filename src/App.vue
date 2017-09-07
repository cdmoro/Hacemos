<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#" v-html="title"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="item in menu" :key="item.to" v-on:click="cerrarMenu">
              <router-link class="nav-link" :to="item.to" v-html="item.nombre"></router-link>
            </li>
            <li class="nav-item" v-for="item in social" :key="item.nombre">
              <a class="nav-link" target="_blank" :href="'http://' + item.url + '/' + item.nombre" :style="'color: ' + item.color + ' !important'">
                <i :class="'fa fa-lg fa-' + item.font" aria-hidden="true"></i>
                 <!-- /{{item.nombre}} -->
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
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
  methods: {
    cerrarMenu() {
      $('.navbar-collapse').collapse('hide');
    }
  }

}
</script>