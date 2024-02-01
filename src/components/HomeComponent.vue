<template>
  <div class="w-full h-screen bg-cover bg-left-bottom" :style="{ backgroundImage: `url(${bgImage})` }"
    id="outer-container">
    <section class="w-full">
      <p class="font-semibold text-center text-xl sm:text-5xl pt-4 pb-6">
        <span class="neon-grey-2">MagpieCTF 2024</span>
      </p>
    </section>
    <div class="w-7/12 mx-auto">
      <div class="grid gap-4 md:grid-cols-3 grid-cols-1">
        <div class="relative flex">
          <p class="absolute inline-block opacity-0 hover:opacity-100 duration-300 top-0 left-0 rounded-md h-full text-center align-middle bg-black text-white bg-opacity-75 p-2">Aberrant Watchdogs  (OSINT), who are a group that monitor and act on and aberrant reports or occurrences to prevent them from causing chaos.</p>
          <img class="rounded-lg h-auto" src="../assets/assets24/AberrantWatchdogs.webp">
        </div>
        <div class="relative flex">
          <p class="absolute inline-block opacity-0 hover:opacity-100 duration-300 top-0 left-0 rounded-md h-full text-center align-middle bg-black text-white bg-opacity-75 p-2">BinCortex (Binary), who develop most of the software and APIs for many of the modern androids you might see for sale or on the street.</p>
          <img class="rounded-lg h-auto" src="../assets/assets24/BinCortex.webp">
        </div>
        <div class="relative flex">
          <p class="absolute inline-block opacity-0 hover:opacity-100 duration-300 top-0 left-0 rounded-md h-full text-center align-middle bg-black text-white bg-opacity-75 p-2">QuantumLocks (Crypto), who provide and research AI security (including quantum) solutions.</p>
          <img class="rounded-lg h-auto" src="../assets/assets24/QuantumLocks.webp">
        </div>
        <div class="relative flex">
          <p class="absolute inline-block opacity-0 hover:opacity-100 duration-300 top-0 left-0 rounded-md h-full text-center align-middle bg-black text-white bg-opacity-75 p-2">REAssembly (RevEng), who provide services that focus primarily on revamping and patching outdated and deprecated androids and AIs.</p>
          <img class="rounded-lg h-auto" src="../assets/assets24/REAssembly.webp">
        </div>
        <div class="relative flex">
          <p class="absolute inline-block opacity-0 hover:opacity-100 duration-300 top-0 left-0 rounded-md h-full text-center align-middle bg-black text-white bg-opacity-75 p-2">Rogueware (Forensics), who are a hacker group that advocate against the use of androids and AI by creating malware and attacking AI-related organizations.</p>
          <img class="rounded-lg h-auto" src="../assets/assets24/Rogueware.webp">
        </div>
        <div class="relative flex">
          <p class="absolute inline-block opacity-0 hover:opacity-100 duration-300 top-0 left-0 rounded-md h-full text-center align-middle bg-black text-white bg-opacity-75 p-2">Rogueware (Forensics), who are a hacker group that advocate against the use of androids and AI by creating malware and attacking AI-related organizations.</p>
          <img class="rounded-lg h-auto" src="../assets/assets24/Singularity.webp">
        </div>
      </div>
    </div>
    <section class="w-full">
      <p class="font-semibold text-center text-xl sm:text-5xl pt-4 pb-6">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="neon-grey-2 underline" target="_blank">MagpieCTF 2024 CTFd page</a>
      </p>
    </section>
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
