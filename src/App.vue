<template>
  <div id="app">
    TO TU:
    <SvgIcon icon="bike" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from './components/SvgIcon';

export default {
  name: 'App',

  components: {
    HelloWorld,
    SvgIcon,
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
