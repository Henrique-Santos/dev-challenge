const porta = 3002

const express = require('express')
const app = express()

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

const rotas = require('./rotas/rotas')
rotas(app)