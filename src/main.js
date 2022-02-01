import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/store'
import './filters'

import './plugins/vuetify'
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')