<template>
    <SvgIcon icon="bike" @click="onClick" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from './components/SvgIcon';

export default {
  name: 'App',

  components: {
    HelloWorld,
    SvgIcon,
  },

  methods: {
    onClick() {
      console.log('click');
    }
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
