// Importaciones
const express = require('express');
const morgan= require('morgan')
const router = require('./routes/routes')
const cors = require('cors')



// Instancia de Express
const server = express();

// Configuraciones
server.use(cors())
server.use(express.json())
server.use(morgan('dev'))
server.use(router)




module.exports = server;