<template>
  <v-dialog
    v-model="addDialog"
    fullscreen
    :scrim="false"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        dark
        v-bind="props"
      >
        Add Car
      </v-btn>
    </template>
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-btn
          icon
          dark
          @click="closeAddDialog"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Add Car</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            variant="text"
            @click="saveCar"
          >
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-layout-form
        >
          <FormBuilder :entity="car" @input="changeInput"/>
          <v-form @submit.prevent="addField" ref="AddField">
            <v-row>
              <v-col cols="5">
                <v-text-field
                  v-model="fieldName"
                  label="Field name"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-select
                  v-model="fieldType"
                  :items="fieldTypes"
                ></v-select>
              </v-col>
              <v-col cols="2">
                <v-btn color="primary" type="submit" >Add Field</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-layout-form>
      </v-card-text>
    </v-card>
  </v-dialog>
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
import { store } from '@/store'
export default defineComponent({
  name: 'AddCar',

  components: {
    FormBuilder,
    VLayoutForm
  },
  data () {
    return {
      addDialog: false,
      car: {
        brand: {
          name: '',
          model: ''
        } as Brand,
        engine: {
          type: '',
          fuel: ''
        } as Engine,
        airSuspension: true,
        exterior: {
          bodyColor: '',
          typeOfPaint: '',
          wheelSize: 15
        } as Exterior,
        interior: {
          seats: ''
        } as Interior
      } as Car,
      fieldName: '',
      fieldType: null,
      fieldTypes: [
        {
          value: '',
          title: 'String'
        },
        {
          value: 0,
          title: 'Number'
        },
        {
          value: false,
          title: 'Boolean'
        }
      ]
    }
  },
  methods: {
    closeAddDialog () {
      this.addDialog = false
    },
    changeInput (e: any) {
      if (e.name) {
        const valuePath = e.name.split('.')
        const last = valuePath.pop()
        let temp = this.car
        for (let i = 0; i < valuePath.length; i++) {
          temp = temp[valuePath[i]]
        }
        temp[last] = e.value
      }
    },
    addField () {
      this.car[this.fieldName] = this.fieldType
    },
    saveCar () {
      store.dispatch('ADD_CAR', this.car)
    }
  }
})
</script>
