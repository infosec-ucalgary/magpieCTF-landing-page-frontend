<template>
  <div class="w-full h-screen bg-cover bg-left-bottom" :style="{ backgroundImage: `url(${bgImage})` }"
    id="outer-container">
    <div class="max-w-screen-xl mx-auto">
      <div class="inline-grid grid-cols-3 gap-4">
        <div class="w-full flex justify-center items-center">
          <img class="w-1/2 h-auto" src="../assets/assets24/AberrantWatchdogs.webp">
        </div>
        <div class="w-full flex justify-center items-center">
          <img class="w-1/2 h-auto" src="../assets/assets24/BinCortex.webp">
        </div>
        <div class="w-full flex justify-center items-center">
          <img class="w-1/2 h-auto" src="../assets/assets24/QuantumLocks.webp">
        </div>
        <div class="w-full flex justify-center items-center">
          <img class="w-1/2 h-auto" src="../assets/assets24/REAssembly.webp">
        </div>
        <div class="w-full flex justify-center items-center">
          <img class="w-1/2 h-auto" src="../assets/assets24/Rogueware.webp">
        </div>
        <div class="w-full flex justify-center items-center">
          <img class="w-1/2 h-auto" src="../assets/assets24/Singularity.webp">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data () {
    return {
      visible: true,
      bgImage: require('../assets/assets24/blurryBG.jpg')
    }
  }
}
</script>
