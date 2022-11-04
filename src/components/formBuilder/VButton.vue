<template>
  <v-btn color="primary">
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
  props: {},
  name: 'VButton'
})
export default class VButton extends Vue {}
</script>
