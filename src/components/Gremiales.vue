<template>
  <section id="gremiales">
    <div class="container">      
      <div class="row justify-content-md-center post-wrapper">
        <div class="col-md-8 col-xs-12">
          <h2>{{$route.meta.title}}</h2>
          <h4 class="mb-5">Enterate de las últimas novedades de nuestro blog</h4>
          <div v-show="posts == null" class="alert alert-secondary text-center p-5">
            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
            <div class="text-muted small mt-2">Cargando las novedades...</div>
          </div>
          <template v-for="(value, i) in posts">
            <div class="post" :key="i">
              <div class="post-date text-muted">01/08/2017</div>
              <h2 class="post-title">{{value.title}}</h2>
              <div>
                <img class="w-100" :src="'https://via.placeholder.com/500x350/' + colores[Math.floor((Math.random() * 5))] + '/333333?text=Imagen+post'">
              </div>
              <div class="text-muted mt-3 mb-3">{{value.body}}</div>
              <div class="entry-meta">
                <a class="author-wrap" href="#"><img class="avatar" :src="'https://via.placeholder.com/50x50/' + colores[Math.floor((Math.random() * 5))] + '/333333?text=A' " /> por Camilo Canegato </a>
                <a class="btn btn-info float-right mt-1" href="#">Leer nota completa &raquo;</a>
              </div>
              <!-- <a v-if="post._embedded['wp:featuredmedia'][0].media_details.sizes['large']" :href="post.link">
                <img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['large'].source_url" />
              </a>
              <div class="excerpt text-muted mt-3 mb-3" v-if="post.excerpt.rendered" v-html="post.excerpt.rendered"></div>
              <div class="entry-meta" v-if="post._embedded.author[0]">
                <a class="author-wrap" :href="post._embedded.author[0].link"><img class="avatar" :src="post._embedded.author[0].avatar_urls['48']" /> by&nbsp; {{ post._embedded.author[0].name }} </a>
                <a class="btn btn-info float-right mt-1" :href="post.link">Leer nota &raquo;</a>
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
      apiURL: 'https://jsonplaceholder.typicode.com/posts',
      posts: null,
      colores: ["4CAF50", "FFEB3B", "795548", "607D8B", "673AB7"]
    }
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      var xhr = new XMLHttpRequest()
      var self = this

      xhr.open('GET', self.apiURL)
      xhr.onload = function() {
        self.posts = JSON.parse(xhr.response).slice(0,5)
      }
      xhr.send()
      /*this.$http.get(this.apiURL).then((respuesta) => {
        console.log(respuesta);
      });*/
    }
  }
}
</script>

<style>
  .post {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: #AAA solid 1px;
  }
  .post > a > img {
    width: 100%;
  }

  .author-wrap img {
    border-radius: 50%;
  }
</style>