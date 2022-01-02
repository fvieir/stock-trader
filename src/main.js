import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import router from './router'
import store from './store/store'
import filters from './filters'

Vue.config.productionTip = false

new Vue({
	filters,
	store,
	router,
	render: h => h(App),
}).$mount('#app')
