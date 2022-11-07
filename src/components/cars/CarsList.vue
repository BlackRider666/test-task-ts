<template>
  <v-row>
      <v-col cols="6">
        <span class="text-h5">Cars List</span>
        <AddCar/>
        <v-list>
          <v-list-item
            :class="{ active: index === currentIndex }"
            v-for="(car, index) in cars"
            :key="index"
            @click="setActiveCar(car, index)"
          >
            {{ car.brand.name + '-' + car.brand.model }}
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="6">
        <template v-if="currentCar.length > 0">
          <span class="text-h5">Car</span>
          <v-list>
            <v-list-item v-for="(key,value) in Object.entries(currentCar)" :key="key">
              <v-list-item-title><strong>{{key}}</strong> : {{value}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </template>
        <template v-else>
          <span class="text-h5">Please click on a Car...</span>
        </template>
      </v-col>
  </v-row>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Car from '@/types/Car'
import AddCar from '@/components/cars/AddCar.vue'
// import CarDataService from '@/services/CarDataService'

export default defineComponent({
  name: 'CarsList',
  components: {
    AddCar
  },
  data () {
    return {
      cars: [] as Car[],
      currentCar: {} as Car,
      currentIndex: -1,
      addDialog: false
    }
  },
  methods: {
    retrieveCars () {
      // CarDataService.getAll()
    },
    setActiveCar (car: Car, index = -1) {
      this.currentCar = car
      this.currentIndex = index
    }
  },
  mounted () {
    this.retrieveCars()
  }
})
</script>
