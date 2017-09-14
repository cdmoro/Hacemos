<template>
  <div id="app">
    <!-- <navbar menu="menu"></navbar> -->
    <nav id="mainNav" class="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="d-none d-sm-inline-block fa fa-bandcamp" aria-hidden="true"></i> {{title}}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <!-- Elementos del menú -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item menu-item" v-for="(item, key) in menu" :key="key">
              <router-link class="nav-link" :to="item.to">
                <i v-if="item.icono" :class="'fa fa-lg fa-' + item.icono" aria-hidden="true"></i>
                {{ item.nombre }}
              </router-link>
            </li>
            <!-- Iconos de las redes -->
            <li v-if="value.header" class="nav-item" v-for="(value, key) in social" :key="key">
              <a class="nav-link" target="_blank" :href="'http://' + value.url + '/' + value.nombre" :style="'color: ' + value.color + ' !important'">
                <i :class="'fa fa-lg fa-' + value.font" aria-hidden="true"></i>
                <span class="d-lg-none" style="color:#FFF">/{{value.nombre}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <video width="320" height="240" controls>
                    <source src="assets/manifestacion.mp4" type="video/mp4">
                    Tu explorador no soporta videos
                </video> 
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
      title: '[Título de la página]',
      filtro: "",
      menu: [
        {
          nombre: "Home",
          to: "/"
        }, {
          nombre: "Nosotros",
          to: "nosotros"
        }, {
          nombre: "Gremiales",
          to: "gremiales"
        }, {
          nombre: "Sociales",
          to: "sociales"
        }/*, {
          nombre: "Fotos",
          to: "fotos"
        }*/, {
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
          color: "#3954A1",
          header: true
        }, {
          nombre: "template",
          font: "twitter",
          url: "www.twitter.com",
          color: "#56D7FE",
          header: true
        }, {
          nombre: "templateok",
          font: "instagram",
          url: "www.instagram.com",
          color: "#C0328D"
        }, {
          nombre: "templateok",
          font: "youtube-play",
          url: "www.youtube.com",
          color: "#FF0000",
          header: true
        }, {
          nombre: "templateok",
          font: "wordpress",
          url: "www.wordpress.com",
          color: "#1D8BBE"
        }
      ]
    }
  },
  mounted: function() {
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 10) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
    });

    if ($(".router-link-exact-active").text().trim() == "Home")
      $(".navbar").removeClass("bg-dark").addClass("bg-transparent");
    else
      $(".navbar").removeClass("bg-transparent").addClass("bg-dark");

    $(".menu-item a").click(function() {
      $('.navbar-collapse').collapse('hide');
      if ($(this).text().trim() == "Home")
        $(".navbar").removeClass("bg-dark").addClass("bg-transparent");
      else
        $(".navbar").removeClass("bg-transparent").addClass("bg-dark");
    })
  }
}
</script>