<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <a class="mr-auto navbar-brand" href="#">Navbar</a> -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="item in menu" :key="item">
            <a class="nav-link" href="#" v-text="item"></a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Bienvenido a tu aplicación Vue.js',
      menu: ["Home", "Historia", "Fotos"]
    }
  }
}
</script>