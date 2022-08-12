<template>
  <navbar 
    class="header" 
    :class="{
      '_dark': this.$route.name != 'Home'
    }"
  />
  <router-view/>
</template>

<script>
import navbar from '@/components/header.vue';

export default {
  components: {
    navbar,
  },
};
</script>

<style>
@import '../public/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Castoro:ital@1&family=Figtree:wght@300;400&family=Roboto:wght@400;500;700&display=swap');
@import 'assets/default.css';

/* 
  fonts 
  font-family: 'Castoro', serif; 4
  font-family: 'Figtree', sans-serif; 3 4
  font-family: 'Roboto', sans-serif; 4 5 7
*/
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
.header {
  z-index: 88;
}
.header._dark {
  background: #2e2e2e;
}
</style>
