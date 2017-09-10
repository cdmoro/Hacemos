<template>
  <div id="app">
    <!-- <navbar menu="menu"></navbar> -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="fa fa-bath" aria-hidden="true"></i> {{title}}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <!-- Elementos del menú -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item menu-item" v-for="(item, key) in menu" :key="key">
              <router-link class="nav-link" :to="item.to" data-toggle="collapse" data-target=".navbar-collapse.show">
                <i v-if="item.icono" :class="'fa fa-lg fa-' + item.icono" aria-hidden="true"></i>
                {{ item.nombre }}
              </router-link>
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
  computed: {
    filteredItems() {
      return this.menu.filter(item => {
         return item.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) > -1
      })
    }
  },
  data() {
    return {
      title: 'Template app',
      filtro: "",
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
          nombre: 'Contacto',
          to: "contacto",
          icono: "envelope-o"
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
  }
}
</script>