<template>
  <v-layout-form
  >
    <FormBuilder :entity="car" @input="changeInput"/>
  </v-layout-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormBuilder from '@/components/formBuilder/FormBuilder.vue'
import Car from '@/types/Car'
import VLayoutForm from '@/components/formBuilder/VLayoutForm.vue'
import Brand from '@/types/CarTypes/Brand'
import Engine from '@/types/CarTypes/Engine'
import Exterior from '@/types/CarTypes/Exterior'
import Interior from '@/types/CarTypes/Interior'
export default defineComponent({
  name: 'AddCar',

  components: {
    FormBuilder,
    VLayoutForm
  },
  data () {
    return {
      car: {
        brand: {
          name: '',
          model: ''
        } as Brand,
        engine: {
          type: '',
          fuel: ''
        } as Engine,
        airSuspension: false,
        exterior: {
          bodyColor: '',
          typeOfPaint: '',
          wheelSize: 15
        } as Exterior,
        interior: {
          seats: ''
        } as Interior
      } as Car
    }
  },
  methods: {
    changeInput (e: any) {
      // const valuePath = e.name.split('.')
      // const last = valuePath.pop()
      // let temp = this.car
      //
      // for (let i = 0; i < valuePath.length; i++) {
      //   temp = temp[valuePath[i]]
      // }
      // temp[last] = e.value
      console.log({ value: e.value, name: e.name })
    }
  }
})
</script>
