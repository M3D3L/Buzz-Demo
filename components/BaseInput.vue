<template>
    <v-text-field
      dark
      :value="value"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
      color="yellow"
      :label="placeholder"
      hide-details="auto">

    </v-text-field>
</template>

<script lang="ts">

export default {
    props: {
      placeholder: {
        required: true,
        type: String,
        default: "Add text through prop placeholder='Hello World'"
      },
      value: {
        required: false,
        type: String,
        default: ""
      },
    }
  }
</script>
