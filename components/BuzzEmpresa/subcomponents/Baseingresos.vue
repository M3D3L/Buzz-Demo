<template>
  <div :class="{
          'bg-yellow': porcentaje > 0 ,
          'bg-jet': porcentaje <= 0
          }"
          class="flex justify-center h-24 rounded-lg w-96">

        <span class="w-3/4 ">
          <div
          :class="porcentaje > 0 ? 'text-jet': 'text-yellow'"
          class="mt-1 ml-8 text-sm ">
            <p class="text-lg text-bold">Ingresos generales</p>
            <span class="flex flex-row">
              <p class="text-xl font-semibold">${{total}}</p>
              <div class="flex w-12 h-6 pl-2 ml-8 text-center bg-black rounded-full text-orange border-orange">
                <p  :class="{
                'hidden': porcentaje < 0 }">+</p>
                <p>{{porcentaje}}%</p>
              </div>
            </span>

          </div>
        </span>

        <span class="w-1/4 ">
            <base-arrow :class="{
            '-rotate-90': porcentaje >= 0,
            'rotate-90': porcentaje < 0 }" class="w-12 h-10 mt-6 mr-6 transform text-orange"></base-arrow>
        </span>

  </div>
</template>

<script>
import BaseArrow from '/components/BaseArrow.vue'
export default {
  components: { BaseArrow },
  props: ['color', 'up', 'mensaje', 'total', 'porcentaje', 'hora'],
  data(){
    return {
      time: false,

    }
  }
}
</script>
