<template>
<div class="w-4/5 mx-auto mt-8 bg-jet rounded-3xl h-96">
  <div class="svg-item">
    <svg viewBox="0 0 40 40" class="donut w-96 h-96">
      <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="none"></circle>
      <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
      <circle @mouseover="chartValueText = 'Uno'"  class="cursor-pointer donut-segment donut-segment-1 opacity-70 hover:opacity-100" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" :stroke-dasharray="[chartValue, offset]" stroke-dashoffset="25"></circle>
      <circle @mouseover="chartValueText = 'Dos'" class="cursor-pointer donut-segment donut-segment-2 opacity-70 hover:opacity-100" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" :stroke-dasharray="[chartValueTwo, offsetTwo]" stroke-dashoffset="25"></circle>
      <circle @mouseover="chartValueText = 'Tres'" class="cursor-pointer donut-segment donut-segment-3 opacity-70 hover:opacity-100" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" :stroke-dasharray="[chartValueThree, offsetThree]" stroke-dashoffset="25"></circle>
      <circle @mouseover="chartValueText = 'Cuatro'" class="cursor-pointer donut-segment donut-segment-4 opacity-70 hover:opacity-100" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" :stroke-dasharray="[chartValueFour, offsetFour]" stroke-dashoffset="25"></circle>
      <circle @mouseover="chartValueText = 'Cinco'" class="cursor-pointer donut-segment donut-segment-5 opacity-70 hover:opacity-100" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" :stroke-dasharray="[chartValueFive, offsetFive]" stroke-dashoffset="25"></circle>
      <g class="donut-text donut-text-1">
        <text y="50%" transform="translate(0, 2)">
          <tspan :bind='chartValueText'  x="50%" text-anchor="middle" class="donut-percent">{{ chartValueText }}</tspan>
        </text>
        <text y="60%" transform="translate(0, 2)">
          <tspan x="50%" text-anchor="middle" class="donut-data">{{ offset }}</tspan>
        </text>
      </g>
    </svg>
  </div>
</div>
</template>

<script lang="ts">

export default {
    props: {
      value: {
        required: false,
        type: Number,
        default: 0
      },
      valueTwo: {
        required: false,
        type: Number,
        default: 0
      },
      valueThree: {
        required: false,
        type: Number,
        default: 0
      },
      valueFour: {
        required: false,
        type: Number,
        default: 0
      },
      valueFive: {
        required: false,
        type: Number,
        default: 0
      }
    },
    data(){
      return{
        chartValueText: 'Buzz',
        chartValueTextTwo: 'Buzz'
      }
    },
    computed: {

        chartValue: function(){
                  return (this.value + this.chartValueTwo);
                },

        chartValueTwo: function(){
                  return (this.valueTwo + this.chartValueThree);
                },

        chartValueThree: function(){
                  return (this.valueThree + this.chartValueFour);
                },

        chartValueFour: function(){
                  return (this.valueFour + this.chartValueFive);
                },

        chartValueFive: function(){
                  return (this.valueFive);
                },

        offset: function(){
                  return (100 - this.chartValue);
                },

        offsetTwo: function(){
                  return (100 - this.chartValueTwo);
                },

        offsetThree: function(){
                  return (100 - this.chartValueThree);
                },

        offsetFour: function(){
                  return (100 - this.chartValueFour);
                },

        offsetFive: function(){
                  return (100 - this.chartValueFive);
                },



        },
  }
</script>

<style>
.svg-item {
    width: 100%;
    font-size: 16px;
    margin: 0 auto;
    animation: donutfade 1s;
}

.donut-ring {
    stroke: #EBEBEB;
}

.donut-segment {
    transform-origin: center;
    stroke: #FF6200;
}

.donut-segment-2 {
    stroke: #ff0;
    animation: donut1 3s;
}

.donut-segment-3 {
    stroke: #FFB05C;
    animation: donut2 3s;
}

.donut-segment-4 {
    stroke: #FF9C33;
    animation: donut3 3s;
}

.donut-segment-5 {
    stroke: #E07400;
    animation: donut3 3s;
}

.donut-data {
    font-size: 0.12em;
    line-height: 1;
    transform: translateY(0.5em);
    text-align: center;
    text-anchor: middle;
    color:#666;
    fill: #666;
    animation: donutfadelong 1s;
}

.donut-text {
    font-family: Arial, Helvetica, sans-serif;
    fill: #FF6200;
}
.donut-text-1 {
    fill: #ff0;
}

.donut-percent {
    font-size: 0.5em;
    line-height: 1;
    transform: translateY(0.5em);
    font-weight: bold;
}
</style>
