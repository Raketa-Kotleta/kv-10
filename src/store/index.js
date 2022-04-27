import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    problem_state: 2,
  },
  getters: {
  },
  mutations: {
    add_art(state, value){
      let new_article = {
        id: state.articles[state.articles.length-1].id+1,
        ...value
      }
      state.articles.push(new_article);
      console.log(new_article.id);
    },
    change_status(state, id){
      state.articles[id-1].published = !state.articles[id-1].published;
    },
    add_all_articles(state, articles){
      state.articles = articles;
    }
  },
  actions: {
    parse_articles(context){
      fetch('/js.json')
          .then((response) => {
                response.ok === true ? this.state.problem_state = true : this.state.problem_state = false;
                console.log(response.ok);
                return response.json();
              }
          )
          .then(articles => context.commit('add_all_articles',articles));
      console.log("fetched data");
    },
    add_article(context, value){
      context.commit('add_art', value);
    }
  },
  modules: {
  }
})
