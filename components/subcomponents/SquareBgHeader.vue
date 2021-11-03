<template>

  <div class="flex w-full ">
    <div class="relative flex mt-8 md:mt-0">
      <span @click="backEvent" class="flex items-center justify-start ">
        <BaseArrow @click="backEvent"  class="transform rotate-180 text-yellow"/>
        <nuxt-link to="/">
      </nuxt-link>
      </span>
    </div>
    <span :hideLogo="hideLogo" :class="{ 'hidden': hideLogo }" class="relative flex items-center justify-center ">
        <Logo class="w-12 cursor-pointer text-yellow"/>
        <p class="flex pl-4 text-xl font-bold text-yellow">Registrate</p>
      </span>
    </div>

</template>

<script>
import BaseArrow from '../BaseArrow.vue'
import Logo from '../Logo.vue'

export default {
  components: {
    BaseArrow,
    Logo,
  },
  props: {
      hideLogo: {
        required: false,
        type: Boolean,
        default: false
      }
    },
  methods: {
    backEvent(event)
    {
      this.$emit('back-event', event)
    }
  }
}

</script>
