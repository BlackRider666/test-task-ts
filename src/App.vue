<template>
  <v-app>
    <v-main>
      <v-container>
        <CarList/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CarList from './components/cars/CarsList.vue'

export default defineComponent({
  name: 'App',

  components: {
    CarList
  },

  data () {
    return {
      //
    }
  }
})
</script>
