const express = require("express")
const cors = require("cors")

const Mercado_Pago = require("../mercadopago/routes")


const server_mp = express()


server_mp.use(express.json())
server_mp.use(cors())
server_mp.use("/Mercado_Pago", Mercado_Pago)



module.exports = server_mp