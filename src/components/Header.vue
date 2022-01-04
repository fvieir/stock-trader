<template>
 <v-toolbar app>
   <v-toolbar-title class="headline text-uppercase mr-5">
     <span>Stock</span>
     <span class="font-weight-light">Trader</span>
   </v-toolbar-title>
   <v-toolbar-items>
     <v-btn flat to="/">Inicio</v-btn>
     <v-btn flat to="/portifolio">Portifolio</v-btn>
     <v-btn flat to="/stocks">Açoes</v-btn>
   </v-toolbar-items>
   <v-spacer></v-spacer>
   <v-toolbar-items>
     <v-btn flat @click="endDay">Finalizar Dia</v-btn>
       <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title @click="saveData" style="cursor: pointer;">Salvar Dados</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title @click="loadData" style="cursor: pointer;">Carregar Dados</v-list-tile-title>
            </v-list-tile>
          </v-list>
       </v-menu>
       <v-spacer></v-spacer>
       <v-layout align-center>
         <small class="text-uppercase grey--text text--darken-2">
           Saldo: {{funds | money}}
          </small>
       </v-layout>
   </v-toolbar-items>
 </v-toolbar>
</template>

<script>
import { mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      funds: 'funds'
    })
  }, 
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay () {
      this.randomizeStocks()
    },
    saveData () {
      const { funds, stockPortifolio, getStocks} = this.$store.getters
      this.$http.put('data.json', { funds, stockPortifolio, getStocks })
    },
    loadData () {
      this.$http.get('data.json').then((result) => {
        this.$store.state.funds = result.data.funds
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      });
    }
  }
}
</script>

<style>

</style>