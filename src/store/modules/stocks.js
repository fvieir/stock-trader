import stocks from '../../data/stocks'

export default {
    state:{
       stocks: []
    },
    mutations: {
        setStocks (state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock ({ commit }, order) {
            commit('buyStock', order)
        },
        initStock ({ commit }) {
            commit('setStocks',stocks)
        }
    },
    getters: {
        getStocks (state) {
            return state.stocks
        }
    }
}