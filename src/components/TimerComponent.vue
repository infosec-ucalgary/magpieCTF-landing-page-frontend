<template>
  <VueCountdown :time="new Date('Feb 24, 2024 16:00:00 GMT-0700').getTime() - new Date().getTime()">
    <template v-slot="props">
      <div class="h-screen flex justify-center items-center sm:items-start lg:justify-end">
        <div class="font-semibold text-center text-5xl sm:mt-10 md:mr-8 xl:mr-24 xl:mt-16 inline-block">
          <div class="mx-10 mb-3 neon-grey-2">
            <p class="test-3xl">MagpieCTF 2024</p>
          </div>
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
