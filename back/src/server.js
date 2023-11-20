// Importaciones
const express = require('express');
const morgan= require('morgan')
//const router = require('./routes/routes')



// Instancia de Express
const server = express();

// Configuraciones
server.use(express.json())
server.use(morgan('dev'))
//server.use(router)




module.exports = server;