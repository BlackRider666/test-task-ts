<template>
  <v-text-field
    type="number"
    step="any"
    min="0"
    :label="label?label:''"
    :value="value"
    :name="name"
    @input="handleInput"
    :error="error.length > 0"
    :error-messages="error"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VNumber',
  props: {
    value: Number,
    label: String,
    name: String,
    error: {
      type: Array,
      default: []
    }
  },
  emits: ['input'],
  methods: {
    handleInput (e: any) {
      const value = e.target.value
      this.$emit('input', { value, name: this.name })
    }
  }
})
</script>
