<template>
  <div class="w-full lg:hidden">
      <v-bottom-navigation
    :value="value"
    color="#ff0"
    background-color="#212121"
  >
    <v-btn>
      <span class="text-yellow">Nosotros</span>

      <v-icon
      color="#ff0"
      >mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span class="text-yellow">Únete</span>

      <v-icon
      color="#ff0"
      >mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span class="text-yellow">Negocios</span>

      <v-icon
      color="#ff0"
      >mdi-map-marker</v-icon>
    </v-btn>

    <v-btn>
      <span class="text-yellow">Contáctanos</span>

      <v-icon
      color="#ff0"
      >mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </div>
</template>
