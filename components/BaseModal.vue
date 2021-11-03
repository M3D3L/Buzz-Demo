<template>
  <div class="h-3/4">
    <v-dialog
        justify="center"
        transition="dialog-bottom-transition"
        max-width="600">
      <template v-slot:activator="{ on }">
      <span v-on="on">
        <slot class="cursor-pointer"></slot>
      </span>
      </template>

        <div class="px-8 pt-8 md:px-24 h-96 bg-gray rounded-3xl">
          <img
          @click="dialog.value = false"
          :class="{ 'invisible': circleIcon }"
          class="w-12 h-16 transform -rotate-180 cursor-pointer md:w-16" src="../assets/svg/arrow.svg" alt="">
          <Logo class="w-16 mb-4 md:w-24 text-yellow"/>
          <p
          :placeholder:string="placeholder"
          class="px-8 tracking-widest text-center text-white">{{ placeholder }}</p>
          <div
          :class="{ 'hidden': !circleIcon }"
          class="flex justify-center w-full">
            <span @click="passEvent">
              <svg @click="dialog.value = false" class="w-12 cursor-pointer md:w-16"  viewBox="0 0 62.944 62.952">
              <path id="Path_1038" data-name="Path 1038" d="M215.591,808.166a31.478,31.478,0,1,1-.926,62.945c-17.184-.352-31.007-14.325-30.658-32.429A31.466,31.466,0,0,1,215.591,808.166Zm-10.824,26.013a4.484,4.484,0,0,0-4.128,2.832,4.556,4.556,0,0,0,1.022,5.279c2.412,2.459,4.822,4.922,7.307,7.306,2.311,2.216,4.875,2.183,7.158-.063q6.566-6.461,13.042-13.012a5.847,5.847,0,0,0,1.4-2.373,4.745,4.745,0,0,0-7.987-4.559q-4.649,4.565-9.242,9.187c-.609.614-1.014.683-1.626.012-.957-1.051-2-2.025-3.013-3.021A5.278,5.278,0,0,0,204.767,834.179Z" transform="translate(-184 -808.166)" fill="#ff0"/>
            </svg>
            </span>

          </div>
          <span class="flex justify-end w-full transform text-yellow animate-pulse">
            <base-arrow @click.native="passEvent" :class="{ 'hidden': circleIcon }"></base-arrow>
          </span>


        </div>

    </v-dialog>
  </div>
</template>

<script lang="ts">
import BaseArrow from './BaseArrow.vue'
export default {
  components:
  {
    BaseArrow },
    props: {
      placeholder: {
        required: false,
        type: String,
        default: "Use prop placeholder='Add Text'"
      },
      circleIcon: {
        required:false,
        type: Boolean,
        default: false
      },

    },
    methods: {
    passEvent(event)
    {
      this.$emit('pass-event', event)
    }

  }

}
</script>

<style>
  .v-dialog:hover {
    box-shadow: 1px 1px #ff0, 0em 0 1em #ff0;

}
</style>

