<template>
 <v-flex class="pb-3 pr-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
        <v-card-title class="headline">
          <strong>
            {{stock.name}}
            <small>
              (Preço: {{ stock.price | money}} | Qtde: {{stock.quantity}})
            </small>
          </strong>
        </v-card-title>
    </v-card>
    <v-card class="">
      <v-container fill-height>
          <v-text-field 
              label="Quantidade"
              type="number"
              :error="insufficientQtde || !Number.isInteger(quantity)"
              v-model.number="quantity">
          </v-text-field>
          <v-btn class="blue darken-3 white--text"
              @click="sellStock()"
              :disabled="quantity <=0 || !Number.isInteger(quantity) || insufficientQtde ">
              {{ insufficientQtde ? 'Qtde Insuficiente' : 'Vender'}}
          </v-btn>
      </v-container>
    </v-card>
 </v-flex>
</template>

<script>
import { mapActions } from "vuex"
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQtde () {
      return this.stock.quantity < this.quantity
    }
  },
  methods: {
    ...mapActions({ sellStockActions: 'sellStock'}),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.sellStockActions(order)
      // this.$store.dispatch('sellStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style>

</style>