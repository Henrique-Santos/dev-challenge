const pedidosVenda = require('../../../../data/sales_orders.json')

module.exports = (app) => {

    app.get('/sales_orders', (req, res) => {
        res.send(pedidosVenda)
    })
}