<template>
  <div id="app">
    <header-slim></header-slim>
    <router-view/>
    <footer-slim></footer-slim>
  </div>
</template>

<script>
import HeaderSlim from '@/components/header/HeaderSlim'
import FooterSlim from '@/components/footer/FooterSlim'

export default {
  name: 'app',
  components: { HeaderSlim, FooterSlim }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
