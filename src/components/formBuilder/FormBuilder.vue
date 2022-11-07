<template>
  <v-row>
    <v-col cols="12">
      <v-form ref="form">
        <template v-for="[key, item] of Object.entries(entity)" :key="key">
          <template v-if="typeof item === 'object'">
            <template  v-for="[subKey, subItem] of Object.entries(item)" :key="subKey">
              <component :is="typeof subItem" :value="subItem" :name="key +'.' + subKey" :label=" key.toUpperCase() +' - '+subKey.toUpperCase()" @input="changeInputHandler"></component>
            </template>
          </template>
          <template v-else>
            <component :is="typeof item" :value="item" :name="key" :label="key.toUpperCase()" @input="changeInputHandler"></component>
          </template>
        </template>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VInput from '@/components/formBuilder/VInput.vue'
import VCheckbox from '@/components/formBuilder/VCheckbox.vue'
import VNumber from '@/components/formBuilder/VNumber.vue'

export default defineComponent({
  name: 'FormBuilder',
  components: {
    string: VInput,
    boolean: VCheckbox,
    number: VNumber
  },
  props: {
    entity: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeInputHandler (e: any) {
      const value = e.value
      this.$emit('input', { value, name: e.name })
    }
  }
})
</script>
