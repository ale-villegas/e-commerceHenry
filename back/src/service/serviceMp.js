const {Router} = require('express');
const mercadopago = require("mercadopago")




mercadopago.configure({
    access_token: "TEST-5188296782000663-120614-b45c58e1d324dc9c96d997892a550742-1578819893"
})

const serviceMp = async  (req, res) => {
 
    const carrito = req.body

   const nuevoparray = carrito.map( item => {
    return {
                title: item.nombre,
                unit_price: Number(item.precio * item.quantity),
                currency_id: "ARS",
                quantity: 1
    }
   })

    try {


       
        const preference = {
            items: nuevoparray,
            back_urls: {
                "success": "https://sitio-de-guitarras.netlify.app/#/product-list",
                "failure": "https://sitio-de-guitarras.netlify.app/#/product-list",
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
    
} 



module.exports = serviceMp