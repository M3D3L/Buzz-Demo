<template>
<div>

<div class="wrapper">
  <div class="boxes">
    <div class="box"></div>
    <img class="box hover:text-orange" src="./caffenio.svg" alt="">
    <div class="box "></div>
    <img class="box hover:text-orange" src="./mcdonalds.svg" alt="">
    <div class="box "></div>
    <img class="box hover:text-orange" src="./cinepolis.svg" alt="">
    <div class="box "></div>
    <img class="box hover:text-orange" src="./walmart.svg" alt="">
    <div class="box "></div>
    <img class="box hover:text-orange" src="./alamosCafe.svg" alt="">

</div>
</div>
</div>

</template>

<style>

.wrapper{
  width:450px;
  height:50px;
  position:relative;
  margin:auto;
  overflow:hidden;
}

.wrapper::after {
  width:448px;
  height:48px;
  content:"";
  position:absolute;
}

.box{
  width:50px;
  height:50px;
  position:absolute;
  font-size:25px;
  line-height:50px;
  text-align:center;

}



.boxes {
  position:relative;
  left:-50px;
}

.nav {
  position:relative;
  text-align:center;

  margin:20px 0;
}
</style>

<script>
import { gsap } from "gsap/dist/gsap";
  export default {
  mounted() {
    var colors = ["#ff0"];

//initially colorize each box and position in a row
gsap.set(".box", {
  backgroundColor: (i) => colors[i % colors.length],
  x: (i) => i * 50
});


gsap.to(".box", {
  duration: 5,
  ease: "none",
  x: "+=500", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1
});

}
}
</script>
