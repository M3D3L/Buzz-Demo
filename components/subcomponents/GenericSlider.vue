<template>
  <div class="flex flex-col w-full overflow-x-hidden text-white">
    <div v-swiper="swiperOption" class="w-full " :loadtheme="false">
      <div class="flex swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
