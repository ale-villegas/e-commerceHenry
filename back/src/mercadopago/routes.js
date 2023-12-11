const {Router} = require('express');
const mercadopago = require("mercadopago")

const Mercado_Pago = Router()


mercadopago.configure({
    access_token: "TEST-5188296782000663-120614-b45c58e1d324dc9c96d997892a550742-1578819893"
})



Mercado_Pago.post("/", async (req, res) => {

   const hola = req.body

   const nuevoparray = hola.map(e => {
    return {
                title: e.name,
                unit_price: e.price * e.quantity,
                currency_id: "ARS",
                quantity: 1
    }
   })

    try {


       
        const preference = {
            items: nuevoparray,
            back_urls: {
                "success": "https://glowing-marshmallow-629c31.netlify.app/compraexitosa",
                "failure": "https://glowing-marshmallow-629c31.netlify.app/",
                "pending": ""
            },
            auto_return: "approved",
        }

        const respuesta = await mercadopago.preferences.create(preference)
        console.log(respuesta)
        res.status(200).json(respuesta.response.init_point)
        
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
})


module.exports = Mercado_Pago

//http://localhost:5173/compraexitosa