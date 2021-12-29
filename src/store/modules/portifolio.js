export default {
    state: {
        funds: 10000,
        stocks: []
    }, 
    mutations: {
        buyStock (state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id === stockId)
            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity,
                })
            }
            state.funds -= stockPrice * quantity
        },   
        sellStock (state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id === stockId)
            if (record.quantity >= quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOF(record), 1)
            }
            state.funds += quantity * stockPrice
        }
    },
    actions: {
        sellStock ({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters:{
        stockPortifolio (state, getters) {
            return state.stocks.map(stock => {
                const record = getters.getStocks.find(element => element.id === stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds (state) {
            return state.funds
        }
    }
}
