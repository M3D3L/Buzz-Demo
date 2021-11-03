<template>
  <div>
    <div class="flex w-full ">
      <div class="text-orange w-14 h-14">
        <slot></slot>
      </div>
      <p
        :placeholder="placeholder"
        class="w-full mt-4 ml-4 text-lg">{{ placeholder }}
      </p>
      <div class="flex justify-end mt-4">
          <toggle-button></toggle-button>
        </div>
      </div>
  </div>
</template>

<script>
import ToggleButton from "./ToggleButton.vue"

export default {
props: [  "placeholder" ],
components: {
  ToggleButton
},

}
</script>
