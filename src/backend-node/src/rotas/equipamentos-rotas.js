const equipamentos = require('../../../../data/equipments.json')

module.exports = (app) => {

    app.get('/equipments', (req, res) => {
        res.send(equipamentos)
    })
}