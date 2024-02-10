<template>
  <VueCountdown :time="new Date('Feb 23, 2024 16:00:00 GMT-0700').getTime() - new Date().getTime()">
    <template v-slot="props">
      <div class="flex justify-center items-center mb-16">
        <div class="font-semibold text-center text-5xl inline-block">
          <!-- <div class="mb-3 neon-grey-2">
            <p class="test-3xl">MagpieCTF 2024</p>
          </div> -->
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
          <div class="neon-grey-2">
            <p class="text-3xl">Feburary 23 - Feburary 25</p>
          </div>
        </div>
      </div>
    </template>
  </VueCountdown>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  name: 'TimerComponent',
  components: {
    VueCountdown
  }
}
</script>
