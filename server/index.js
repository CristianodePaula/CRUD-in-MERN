const express = require('express')
const mongoose = require('mongoose') 
const dotenv = require('dotenv')
const routes = require('./route/routes') 

const app = express()

    dotenv.config()
    app.use(express.json())
    
    mongoose.connect(process.env.DATABASE, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err))

    app.use('/', routes) 

    app.listen(process.env.PORT, () => {
        console.log("Servidor rodando na porta especificada")
    })