<template>
  <section id="gremiales">
    <div class="container">
      <div class="row justify-content-md-center post-wrapper">
        <div class="col-md-8 col-xs-12">
          <template v-for="(post, index) in posts.results">
            <div class="post" :key="index">
              <div class="post-date text-muted">01/08/2017</div>
              <h2 class="post-title">{{post.gender}}</h2>
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
      apiURL: 'https://randomuser.me/api/?results=10',
      posts: null
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
        self.posts = JSON.parse(xhr.response)
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