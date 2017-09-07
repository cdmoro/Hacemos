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
              <router-link class="nav-link" :to="item.to" v-text="item.nombre"></router-link>
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