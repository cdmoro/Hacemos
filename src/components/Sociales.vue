<template>
  <section id="gremiales">
    <div class="container">      
      <div class="row justify-content-md-center post-wrapper">
        <div class="col-md-10 col-xs-12">
          <h4 class="mb-5">Estos son los últimos videos de nuestro canal de YouTube</h4>
          <template v-for="i in 3">
            <div class="post mb-5" :key="i">
              <div class="post-date text-muted">Subido el {{videos[i-1].fecha}}</div>
              <h2 class="post-title">{{videos[i-1].title}}</h2>
              <iframe width="100%" height="400"
                :src="'https://www.youtube.com/embed/' + videos[i-1].id">
              </iframe> 
              <div class="text-muted mt-3 mb-3">{{videos[i-1].desc}}</div>
              <!-- <h2 class="post-title">{{videos[i].title}}</h2>
              <div>
                <img class="w-100" :src="'http://via.placeholder.com/500x350/' + colores[i] + '/333333?text=Imagen+post'">
              </div>
              <div class="text-muted mt-3 mb-3">{{videos[i].body}}</div>
              <div class="entry-meta">
                <a class="author-wrap" href="#"><img class="avatar" :src="'http://via.placeholder.com/50x50/' + colores.reverse()[i] + '/333333?text=A' " /> por Nombre autor </a>
                <a class="btn btn-info float-right mt-1" href="#">Leer nota completa &raquo;</a>
              </div> -->
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