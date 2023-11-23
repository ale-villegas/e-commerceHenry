const guitarras = require('./../utils/data');
const {Categorias, Productos, User} = require('../DB_connection');

const axios = require('axios')

const getGuitarras = async (req, res) => {
    try {
        const data = await Productos.findAll();
        
        res.json({guitarras:data})
    } catch (error) {
        console.log(error)
    }
    return guitarras
}


const getGuitarrasById = async (req, res) => {
    try {
        const data = await Productos.findByPk(req.params.id);
        
        res.json({guitarra:data})
    } catch (error) {
        console.log(error)
    }
    return guitarras
}


module.exports = {getGuitarras, getGuitarrasById};