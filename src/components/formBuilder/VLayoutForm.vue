<template>
  <v-row>
    <v-col cols="12">
      <slot />
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
