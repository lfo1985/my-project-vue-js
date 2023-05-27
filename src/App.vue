<template>
  <NavBar />
  <ContainerFluid />
</template>

<script>

import NavBar from './components/NavBar.vue';
import ContainerFluid from '@/components/ContainerFluid';

export default {
  name: 'App',
  components: {
    NavBar,
    ContainerFluid
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
