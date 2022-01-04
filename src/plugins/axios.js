import Vue from "vue"
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create ({
            baseURL: 'https://stock-trader-66fd3-default-rtdb.firebaseio.com/'
        })
    }
})


