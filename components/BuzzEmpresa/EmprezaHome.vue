<template>
<div class="relative flex flex-col w-full min-h-screen overflow-y-hidden lg:flex-row h-100 bg-gray">


    <div class="flex-row text-white lg:border-r-8 lg:mt-32 lg:flex-col lg:w-1/5 border-jet lg:flex">
      <div class="w-full py-8 space-y-8">

        <ul
        v-for="monthlyTotal in monthlyTotals">
          <li>
            <base-ingresos
              :mensaje= monthlyTotal.mensaje :total= monthlyTotal.total
              :porcentaje= monthlyTotal.porcentaje>
            </base-ingresos>
          </li>
        </ul>
      </div>

    </div>

    <div class="relative flex flex-col w-full lg:w-4/5">

      <BaseSlider class="mt-4 lg:mt-16" title="Favoritos" :cards='favorites'/>

      <BaseSlider class="mt-4 lg:mt-16" title="Cerca de ti" :cards='nearby'/>

      <BaseSlider class="mt-4 lg:mt-16" title="Populares" :cards='popular'/>


    </div>


</div>

</template>

<script>
import BaseIngresos from '../BuzzEmpresa/subcomponents/Baseingresos.vue'
import BaseSlider from './BaseSlider.vue'
import GenericSlider from '../subcomponents/GenericSlider.vue'


export default {
  components: {
    BaseIngresos,
    BaseSlider,
    GenericSlider
},
  data(){
    return{
      favorites:[
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 5,
          rating:1,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 4,
          rating:2,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:3,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:4,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:5,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:1,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:4,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:4,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 4,
          rating:2,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:3,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:4,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:5,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:3,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:4,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:4,
          icon:"food",
          logo:"McDonalds",

        },


      ],
      nearby:[
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 1,
          rating:1,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 2,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 3,
          rating:3,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 4,
          rating:4,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:5,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 1,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 2,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 3,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },


      ],
      popular:[
        {
          name:"Mcdonalds",
          address:"Cananea 1145",
          distance: 3,
          rating:4,
          icon:"food",
          logo:"McDonalds",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },
        {
          name:"Caffenio",
          address:"Cananea 1145",
          distance: 5,
          rating:2,
          icon:"coffee",
          logo:"Caffenio",

        },

      ],
      monthlyTotals:[
        {  mensaje: 'Hola Buzz', total: 44444, porcentaje: 6  },
        {  mensaje: 'Hola Buzz Dos', total: 5444, porcentaje: -6  },
        {  mensaje: 'Hola Buzz Dos', total: 5444, porcentaje: -6  },
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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

    }
  },
  methods: {
    toggleMenuSelector(value) {
      this.componentMenu = value;
    },
    toggleMenu(onClickValue) {
      this.menuDisplay.push(onClickValue);
    },
    toggledMenu(onClickValue) {
      return this.menuDisplay = this.menuDisplay.filter(onClickValue);
    }
  },

}
</script>

<style>

    @media (min-width: 1024px) {
        .panel-height{
          height: 40rem;
        }

    }

  .h-100{
    height: 100%;
  }

  .glow:hover {

    box-shadow: 1px 1px #ff0, 0em 0 1em #ff0;
  }

</style>
