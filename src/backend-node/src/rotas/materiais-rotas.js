const materiais = require('../../../../data/materials.json')

module.exports = (app) => {

    app.get('/materials', (req, res) => {
        res.send(materiais)
    })
}