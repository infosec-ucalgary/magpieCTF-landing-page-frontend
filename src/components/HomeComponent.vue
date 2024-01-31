<template>
  <div class="relative w-full h-screen bg-black bg-cover bg-right sm:bg-left-bottom"
    :style="{ backgroundImage: `url(${bgImage})` }" id="outer-container">

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
