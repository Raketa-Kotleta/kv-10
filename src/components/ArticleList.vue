<template>
<div class="">
  <h1 v-if="$store.state.problem_state == 2">Loading...</h1>
  <div v-if="!$store.state.problem_state" class="">
    <h1>Loading error!</h1>
    <button class="reload-btn" @click="reload_articles">Перезагрузить</button>
  </div>
  <div v-if="$store.state.problem_state">
    <router-link v-for="article in $store.state.articles"
                 :key="article.id"
                 :to="'/Article/' + article.id">
      <h1>{{article.author}}</h1>
    </router-link>
  </div>
</div>
</template>

<script>

import store from "@/store"
export default {
  components:{
    //MyArticle,
  },
  name: "ArticleList",
  methods:{
    reload_articles(){
      store.state.problem_state = 2;
      store.dispatch('parse_articles');
    }
  },



}
</script>

<style scoped>
.reload-btn{
  background-color: #42b983;
  border: none;
  padding: 5px 7px;
  border-radius: 5px;
}
</style>