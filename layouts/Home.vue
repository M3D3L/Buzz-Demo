<template>
  <div class="h-full bg-gray">
    <base-header></base-header>
      <Nuxt />
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import BaseHeader from '../components/BuzzEmpresa/subcomponents/BaseHeader.vue'

export default {
  components: {
    Logo,
    BaseHeader
  }
}
</script>
