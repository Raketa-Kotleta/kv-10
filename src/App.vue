<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/AddForm">Add Article |</router-link>
      <router-link to="/about"> About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>

import CheckBox from "./components/CheckBox";
import Vue from "vue";

Vue.component('CheckBox',CheckBox);
export default {
  components: {

  },
  beforeMount() {

  }
}
</script>