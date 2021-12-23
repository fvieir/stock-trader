<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id"/>
  </v-layout>
</template>

<script>
import Stock from './Stock.vue'
export default {
  components: {Stock},
  data () {
    return {
      stocks: [
        {id: 1, name: 'bmw', price: 110},
        {id: 2, name: 'google', price: 200},
        {id: 3, name: 'Apple', price: 280},
        {id: 4, name: 'Twiter', price: 83},
      ]
    }
  }
}
</script>

<style>

</style>