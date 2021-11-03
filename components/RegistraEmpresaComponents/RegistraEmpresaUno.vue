<!--TODO FORM NEEDS TO BE CONNECTED-->
<template>
  <section class="relative">
    <!--Header and back arrow found at top of the page-->
    <square-bg-header @back-event="backEvent"></square-bg-header>
    <div >
      <div class="w-3/5 mx-auto my-4 ">
        <p class="text-xl text-white ">Tipo de usuario</p>
      </div>
      <!--Displays user type-->
      <negocio-selected ></negocio-selected>
    </div>

    <div class="w-4/5 mx-auto mt-8">
    <!--Form Begin-->
      <form class="space-y-8 text-white ">
        <!--Base Input can change classes by adding the color prop. example: color="text-blue-600"-->
        <BaseInput placeholder="Email"/>
        <BaseInput placeholder="Contraseña"/>
        <BaseInput placeholder="Confirmar Contraseña"/>
        <div v-if="password !=  passwordConfirm" class="flex justify-center w-4/5 px-1 mx-auto text-sm text-yellow">
        Para continuar asegurate que ambas contraseñas sean iguales
        </div>
      </form>
    </div>
    <!--Base Modal can recieve custom button by wrapping around it through slots-->
    <!--v-if="email !== '' && password !== '' && password == passwordConfirm"-->
    <div>
    </div>
    <span class="w-full ">
      <base-modal
        @pass-event="passEvent"
        placeholder="Al formar parte de la comunidad de Buzz aceptas recibir pagos con Buzzcoins"
        :circleIcon="false"  >
        <!--Open Modal on custom object click-->
        <span  class="absolute flex flex-row justify-end w-full bottom-20">
        <BaseArrow class="w-16 transform cursor-pointer text-yellow animate-pulse"  />
        </span>
      </base-modal>
    </span>




  </section>
</template>

<script>
import SquareBgHeader from '../subcomponents/SquareBgHeader.vue'
import NegocioSelected from '../subcomponents/NegociosSelected.vue'
import BaseModal from '../BaseModal.vue'
import BaseArrow from '../subcomponents/BaseArrow.vue'
import BaseInput from '../BaseInput.vue'
import TipoUsuario from './TipoUsuario.vue'
import RegistraTarjetaTres from '../RegistraTarjetaComponents/RegistraTarjetaTres.vue'

export default {
  components: {
    SquareBgHeader,
    NegocioSelected,
    TipoUsuario,
    BaseModal,
    BaseArrow,
    RegistraTarjetaTres,
    BaseInput,
    },
  data() {
  return {
    passwordConfirm: '',

  }
  },
  computed: {
      email: {
    get () {
      return this.$store.state.email
    },
    set (email) {
      return this.$store.commit('updateEmail',  email )
    }
  },
    password: {
    get () {
      return this.$store.state.password
    },
    set (password) {
      return this.$store.commit('updatePassword',  password )
    }
  }
  },

  methods: {

    updateEmail(email) {
      this.$store.commit('updateEmail', email)
    },

    passEvent(event)
    {
      this.$emit('pass-event', RegistraTarjetaTres)
    },

    backEvent(event)
    {
      this.$emit('pass-event', TipoUsuario)
    },

  },

}


</script>

