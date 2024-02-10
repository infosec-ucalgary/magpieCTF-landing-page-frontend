<template>
  <section id="about">
    <div class="mx-auto w-2/3">
      <p class="text-6xl text-center mt-5 mb-3 neon-light-2">About</p>
      <div class="mb-5">
        <p class="text-5xl neon-light-2 mb-4">What is it?</p>
        <p class="text-2xl text-white mb-2">MagpieCTF is a jeopardy-style, team-based, online CTF taking place over two
          days with hundreds of dollars in cash prizes. This is a beginner to intermediate level CTF, so if you're brand
          new to CTFs/cybersecurity/hacking this is your chance to get started!</p>
          <p class="text-2xl text-white">Our fourth annual CTF will be a hybrid <strong>Techno-Dystopia</strong> themed CTF where you will be responsible for collecting bounties for the <span class="underline">The Board.</span></p>
      </div>
      <br />
        <div class="mb-5">
          <p class="text-5xl neon-light-2 mb-4">When is it?</p>
          <p class="text-2xl text-white">It’ll be taking place over the course of 48 hours, starting <br><strong>February 23th at 4pm MST and ending February 25th at 4pm MST.</strong></p>
          <p class="text-2xl text-white">Join us in-person at University of Calgary, room <b>ENG103</b> for the opening and closing ceremony.</p>
        </div>
      <div class="mb-5">
        <p class="text-5xl neon-light-2 mb-4">What does it cost?</p>
        <p class="text-2xl text-white">There is no entry fee, it is totally free to enter!</p>
      </div>
      <div class="mb-5">
       <p class="text-5xl neon-light-2 mb-4">What are the prizes?</p>
        <ul class="text-xl text-white">
         <li class="text-yellow-500 text-4xl">1st Place Team: <strong>$500</strong></li>
         <li class="text-gray-400 text-3xl">2nd Place Team: <strong>$250</strong></li>
         <li class="text-yellow-700 text-2xl">3rd Place Team: <strong>$100</strong></li>
        </ul>
      </div>
      <div class="mb-5 space-y-8">
        <p class="text-5xl neon-light-2 mb-4">What if I still have questions?</p>
        <p class="text-2xl text-white">The best place to ask is in the <u>magpieCTF Discord server</u> by clicking the discord logo below. You can
          message us there, or <a class="blue-link" href="mailto:infosec.ucalgary@gmail.com" target="_blank"><u>email
              us</u></a>.</p>
        <a href="https://discord.gg/gudhU4cjyM" target="blank_"><img class="bg-black w-1/2 lg:w-1/3 mx-auto rounded-lg my-8"
            href="https://discord.gg/gudhU4cjyM" src="../assets/Discord-Logo+Wordmark-Color.png" /></a>
      </div>
      <div class="mx-auto my-16 pb-6 pt-2">
        <p class="text-center font-display text-3xl sm:text-5xl text-white mb-8">Sponsored By</p>
        <div class="mb-6 mx-4 text-center" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))">
          <img src="../assets/assets24/airCanada.png" class="md:mx-auto w-full bg-white p-3 rounded-lg"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>
