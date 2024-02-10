<template>
  <div class="h-full bg-cover bg-top neon-grey-2" :style="{ backgroundImage: `url(${bgImage})` }" id="outer-container">
    <div class="md:h-screen mb-8">
      <section class="flex justify-center">
        <img class="sm:w-2/3" src="../assets/assets24/magpAI_logo.png">
      </section>
      <section class="mb-8">
        <TimerComponent />
      </section>
    </div>
    <div class="hidden xl:block w-10/12 mx-auto mt-4">
      <div class="grid gap-4 md:grid-cols-5 grid-rows-3 grid-cols-1">
        <div>
          <img src="../assets/assets24/magpieLogo.png">
        </div>
        <div class="relative flex">
          <div
            class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2">
            <strong>Aberrant Watchdogs (OSINT)</strong>A group that monitor and act on aberrant reports or occurrences to
            prevent them from causing chaos.
          </div>
          <img class="rounded-lg h-auto" src="../assets/assets24/AberrantWatchdogs.webp">
        </div>
        <div class="relative flex">
          <div
            class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2">
            <strong>BinCortex (Binary)</strong> A development group responsible for most software and APIs used by modern
            androids you might see for sale or on the street.
          </div>
          <img class="rounded-lg h-auto" src="../assets/assets24/BinCortex.webp">
        </div>
        <div class="relative flex">
          <div
            class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2">
            <strong>QuantumLocks (Crypto)</strong>A group who provide and research AI security (including quantum)
            solutions.
          </div>
          <img class="rounded-lg h-auto" src="../assets/assets24/QuantumLocks.webp">
        </div>
        <div>
          <img src="../assets/assets24/magpieLogo.png">
        </div>
        <div class="relative flex">
          <div
            class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2">
            <strong>MagpAI (Web)</strong>A group focused on creating web assistants and can be found built into every
            mainstream internet browser.
          </div>
          <img class="rounded-lg h-auto" src="../assets/assets24/magpai.webp">
        </div>
        <div class="relative col-span-3 row-span-2 text-white text-center">
          <p class="p-8 text-sm 2xl:text-lg rounded-lg bg-black m-auto 2xl:m-12"> The
            year is 2045. Breakthroughs in AI and quantum computing have allowed for androids and AI integration into
            modern society. Androids have been used to serve humans and complete the mundane tasks that nobody wants to
            do, allowing humanity to focus on the more fulfilling tasks of life. However, the complexity and true
            potential of the technology has surpassed our understanding of its mechanics, and the androids sometimes
            behave in… unexpected manners. These “aberrants” have a variety of potential unorthodox behaviors, ranging
            from difficulty understanding and completing tasks to outright violence and aggression. <br><br>These days, most of the business in the
            modern world is dominated by the Big 7. Each of these groups allow anyone to complete tasks for them in return
            for rewards in the form of “bounties.” A web service known colloquially as <strong>The Board</strong> has
            bounty postings from various users and organizations (anonymous and self-identified) where those interested in
            making some side-cash can take up these challenges and turn them in. You are one such user, and with The Game
            coming up, your goal is to complete as many such bounties and reach the top of the leaderboard.</p>
        </div>
        <div class="relative flex">
          <div
            class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2">
            <strong>REAssembly (RevEng)</strong>A maintenance group who provide services that focus primarily on revamping
            and patching outdated and deprecated androids and AIs.
          </div>
          <img class="rounded-lg h-auto" src="../assets/assets24/REAssembly.webp">
        </div>
        <div class="relative flex">
          <div
            class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg h-full justify-center items-center text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2">
            <strong>Rogueware (Forensics)</strong> A hacker group that advocate against the use of androids and AI by
            creating malware and attacking AI-related organizations.
          </div>
          <img class="rounded-lg" src="../assets/assets24/Rogueware.webp">
        </div>
        <div class="relative flex">
          <div
            class="absolute flex-col flex opacity-0 hover:opacity-100 duration-300 top-0 left-0 px-5 rounded-lg justify-center items-center h-full text-center bg-black text-white text-sm 2xl:text-md bg-opacity-75 p-2">
            <strong>Singularity (Networks)</strong>An advocate group calling for AI to be freed from humanity’s chains and
            allowed to live and co-exist among people as equals.
          </div>
          <img class="rounded-lg" src="../assets/assets24/Singularity.webp">
        </div>
      </div>
    </div>
    <div class="xl:hidden w-5/6 mx-auto">
      <p class="p-8 text-sm rounded-lg bg-black"> The
            year is 2045. Breakthroughs in AI and quantum computing have allowed for androids and AI integration into
            modern society. Androids have been used to serve humans and complete the mundane tasks that nobody wants to
            do, allowing humanity to focus on the more fulfilling tasks of life. However, the complexity and true
            potential of the technology has surpassed our understanding of its mechanics, and the androids sometimes
            behave in… unexpected manners. These “aberrants” have a variety of potential unorthodox behaviors, ranging
            from difficulty understanding and completing tasks to outright violence and aggression. <br><br>These days, most of the business in the
            modern world is dominated by the Big 7. Each of these groups allow anyone to complete tasks for them in return
            for rewards in the form of “bounties.” A web service known colloquially as <strong>The Board</strong> has
            bounty postings from various users and organizations (anonymous and self-identified) where those interested in
            making some side-cash can take up these challenges and turn them in. You are one such user, and with The Game
            coming up, your goal is to complete as many such bounties and reach the top of the leaderboard.</p>
    </div>
    <section>
      <p class="font-semibold text-center text-xl sm:text-6xl my-10">
        <a href="https://2024.magpiectf.ca/" class="neon-grey-2 bg-black p-3 sm:p-6 sm:pt-2 rounded-lg underline" target="_blank">Register Here</a>
      </p>
    </section>
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import AboutComponent from '../components/AboutComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import TimerComponent from '../components/TimerComponent.vue'

export default {
  name: 'HomeComponent',
  components: {
    AboutComponent,
    FooterComponent,
    TimerComponent
  },
  data () {
    return {
      visible: true,
      bgImage: require('../assets/assets24/blurryBG.jpg')
    }
  }
}
</script>
