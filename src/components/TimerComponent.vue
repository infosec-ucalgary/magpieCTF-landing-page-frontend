<template>

  <VueCountdown :time="new Date('Feb 19, 2021 00:00:00').getTime() - new Date().getTime()">
      <template v-slot="props">
        <div class="font-semibold text-center text-6xl text-white">
          <div class="inline-block mx-10">
            <p>{{ props.days }}</p>
            <p class="text-4xl">days</p>
          </div>
          <div class="inline-block mx-10">
            <p>{{ props.hours }}</p>
            <p class="text-4xl">hours</p>
          </div>
          <div class="inline-block mx-10">
            <p>{{ props.minutes }}</p>
            <p class="text-4xl">minutes</p>
          </div>
          <div class="inline-block mx-10">
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
