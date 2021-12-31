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
     <v-btn flat>Finalizar Dia</v-btn>
       <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>Salvar Dados</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Carregar Dados</v-list-tile-title>
            </v-list-tile>
          </v-list>
       </v-menu>
       <v-spacer></v-spacer>
       <v-layout align-center>
         <small class="text-uppercase grey--text text--darken-2">
           Saldo: {{funds}}
          </small>
       </v-layout>
   </v-toolbar-items>
 </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      funds: 'funds'
    })
  }
}
</script>

<style>

</style>