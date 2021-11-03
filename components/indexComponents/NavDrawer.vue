<template>
  <v-card >
    <div class="overflow-hidden bg-yellow">

      <header class="flex w-full pt-4 bg-yellow">

        <div class="justify-around hidden w-full pt-4 text-lg font-semibold lg:flex lg:w-2/3 xl:w-1/2">
          <p class="cursor-pointer bounce-sm">Nosotros</p>
          <p class="cursor-pointer bounce-sm">Únete a Buzz</p>
          <p class="cursor-pointer bounce-sm">Negocios</p>
          <p class="cursor-pointer bounce-sm">Contáctanos</p>
        </div>

        <div class="flex justify-end pr-16 text-black lg:w-1/3 xl:w-1/2 ">
          <div class="inline-block pt-4 text-sm font-semibold lg:text-lg whitespace-nowrap">
            <span @click.stop="drawer = !drawer" class="flex space-x-2 cursor-pointer bounce-sm">
              <img class="w-4 h-4 lg:w-6 lg:h-6" src="/components/indexComponents/inicio.svg" alt="">
              <p>Mostrar inicio de sesión</p>
            </span>
          </div>
        </div>

      </header>
      <slot  name="navBar"></slot>

      <v-navigation-drawer
        v-model="drawer"
        right
        temporary
        width="500px"
      >
        <div class="w-full h-screen bg-gray">

          <div class="py-8" @click.stop="drawer = !drawer">
            <slot name="toggleBtn"></slot>
          </div>

          <slot name="sidepanel"></slot>
        </div>

      </v-navigation-drawer>

      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>

    </div>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style>
  .v-card__text {
    @apply p-0;
  }


  .v-card {
    @apply relative shadow-none h-screen;
  }

  .v-navigation-drawer {
    @apply absolute;
  }

</style>
