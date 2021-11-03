<template>
    <div class="w-4/5 mx-auto">
      <v-app  style="background-color:transparent;">
        <component class="cstm-h" :is="component" @pass-event="togglePageChange" />
      </v-app>
    </div>
</template>

<!--"pages" -->
<script lang="ts">

import TipoUsuario from "~/components/RegistraEmpresaComponents/TipoUsuario.vue";
import RegistraEmpresaUno from "~/components/RegistraEmpresaComponents/RegistraEmpresaUno.vue";
import RegistraTarjetaTres from "~/components/RegistraTarjetaComponents/RegistraTarjetaTres.vue";
import RegistraTarjetaCuatro from "~/components/RegistraTarjetaComponents/RegistraTarjetaCuatro.vue";

export default {
//background
  layout: 'SquareBg',
  data() {
    return {
      //current "page"
      component: TipoUsuario
    }
  },

    components: {
  TipoUsuario,
  RegistraEmpresaUno,
  RegistraTarjetaTres,
  RegistraTarjetaCuatro
  },

  //Page toggle
  methods: {
    togglePageChange(event) {
      this.component=event;
    },
  },
}

</script>

<style>
.cstm-h{
height: 50rem;
}
</style>
