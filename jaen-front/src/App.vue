<template>
  <div id="app">
    <JaenHeader />
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
import JaenHeader from './components/layout/JaenHeader.vue'

export default {
  name: 'App',
  components: {
    JaenHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
