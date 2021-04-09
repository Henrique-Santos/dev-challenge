const equipamentos = require('./equipamentos-rotas')
const maoDeObra = require('./mao-de-obra-rotas')
const materiais = require('./materiais-rotas')
const pedidosCompra = require('./pedidos-compra-rotas')
const pedidosVenda = require('./pedidos-venda-rotas')

module.exports = (app) => {
    equipamentos(app)
    maoDeObra(app)
    materiais(app)
    pedidosCompra(app)
    pedidosVenda(app)
}