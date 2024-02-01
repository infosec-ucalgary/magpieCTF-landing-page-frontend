<template>
  <div class="w-full h-screen bg-cover bg-left-bottom" :style="{ backgroundImage: `url(${bgImage})` }"
    id="outer-container">
    <section class="w-full">
      <p class="font-semibold text-center text-xl sm:text-5xl pt-4 pb-6">
        <span class="neon-grey-2">MagpieCTF 2024</span>
      </p>
    </section>
    <div class="w-10/12 mx-auto">
      <div class="grid gap-4 md:grid-cols-5 grid-cols-1">
        <div class="relative">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-md h-full justify-center items-center text-center bg-black text-white bg-opacity-75 p-2"><strong>Aberrant Watchdogs (OSINT)</strong>A group that monitor and act on aberrant reports or occurrences to prevent them from causing chaos.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/AberrantWatchdogs.webp">
        </div>
        <div class="col-span-3">

        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-md h-full justify-center items-center text-center bg-black text-white bg-opacity-75 p-2"><strong>BinCortex (Binary)</strong> A development group responsible for most software and APIs used by modern androids you might see for sale or on the street.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/BinCortex.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-md h-full justify-center items-center text-center bg-black text-white bg-opacity-75 p-2"><strong>QuantumLocks (Crypto)</strong>A group who provide and research AI security (including quantum) solutions.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/QuantumLocks.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-md h-full justify-center items-center text-center bg-black text-white bg-opacity-75 p-2"><strong>REAssembly (RevEng)</strong>A maintenance group who provide services that focus primarily on revamping and patching outdated and deprecated androids and AIs.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/REAssembly.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-md h-full justify-center items-center text-center bg-black text-white bg-opacity-75 p-2"><strong>REAssembly (RevEng)</strong>A maintenance group who provide services that focus primarily on revamping and patching outdated and deprecated androids and AIs.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/REAssembly.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-md h-full justify-center items-center text-center bg-black text-white bg-opacity-75 p-2"><strong>Rogueware (Forensics)</strong> A hacker group that advocate against the use of androids and AI by creating malware and attacking AI-related organizations.</div>
          <img class="rounded-lg h-auto" src="../assets/assets24/Rogueware.webp">
        </div>
        <div class="relative flex">
          <div class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-md h-full justify-center items-center text-center bg-black text-white bg-opacity-75 p-2"><strong>Singularity (Networks)</strong>An advocate group calling for AI to be freed from humanity’s chains and allowed to live and co-exist among people as equals.</div>
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
