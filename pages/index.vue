<template>
<body class="h-screen overflow-hidden bg-yellow">
  <nav-drawer>

  <template v-slot:toggleBtn>
    <div class="w-full mx-auto overflow-visible text-yellow bg-gray">
      <p class="w-4/5 mx-auto text-lg cursor-pointer bounce-sm">Ocultar inicio de sesión</p>
    </div>
  </template>

  <template v-slot:sidepanel>
    <section class="w-full bg-gray">
      <div class="w-4/5 mx-auto overflow-hidden text-yellow bg-gray">

        <Logo class="w-24 h-24 mx-auto lg:mt-16"/>

        <div class="space-y-4 lg:space-y-8">
          <BaseInput class="inline-block mt-4 text-white placeholder-white lg:mt-8" placeholder="NOMBRE DE USUARIO"></BaseInput>
          <BaseInput class="inline-block text-white placeholder-white" placeholder="CONSTRASEÑA"></BaseInput>
        </div>

        <div class="flex w-full mt-8 text-xs lg:text-lg justify-evenly">
          <p class="text-white whitespace-nowrap">
            ¿Has olvidado tu contraseña?
          </p>
          <base-modal
            @pass-event="passEvent"
            placeholder="Al formar parte de la comunidad de Buzz aceptas recibir pagos con Buzzcoins"
            :circleIcon="true"  >
            <!--Open Modal on custom object click-->
            <p class="cursor-pointer text-yellow bounce-sm whitespace-nowrap">
            Restaurala aqui
            </p>
          </base-modal>

        </div>



        <div class="flex flex-col w-full lg:my-8">
          <button class="w-40 h-12 mx-auto text-black rounded-full bounce-sm bg-yellow">
            INICIAR SESIÓN
          </button>

          <p class="mt-4 text-white lg:mt-8 lg:text-lg text-md">Acceder con:</p>
        </div>



        <div class="flex justify-center w-full space-x-16">
          <img class="cursor-pointer lg:h-20 bounce-sm" src="../assets/svg/fb.svg" alt="">
          <img class="cursor-pointer lg:h-20 bounce-sm" src="../assets/svg/google.svg" alt="">
        </div>

        <div class="flex w-full mt-8 text-xs text-center lg:text-lg justify-evenly">
          <p class="text-white whitespace-nowrap">
            ¿No tienes una cuenta?
          </p>
          <nuxt-link to="/registrate">
            <p class="cursor-pointer text-yellow bounce-sm">
              REGISTRATE
            </p>
          </nuxt-link>
        </div>
      </div>
    </section>

  </template>

  <template v-slot:content>
    <section class="flex flex-col w-full h-screen overflow-hidden text-gray bg-yellow">
      <div  class="w-full lg:mt-16 filter backdrop-filter drop-shadow-sm">
        <Logo class="w-24 h-24 mx-auto lg:mt-16 lg:h-40 lg:w-40"/>
        <div class="flex justify-center w-full mt-8">
          <h1 class="mb-8 text-4xl lg:text-7xl lato md:text-5xl">
            ¡Únete a Buzz!
          </h1>
        </div>
        <div class="flex justify-center w-full ">
          <h2 class="mb-16 font-light lg:text-3xl">Paga y recoge cuando quieras</h2>
        </div>
        <div class="flex justify-center w-full h-12 space-x-4 lg:h-16 lg:space-x-24">
          <img src="../assets/svg/burgerLogo.svg" alt="">
          <img src="../assets/svg/gas.svg" alt="">
          <img src="../assets/svg/movies.svg" alt="">
          <img src="../assets/svg/heart.svg" alt="">
        </div>
        <h3 class="flex justify-center my-8 mt-12 text-sm font-semibold lg:text-xl">Compra en tu establecimiento favorito</h3>
      </div>
      <div class="flex">
      <div class="hidden w-1/6 h-24 lg:w-1/4 bg-gray lg:block"></div>
      <div class="flex justify-center w-2/3 h-12 mx-8 mt-4 space-x-8 text-black lg:w-1/2">
        <BaseMarque/>
      </div>
      <div class="hidden w-1/6 h-24 lg:w-1/4 bg-gray lg:block"></div>
    </div>
  </section>
  <MobileMenu class="absolute bottom-0"/>
  </template>

</nav-drawer>
</body>



</template>

<script lang="js">
import Logo from '~/components/Logo.vue'
import BaseMarque from '../components/indexComponents/BaseMarque.vue'
import MobileMenu from '../components/indexComponents/MobileMenu.vue'
import NavDrawer from '~/components/indexComponents/NavDrawer.vue'
import BaseModal from '~/components/BaseModal.vue'

export default {
  components:
    { Logo, BaseMarque, MobileMenu, NavDrawer, BaseModal },
}
</script>

<style>
  .bounce-sm:hover {
      animation-name: bounce-sm;
      animation-timing-function: ease;
      animation-duration: 1s;
    }
  @keyframes bounce-sm {
      0%   { transform: scale(1,1)    translateY(0); }
      10%  { transform: scale(1.1,.9) translateY(0); }
      30%  { transform: scale(.9,1.1) translateY(-10px); }
      50%  { transform: scale(1,1)    translateY(0); }
      100% { transform: scale(1,1)    translateY(0); }
    }
</style>
