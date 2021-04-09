const pedidosCompra = require('../../../../data/purchase_orders.json')

module.exports = (app) => {

    app.get('/purchase_orders', (req, res) => {
        res.send(pedidosCompra)
    })
}