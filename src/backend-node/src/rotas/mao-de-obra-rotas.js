const maoDeObra = require('../../../../data/workforce.json')

module.exports = (app) => {

    app.get('/workforce', (req, res) => {
        res.send(maoDeObra)
    })
}