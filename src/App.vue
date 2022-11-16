<template class="bg-black">
  <div class="relative w-full bg-black bg-fixed bg-cover" :style="{backgroundImage:`url(${bgImage})`}" id="outer-container">
  <!-- <div class="relative w-full bg-black bg-fixed bg-cover" id="outer-container"> -->
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
      visible: true,
      bgImage: require('./assets/2023-background-v3.jpg')
    }
  }
}
</script>
