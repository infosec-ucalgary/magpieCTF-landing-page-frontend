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
          <p class="font-semibold text-center text-3xl sm:text-6xl my-32">
            <span class="neon-red">19/02/2021 4PM MST</span>
            <span class="neon-blue"> - </span>
            <span class="neon-green">21/02/2021 4PM MST</span>
          </p>
        </section>
        <a href="https://2021.magpiectf.ca" class="w-auto p-4 mx-auto border-4 border-white rounded-lg neon-border-blue mb-20 hover:bg-gray-800">
          <p class="font-display text-5xl text-white text-center font-bold">Go to CTFd</p>
        </a>
        <a target=”_blank” href="https://www.eventbrite.ca/e/magpiectf-tickets-128583228899" class="w-auto p-4 mx-auto mb-8 border-4 border-white rounded-lg neon-border-blue hover:bg-gray-800">
          <p class="font-display text-center text-3xl text-white font-bold">REGISTER NOW</p>
        </a>
        <!--
        <div class="w-2/3 mx-auto my-48 border-4 rounded-lg neon-border">
          <p class="text-center font-display text-5xl text-white">Join the CTF Discord</p>
          <a href="https://discord.gg/wVwv5Pw"><img class="mx-auto" src="@/assets/Discord-Logo+Wordmark-Color.png" style="width: 45%" /></a>
        </div>
        -->
        <div class="w-5/6 sm:w-2/3 mx-auto my-16 pb-6 pt-2 border-4 rounded-lg neon-border overflow-x-auto">
          <p class="text-center font-display text-3xl sm:text-5xl text-white mb-16">Sponsored By</p>
          <div class="my-6 mx-6">
            <img src="@/assets/HTB-Logo-RGB_1024.svg" style="min-width: 200px; max-width: 550px;" class="mx-auto"/>
          </div>
          <div class="my-6 mx-6">
            <img src="@/assets/HSBC_MASTERBRAND_BANK_RGB_MONO_REV.svg" style="min-width: 200px; max-width: 500px;" class="mx-auto"/>
          </div>
          <div class="mb-8 mx-6">
            <img src="@/assets/cisco-logo.png" style="max-height:120px; " class="mx-auto"/>
          </div>
          <div class="mb-10 my-24 mx-6">
            <img src="@/assets/securednet.png" style="min-width: 200px;" class="mx-auto"/>
          </div>
        </div>
        <AboutComponent />
      </div>
    </div>
  </section>
</template>
<script>
import TimerComponent from '@/components/TimerComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'HomeComponent',
  components: {
    TimerComponent,
    AboutComponent
  },
  discordSrc: '@/assets/Discord-Logo+Wordmark-Color.png'
}
</script>
