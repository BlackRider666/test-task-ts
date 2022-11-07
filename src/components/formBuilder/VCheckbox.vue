<template>
  <v-select
    @update:modelValue="handleInput"
    :model-value="value"
    :items="items"
    :name="name"
    :label="label?label:''"
    :error="error.length > 0"
    :error-messages="error"
  ></v-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VCheckbox',
  props: {
    value: Boolean,
    label: String,
    name: String,
    error: {
      type: Array,
      default: []
    }
  },
  emits: ['input'],
  data () {
    return {
      items: [
        {
          value: false,
          title: 'No'
        },
        {
          value: true,
          title: 'Yes'
        }
      ]
    }
  },
  methods: {
    handleInput (value: any) {
      this.$emit('input', { value, name: this.name })
    }
  }
})
</script>
