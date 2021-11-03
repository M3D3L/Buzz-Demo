<template>
<div class="p-0 m-0 border-none btn">

  <svg @click="toggle=!toggle" v-if="!toggle" class="w-10 h-10 cursor-pointer"  fill='none' viewBox="0 0 97.034 109.056">
  <path id="Path_893" data-name="Path 893" d="M254.517,355.135V311.068a9.355,9.355,0,0,0-4.677-8.1l-38.163-22.033a9.354,9.354,0,0,0-9.354,0L164.16,302.967a9.355,9.355,0,0,0-4.677,8.1v44.067a9.355,9.355,0,0,0,4.677,8.1l38.163,22.033a9.354,9.354,0,0,0,9.354,0l38.163-22.033A9.355,9.355,0,0,0,254.517,355.135Z" transform="translate(-158.483 -278.573)" fill="jet" stroke="#ff0" stroke-miterlimit="10" stroke-width="4"/>
  </svg>
  <svg @click="toggle=!toggle" v-if="toggle" class="w-10 h-10 cursor-pointer"   fill='#ff0' viewBox="0 0 97.034 109.056">
  <path id="Path_893" data-name="Path 893" d="M254.517,355.135V311.068a9.355,9.355,0,0,0-4.677-8.1l-38.163-22.033a9.354,9.354,0,0,0-9.354,0L164.16,302.967a9.355,9.355,0,0,0-4.677,8.1v44.067a9.355,9.355,0,0,0,4.677,8.1l38.163,22.033a9.354,9.354,0,0,0,9.354,0l38.163-22.033A9.355,9.355,0,0,0,254.517,355.135Z" transform="translate(-158.483 -278.573)" fill="jet" stroke="#ff0" stroke-miterlimit="10" stroke-width="4"/>
  <svg class="w-4 h-4" viewBox="0 0 20 20" fill="#2d2d2d">
  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>
  </svg>

</div>

</template>

<script>
export default {
  data() {
    return {
      toggle: false
    }
  }
}
</script>
