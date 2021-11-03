<template>
  <div class="flex flex-col w-full overflow-x-hidden text-white">
    <p class="pl-8 mb-8 text-2xl">{{title}}</p>
      <div v-swiper="swiperOption" class="w-full " :loadtheme="false">
    <div class="flex swiper-wrapper">
      <ul class="swiper-slide" v-for="card in cards ">
        <li class="flex flex-row h-64 border rounded-lg cursor-pointer w-44 border-yellow border-1 glow" >
          <div class="relative flex flex-col w-2/3 p-2 mb-2 ">
            <p class="text-lg">{{card.name}}</p>
            <p class="text-sm text-orange">{{card.address}}</p>
            <p class="text-sm">{{card.distance+' km'}}</p>
            <div class="grid grid-cols-5 grid-rows-1">
              <template v-for="(n,index) in card.rating">
                <img src="./homeIcons/positveRating.svg">
              </template>
              <template v-for="i in (5 - card.rating)">
                <img src="./homeIcons/negativeRating.svg">
              </template>
            </div>
            <div class="absolute bottom-0 pl-2">
              <img  class="w-24 h-24" :src="require('./homeIcons/' + card.icon + '.svg')">
            </div>
          </div>
          <div class="relative flex flex-row justify-center w-1/3 text-white">
            <img class="absolute top-0 w-10 h-10 mt-2" :src="require('./homeMenuAssets/' + card.logo + '.svg')">
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  props: {
      cards: {
        required: false,
        type: Array,
        default: []
      },
      title: {
        required: false,
        type: String,
        default: "use props title='string' & :cards='array' { name, address, distance, rating, icon, logo}"
      },
    },

  data() {
    return {
        swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
      },
    };
  },
};
</script>

<style>
  .glow:hover {

    box-shadow: 1px 1px #ff0, 0em 0 1em #ff0;
  }
</style>
