<template>
  <section id="gremiales">
    <div class="container">      
      <div class="row justify-content-md-center post-wrapper">
        <div class="col-md-10 col-xs-12">
          <h2>{{$route.meta.title}}</h2>
          <h4 class="mb-5 row align-items-center">
            <div class="d-none d-md-block col-auto">
              <i class="fa fa-2x fa-youtube-play" aria-hidden="true" style="color: rgb(255, 0, 0);"></i>
            </div>
            <div class="col">
              Estos son los últimos videos de nuestro canal de YouTube
            </div>
            <div class="col-auto">
              <a href="https://www.youtube.com" class="btn btn-danger">
                <i class="fa fa-video-camera" aria-hidden="true"></i>
                Ir al canal
              </a>
            </div>
          </h4>
          <template v-for="i in 3">
            <div class="post mb-5" :key="i">
              <h2 class="post-title">{{videos[i-1].title}}</h2>
              <iframe width="100%" height="400"
                :src="'https://www.youtube.com/embed/' + videos[i-1].id">
              </iframe> 
              <div class="post-date text-muted">Subido el {{videos[i-1].fecha}}</div>
              <div class="text-muted mt-3 mb-3">{{videos[i-1].desc}}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          "id": "fKe4L3-c2GI",
          "fecha": "14/09/2017",
          "title": "Día del Maestro - Canal Encuentro",
          "desc": ""
        },
        {
          "id": "UZ6hT-lX8Kg",
          "fecha": "13/09/2017",
          "title": "Mundo Bayer: Mi escuela (capítulo completo) - Canal Encuentro",
          "desc": "La voz, el relato y el archivo personal de Osvaldo Bayer constituyen un legado invalorable para el patrimonio cultural del país. Mundo Bayer repasa la obra y trayectoria del historiador, acercándonos al anecdotario, las investigaciones y el relato histórico de la Argentina, desde el activo punto de vista de su protagonista. Sus fotos personales, las primeras ediciones, los regalos que recibió y sus recuerdos serán parte de esta interesante propuesta educativa."
        },
        {
          "id": "W3_Qqxo_VEE",
          "fecha": "03/05/2017",
          "title": "Sistemas. Cuerpo Humano: Nervioso (capítulo completo) - Canal Encuentro HD",
          "desc": ""
        }
      ]
    }
  }
}
</script>

<style>
  iframe {
    border: none;
  }
</style>