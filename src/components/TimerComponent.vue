<template>

  <VueCountdown :time="new Date('Feb 19, 2021 16:00:00 GMT-0700').getTime() - new Date().getTime()">
      <template v-slot="props">
        <div class="font-semibold text-center text-6xl">
          <div class="inline-block mx-10 neon-red">
            <p>{{ props.days }}</p>
            <p class="text-4xl">days</p>
          </div>
          <div class="inline-block mx-10 neon-blue">
            <p>{{ props.hours }}</p>
            <p class="text-4xl">hours</p>
          </div>
          <div class="inline-block mx-10 neon-green">
            <p>{{ props.minutes }}</p>
            <p class="text-4xl">minutes</p>
          </div>
          <div class="inline-block mx-10 neon-yellow">
            <p>{{ props.seconds }}</p>
            <p class="text-4xl">seconds</p>
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
