<template>

  <div>
    <span @click="toggle = !toggle" v-if="!toggle">
      <svg @click="passEvent" class="cursor-pointer"  width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.66797 9.70599V26.115L16.659 34.321L31.65 26.115V9.70599L16.659 1.5L1.66797 9.70599Z" stroke="#FFFF00" stroke-width="2"/>
      </svg>
    </span>

    <span @click="toggle = !toggle" v-if="toggle">
      <svg @click="removeEvent" class="cursor-pointer"  width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.66797 9.70599V26.115L16.659 34.321L31.65 26.115V9.70599L16.659 1.5L1.66797 9.70599Z" fill="#FFFF00" stroke="#FFFF00" stroke-width="2"/>
        <path d="M12.666 18.449L15.899 22.41L21.557 13.499" stroke="#212121" stroke-width="2"/>
      </svg>
    </span>
  </div>

</template>

<script>
export default {
  data() {
    return {
      toggle: false
    }
  },
  methods: {

    passEvent(event)
    {
      this.$emit('toggle-button', event)
    },
    removeEvent(event)
    {
      this.$emit('toggled-button', event)
    }
  }
}
</script>
