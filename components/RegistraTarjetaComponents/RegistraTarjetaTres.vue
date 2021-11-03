<!--TODO FORM NEEDS TO BE CONFIGURED TO SUBMIT. I NEED TO MAKE IT SO IF AN ICON IS TOGGLED THE REST ARE SET TO BASE CSS.
ARROW BUTTON ONLY WORKING AFTER MULTIPLE CLICKS-->

<template>

<section  class='relative flex-col w-full'>
  <square-bg-header @back-event="backEvent" :hideLogo='true'></square-bg-header>
  <div class="flex-col w-4/5 mx-auto text-white">
    <div class="flex-col justify-start w-full text-xl text-yellow">
      <span class="w-full">Sector
      </span>
      <br>
      <span class="w-full text-lg text-white">
        Elije el sector que albarca tu empresa
      </span>
    </div>
    <!--Toggle Icon true/false while changing tipoSector value-->
    <div class="relative w-full h-full mt-8 space-y-2">
      <icon-toggle-row @click.native="elijeSector('Comida')" placeholder="Comida">
        <SvgComida class="w-12 h-12"/>
      </icon-toggle-row>
      <icon-toggle-row @click.native="elijeSector('Salud')" placeholder="Salud Y Belleza">
        <SvgSalud class="w-12 h-12"/>
      </icon-toggle-row>
      <icon-toggle-row @click.native="elijeSector('Entretenimiento')" placeholder="Entretenimiento">
        <SvgEntretenimiento class="w-12 h-12"/>
      </icon-toggle-row>
      <icon-toggle-row @click.native="elijeSector('Gasolina')" placeholder="Gasolina">
        <SvgGasolina class="w-12 h-12"/>
      </icon-toggle-row>
      <icon-toggle-row @click.native="elijeSector('Convenencia')" placeholder="Tienda de Convenencia">
        <SvgConvenencia class="w-12 h-12"/>
      </icon-toggle-row>
      <icon-toggle-row  @click.native="elijeSector('Otro')" placeholder="Otro">
        <SvgOtro class="w-12 h-12"/>
      </icon-toggle-row>
    </div>
  </div>
  <span class="absolute flex flex-row justify-end w-full bottom-20 text-yellow">
    <base-arrow v-if="tipoSector !== ''" @click.native="passEvent"></base-arrow>
  </span>
</section>

</template>

<script>
import BaseArrow from '../BaseArrow.vue'
import SquareBgHeader from '../subcomponents/SquareBgHeader'
import SvgComida from '../svgComponents/SvgComida.vue'
import SvgSalud from '../svgComponents/SvgSalud.vue'
import SvgEntretenimiento from '../svgComponents/SvgEntretenimiento.vue'
import SvgGasolina from '../svgComponents/SvgGasolina.vue'
import SvgConvenencia from '../svgComponents/SvgConvenencia.vue'
import SvgOtro from '../svgComponents/SvgOtro.vue'
import RegistraTarjetaCuatro from '../RegistraTarjetaComponents/RegistraTarjetaCuatro.vue'
import IconToggleRow from '../subcomponents/iconToggleRow.vue'

export default {
  components: {
    SvgComida,
    SvgSalud,
    SvgEntretenimiento,
    SvgGasolina,
    SvgConvenencia,
    SvgOtro,

    RegistraTarjetaCuatro,
    IconToggleRow,
    BaseArrow,
    SquareBgHeader
    },

  methods: {
    passEvent(event)
    {
      this.$emit('pass-event', RegistraTarjetaCuatro)
    },
    backEvent(event)
    {

    },

    elijeSector(event) {
      this.tipoSector=event;
    },
  },
  computed: {
    tipoSector: {
      get () {
      return this.$store.state.tipoSector
      },
      set (tipoSector) {
      return this.$store.commit('updateTipoSector',  tipoSector )
      }
    },
  }
  }

</script>
