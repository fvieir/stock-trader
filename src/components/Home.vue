<template>
  <div>
    <h1 class="display-1 mb-4">Negocie e Consulte suas Ações</h1>
     <v-alert
      :value="true"
      icon="check_circle"
      color="success"
      class="pa-2 white--text elevation-2 "
    >
      <span class="headline">Você pode salvar & carregar os dados</span>
    </v-alert>
    <v-alert
      :value="true"
      icon="done"
      color="info"
      class="pa-2 mt-3 elevation-2"
    >
      <span class="headline">Clique em Finalizar Dia, para iniciar um novo dia! </span> 
    </v-alert>

    <p class="mt-4 headline"><strong>Saldo: </strong>{{ funds | money}}</p>

  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>