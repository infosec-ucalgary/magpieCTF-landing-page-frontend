<template>
  <div class="w-full h-full bg-cover bg-left-top" :style="{ backgroundImage: `url(${bgImage})` }"
    id="outer-container">
    <section class="w-full flex justify-center">
      <div class="bg-gray-800 my-8 px-8 p-2 rounded-lg">
        <p class="font-semibold text-center text-xl sm:text-6xl pb-0 mb-0 2xl:pt-4">
          <span class="neon-grey-2">MagpieCTF 2024</span>
        </p>
        <p class="font-semibold text-center text-xl 2xl:pb-6">
          <span class="text-gray-900 px-3 bg-white rounded-md">University of Calgary Information Security Club</span>
        </p>
    </div>
    </section>
    <VueCountdown :time="new Date('Feb 23, 2024 16:00:00 GMT-0700').getTime() - new Date().getTime()">
    <template v-slot="props">
      <div class="flex justify-center items-center">
        <div class="font-semibold text-center text-5xl inline-block">
          <div>
            <div class="inline-block mx-10 neon-grey-2">
              <p>{{ props.days }}</p>
              <p class="text-4xl">days</p>
            </div>
            <div class="inline-block mx-10 neon-grey-2">
              <p>{{ props.hours }}</p>
              <p class="text-4xl">hours</p>
            </div>
            <div class="inline-block mx-10 neon-grey-2">
              <p>{{ props.minutes }}</p>
              <p class="text-4xl">minutes</p>
            </div>
            <div class="inline-block mx-10 neon-grey-2">
              <p>{{ props.seconds }}</p>
              <p class="text-4xl">seconds</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </VueCountdown>
    <div class="w-10/12 mx-auto">
      <div class="grid gap-4 md:grid-cols-5 grid-cols-1">
        <div class="relative">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2"><strong>Aberrant Watchdogs (OSINT)</strong>A group that monitor and act on aberrant reports or occurrences to prevent them from causing chaos.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/AberrantWatchdogs.webp">
        </div>
        <div class="col-span-3 bg-black rounded-lg text-white text-center">
          <p class="text-sm 2xl:text-md m-4 2xl:m-12">The year is 2045. Breakthroughs in artificial intelligence and quantum computing have allowed for android and AI integration into modern society. Androids have been used to serve humans and complete the mundane tasks that nobody wants to do, allowing humanity to focus on the more fulfilling tasks of life. However, the complexity and true potential of the technology has surpassed our understanding of its mechanics, and the androids sometimes behave in… unexpected manners. These “aberrants” have a variety of potential unorthodox behaviors, ranging from difficulty understanding and completing tasks to outright violence and aggression. These days, are are the “Big 7” names that practically everybody recognizes in AI:</p>
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2"><strong>BinCortex (Binary)</strong> A development group responsible for most software and APIs used by modern androids you might see for sale or on the street.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/BinCortex.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2"><strong>QuantumLocks (Crypto)</strong>A group who provide and research AI security (including quantum) solutions.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/QuantumLocks.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2"><strong>MagpAI (Web)</strong>A group focused on creating web assistants and can be found built into every mainstream internet browser.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/REAssembly.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2"><strong>REAssembly (RevEng)</strong>A maintenance group who provide services that focus primarily on revamping and patching outdated and deprecated androids and AIs.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/REAssembly.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2"><strong>Rogueware (Forensics)</strong> A hacker group that advocate against the use of androids and AI by creating malware and attacking AI-related organizations.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/Rogueware.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2"><strong>Singularity (Networks)</strong>An advocate group calling for AI to be freed from humanity’s chains and allowed to live and co-exist among people as equals.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/Singularity.webp">
        </div>
      </div>
    </div>
    <section class="w-full">
      <p class="font-semibold text-center text-xl sm:text-5xl pt-4 pb-64">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="neon-grey-2 underline" target="_blank">MagpAI CTF 2024</a>
      </p>
    </section>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  name: 'HomeComponent',
  components: {
    VueCountdown
  },
  data () {
    return {
      visible: true,
      bgImage: require('../assets/assets24/blurryBG.jpg')
    }
  }
}
</script>
