import stocks from '../../data/stocks'

export default {
    state:{
       stocks: []
    },
    mutations: {
        setStocks (state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks (state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            });
        }
    },
    actions: {
        buyStock ({ commit }, order) {
            commit('buyStock', order)
        },
        initStock ({ commit }) {
            commit('setStocks',stocks)
        },
        randomizeStocks ({commit}) {
            commit('randomizeStocks')
        }
    },
    getters: {
        getStocks (state) {
            return state.stocks
        }
    }
}