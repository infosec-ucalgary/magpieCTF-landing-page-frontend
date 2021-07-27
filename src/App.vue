<template>
  <!-- <div class="_position-relative _width-100" id="outer-container"> -->
  <div class="relative w-full bg-blueprint-color" id="outer-container">

    <!-- PAGE RENDER -->
    <router-view />

    <!-- FOOTER -->
    <FooterComponent />

  </div>
</template>

<style>
 body {
   width: 100%;
   background-color: #000000;
 }

 #app {
   /* font-family: 'avenir', helvetica, arial, sans-serif; */
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   /* color: #2c3e50; */
 }

 #footer {
   height: 10vh;
 }

</style>

<script>
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'app',
  components: {
    FooterComponent
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>
