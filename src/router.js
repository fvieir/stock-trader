import Vue from 'vue'
import Router from 'vue-router'

// Importando componentes
import Home from './components/Home.vue'
import Portifolio from './components/portifolio/Portifolio.vue'
import Stocks from './components/stocks/Stocks.vue'

// Registrando Router
Vue.use(Router)

// Exportando instância
export default new Router({
   mode: 'history',
   routes: [
       {path: '/', component: Home},
       {path: '/portifolio', component: Portifolio},
       {path: '/stocks', component: Stocks}
   ]
})