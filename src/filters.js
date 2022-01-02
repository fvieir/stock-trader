import Vue from "vue"
Vue.filter('money', value => {
    return value.toLocaleString('pt-br',{style:'currency', currency: 'BRL'})
})    