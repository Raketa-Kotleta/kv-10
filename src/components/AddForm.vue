<template>
<div class="wrapper">
  <form>
    <div class="">
      <label for="author_name">
        <input type="text" v-model="article.author" id="author_name" placeholder="Введите имя">
      </label>
    </div>
    <div class="">
      <textarea name="" id="" cols="30" rows="10" v-model="article.body" placeholder="Введите текст"></textarea>
    </div>
  </form>
  <div class="">
    <label for="publ">
      <input type="checkbox" id="publ" v-model="article.published">
      Опубликовано
    </label>
  </div>
  <div class="">
    <label for="subbtn">
      <router-link to="/"><input type="submit" id="subbtn" @click.prevent = "add_art(article);"></router-link>
    </label>
  </div>
</div>
</template>
<script>
import store from '../store'
import {types} from '@/store/types.js'
export default {
  name: "AddForm",
  props:{
    author: String,
    body: String,
    published: Boolean
  },
  methods:{
    add_art(value) {
      store.dispatch(types.mutations.ADD_ART,value);
      this.$router.push('/');
    }
  },
  data(){
    return{
      article: {
        author: this.author,
        body: this.author,
        published: this.published
      }
    }
  }

}
</script>

<style scoped>
input{
  margin: 10px 0;
}
.wrapper{
 text-align: center;
}
</style>