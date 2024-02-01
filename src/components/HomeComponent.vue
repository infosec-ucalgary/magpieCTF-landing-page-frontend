<template>
  <div class="w-full h-screen bg-cover bg-left-bottom" :style="{ backgroundImage: `url(${bgImage})` }"
    id="outer-container">
    <section class="w-full">
      <p class="font-semibold text-center text-xl sm:text-5xl py-8">
        <span class="neon-grey-2">MAGPIECTF 2024</span>
      </p>
    </section>
    <div class="w-3/5 mx-auto">
      <div class="grid gap-4 sm:grid-cols-3 grid-cols-1">
          <img class="rounded-md h-auto" src="../assets/assets24/AberrantWatchdogs.webp">
          <img class="rounded-md h-auto" src="../assets/assets24/BinCortex.webp">
          <img class="rounded-md h-auto" src="../assets/assets24/QuantumLocks.webp">
          <img class="rounded-md h-auto" src="../assets/assets24/REAssembly.webp">
          <img class="rounded-md h-auto" src="../assets/assets24/Rogueware.webp">
          <img class="rounded-md h-auto" src="../assets/assets24/Singularity.webp">
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
