<template>
  <div class="relative flex justify-center w-4/5 mx-auto mt-8 h-72 bg-jet rounded-3xl lg:h-96">
    <p class="mt-8 text-xl">{{text}}</p>
    <client-only>
      <VueApexCharts
        class="absolute transform scale-75 cursor-pointer lg:bottom-0 bottom-10 lg:scale-150 md:scale-100"
        type="donut" :options="options" :series="series">
      </VueApexCharts>
    </client-only>
  </div>
</template>

<script>
export default {
  components: {
    VueApexCharts: () => import('vue-apexcharts')
  },
  data() {
    return {
      options: {
        legend: {
        show: true,
        position: 'right',
        labels: {
          colors: 'white',
          useSeriesColors: false
          },
        },
        labels: [this.textArray[0], this.textArray[1], this.textArray[2], this.textArray[3], this.textArray[4]].slice(0, this.seriesNum),
        colors: ['#ff0', '#FF8500', '#FF8500', '#FF8500', '#FF8500'],
        stroke:{
          colors:['#2d2d2d'],
          width:3,
        },
      },
      text: this.message,
      series: [this.valueArray[0], this.valueArray[1], this.valueArray[2], this.valueArray[3], this.valueArray[4]].slice(0, this.seriesNum),

    }
  },
  props: {
    valueArray: {
        required: false,
        type: Array,
        default: [20,20,20,20,20]
      },
      textArray: {
        required: false,
        type: Array,
        default: ["Producto1","Producto2","Producto3","Producto4","Producto4"],
      },
      message: {
        required: false,
        type: String,
        default: "Add Text"
      },
      labelPosition: {
        required: false,
        type: String,
        default: "right"
      },
      seriesNum: {
        required: false,
        type: Number,
        default: 5
      }

    },
}
</script>
