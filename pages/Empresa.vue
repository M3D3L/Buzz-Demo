<template>
    <div class="bg-gray">
      <BaseHeader/>
      <v-app  style="background-color:transparent; ">
        <component class="w-full h-screen" :is="component" @pass-event="togglePageChange" />
      </v-app>
    </div>
</template>

<script lang="ts">
import EmprezaHome from "../components/BuzzEmpresa/EmprezaHome.vue";
import BaseHeader from '../components/BuzzEmpresa/subcomponents/BaseHeader.vue';

export default {
//background
  data() {
    return {
      //current "page"
      component: EmprezaHome
    }
  },
    components: {
    EmprezaHome,
    BaseHeader
},

}

</script>
