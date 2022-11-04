<template>
  <v-row>
    <v-col cols="6">
      <slot />
    </v-col>
    <v-col cols="6">
      <span class="text-h6">Form Data</span>
      {{ formData }}
      <span class="text-h6">Error</span>
      {{ error }}
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
  props: {
    formData: Object,
    error: Object
  }
})
export default class VLayoutForm extends Vue {}
</script>
