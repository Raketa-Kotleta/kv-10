<template>
<div class="">
  <div class="" v-if="$store.state.load_modules.problem_state == 'requested'">
    <h1>Loading...</h1>
    <br><div class="window-requested loader loader-5"></div>
    <br><button class="cancel-btn" @click="cancel_parse">Отменить загрузку</button>
  </div>
  <div v-if="$store.state.load_modules.problem_state == 'failed'" class="">
    <h1>Loading error!</h1>
    <button class="reload-btn" @click="reload_articles">Перезагрузить</button>
  </div>
  <div v-if="$store.state.articles.length > 0 && $store.state.load_modules.problem_state == 'succeeded'">
    <router-link v-for="article in $store.state.articles"
                 :key="article.id"
                 :to="'/Article/' + article.id">
      <h1>{{article.body}}</h1>
    </router-link>
  </div>
</div>
</template>

<script>

import store from "@/store"
import {types} from '@/store/types.js'
export default {
  components:{
    //MyArticle,
  },
  name: "ArticleList",
  methods:{
    reload_articles(){
      store.state.load_modules.problem_state = types.request_status.REQUESTED;
      store.dispatch(types.actions.PARSE_ARTICLES);
    },
    cancel_parse(){
      store.dispatch(types.actions.CANCEL_PARSE)
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
.cancel-btn{
  background-color: #42b983;
  border: none;
  padding: 5px 7px;
  border-radius: 5px;
}

.window-requested{
  text-align: center;
}

/* Loading animation */

.loader {
  position: relative;
  display: inline-block;
  margin: 0 12.5% 100px;
  width: 50px;
  height: 50px;
  border: 2px solid #0cf;
  border-radius: 50%;

  animation: spin 0.75s infinite linear;
}
.loader::before,
.loader::after {
  left: -2px;
  top: -2px;
  display: none;
  position: absolute;
  content: '';
  width: inherit;
  height: inherit;
  border: inherit;
  border-radius: inherit;
}

.loader-5,
.loader-5::before {
  display: inline-block;
  border-color: transparent;
  border-top-color: #0cf;
}


.loader-5::before {
  animation: spin 1.5s infinite ease;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>