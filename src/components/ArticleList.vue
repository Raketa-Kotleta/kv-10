<template>
<div class="">
  <div v-if="$root.$data.articles.length">
<!--    <MyArticle-->
<!--      v-for="article in $root.$data.articles"-->
<!--      :key="article.id"-->
<!--      :id = "article.id"-->
<!--      :author = "article.author"-->
<!--      :body = "article.body"-->
<!--      :published = "article.published"-->
<!--      @change-publishing = "change_status"-->
<!--    />-->
    <router-link v-for="article in $root.$data.articles"
                 :key="article.id"
                 :to="'/Article/' + article.id">
      <h1>{{article.author}}</h1>
    </router-link>
  </div>
</div>
</template>

<script>


export default {
  components:{
    //MyArticle,
  },
  name: "ArticleList",
  methods:{

  },



}
</script>

<style scoped>

</style>