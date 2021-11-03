<!--FORM NEEDS TO BE CONFIGURED TO SUBMIT-->

<template>
  <section class="relative">
    <square-bg-header  @back-event="backEvent" :hideLogo='true'></square-bg-header>
    <div class="relative flex flex-wrap justify-center w-4/5 mx-auto overflow-y-scroll text-gray cstm-container">
    <!--The icon-container can wrap around any object to add the appropriate icon width/height
    you can adjust the settings in the icon-container component to determine how many icons
    fit per row.-->
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: .75, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Burger')" placeholder="Burger">
        <!--SVGS are imported as .VUE components since they will not keep their
        hover css effects if imported as <img src='file'> . CSS effects will only
        remain if imported as .VUE file or pasting SVG code directly. -->
        <SvgBurger/>
      </icon-container>
      <!--Submits tipoComida-->
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 2, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Pizza')" placeholder="Pizza">
        <SvgPizza/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 2, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Sushi')" placeholder="Sushi">
        <SvgSushi/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 2, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Cafe')" placeholder="Café">
        <SvgCafe/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 1.5, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Tacos')" placeholder="Tacos">
        <SvgTaco/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 1.5, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Pollo')" placeholder="Pollo">
        <SvgPollo/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 1.5, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Pescado')" placeholder="Pescado">
        <SvgPescado/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 1.5, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Carne')" placeholder="Carne">
        <SvgCarne/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 1, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Bar')" placeholder="Bar">
        <SvgBar/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 1, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Pastel')" placeholder="Pastel">
        <SvgPastel/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 1, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Hotdog')" placeholder="Hotdog">
        <SvgHotdog/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: 1, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Gourmet')" placeholder="Gourmet">
        <SvgGourmet/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration:.5, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Botana')" placeholder="Botana">
        <SvgBotana/>
      </icon-container>
      <icon-container v-gsap.fromTo="[
                { opacity: 0, y: -50, y:-400, duration: .5, },
                { opacity: 1, y: 25, y: 0,  duration: 1 },
              ]" @click.native="elijeComida('Boneless')" placeholder="Boneless">
        <SvgBoneless/>
      </icon-container>
      <!--Black Glass effect at the bottom of screen-->
    </div>
    
    <div class="absolute flex flex-row justify-end w-full bottom-20">
      <nuxt-link to="/empresa">
        <base-arrow class="transform text-yellow animate-pulse"></base-arrow>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import IconContainer from '../subcomponents/iconContainer.vue'
import SquareBgHeader from '../subcomponents/SquareBgHeader.vue'
import BaseArrow from '../BaseArrow.vue'
import SvgBurger from '../svgComponents/SvgBurger.vue'
import SvgPizza from '../svgComponents/SvgPizza.vue'
import SvgSushi from '../svgComponents/SvgSushi.vue'
import SvgCafe from '../svgComponents/SvgCafe.vue'
import SvgTaco from '../svgComponents/SvgTaco.vue'
import SvgPollo from '../svgComponents/SvgPollo.vue'
import SvgPescado from '../svgComponents/SvgPescado.vue'
import SvgCarne from '../svgComponents/SvgCarne.vue'
import SvgBar from '../svgComponents/SvgBar.vue'
import SvgPastel from '../svgComponents/SvgPastel.vue'
import SvgHotdog from '../svgComponents/SvgHotdog.vue'
import SvgGourmet from '../svgComponents/SvgGourmet.vue'
import SvgBotana from '../svgComponents/SvgBotana.vue'
import SvgBoneless from '../svgComponents/SvgBoneless.vue'
import RegistraTargetaTres from './RegistraTarjetaTres.vue'

export default {
  components: {
    IconContainer,
    BaseArrow,
    SquareBgHeader,
    SvgBurger,
    SvgPizza,
    SvgSushi,
    SvgCafe,
    SvgTaco,
    SvgPollo,
    SvgPescado,
    SvgCarne,
    SvgBar,
    SvgPastel,
    SvgHotdog,
    SvgGourmet,
    SvgBotana,
    SvgBoneless,
    RegistraTargetaTres
    },

  methods: {
    elijeComida(event) {
    this.tipoComida=event;
    },
    backEvent(event)
    {
    this.$emit('pass-event', RegistraTargetaTres)
    },
  },
  computed: {
    tipoComida: {
      get () {
      return this.$store.state.tipoComida
    },
      set (tipoComida) {
      return this.$store.commit('updateTipoComida',  tipoComida )
      }
    },
  }
}
</script>

<style scoped>
  .cstm-container{
    height: 35rem;
  }
</style>
