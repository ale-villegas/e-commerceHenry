const {Categorias, Productos, User} = require('../DB_connection');

const axios = require('axios');


const getCategorias = async (req, res) => {
    try {
        const data = await Categorias.findAll();
        
        res.json({Categorias:data})
    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {getCategorias};