const express = require('express')
const mongoose = require('mongoose') 
const dotenv = require('dotenv')
const routes = require('./route/routes') 

const app = express()

    dotenv.config();
    app.use(express.json());

    const PORT = '3001'
    
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));

    app.use('/', routes) 

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })