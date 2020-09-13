<template>
  <section id="home-outer">
    <header class="text-center pb-12">
      <video class="mx-auto w-2/3" autoplay loop>
        <source src="@/assets/magpie-ctf-logo.webm" type="video/webm">
      </video>
    </header>
    <div class="home bg-black">
      <div class="flex flex-col">
        <section class="w-full py-12">
          <TimerComponent />
        </section>
        <div class="w-2/3 mx-auto my-16">
          <p class="text-center font-display text-4xl text-white">Join the CTF Discord</p>
          <a href="https://discord.gg/wVwv5Pw"><img class="mx-auto" src="@/assets/Discord-Logo+Wordmark-Color.png" style="width: 40%" /></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TimerComponent from '@/components/TimerComponent.vue'

export default {
  name: 'HomeComponent',
  components: {
    TimerComponent
  },
  discordSrc: '@/assets/Discord-Logo+Wordmark-Color.png'
}
</script>
