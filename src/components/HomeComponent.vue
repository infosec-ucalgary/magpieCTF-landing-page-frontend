<template>
  <section id="home-outer">
    <header class="text-center pb-12">
      <video class="mx-auto w-2/3" autoplay loop muted>
        <source src="@/assets/ctf-logo-v3.webm" type="video/webm">
        <source src="@/assets/ctf-logo-v3.mp4" type="video/mp4">
      </video>
    </header>
    <div class="home bg-black">
      <div class="flex flex-col">
        <section class="w-full">
          <TimerComponent />
        </section>
        <div class="w-2/3 mx-auto my-48 border-4 rounded-lg neon-border">
          <p class="text-center font-display text-5xl text-white">Join the CTF Discord</p>
          <a href="https://discord.gg/wVwv5Pw"><img class="mx-auto" src="@/assets/Discord-Logo+Wordmark-Color.png" style="width: 45%" /></a>
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
