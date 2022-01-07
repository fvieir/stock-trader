import Vue from "vue"

export default {
    loadData({ commit }) {
        Vue.prototype.$http.get('data.json')
            .then(response => {
                const data = response.data
                if (data) {
                    commit('setStocks', data.stocks)
                    commit('setPortifolio', {
                        funds: data.funds,
                        stockPortifolio: data.stockPortifolio
                    })
                }
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    }
}