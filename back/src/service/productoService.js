const guitarras = require('./../utils/data');
const {Categorias, Productos, User} = require('../DB_connection');

const axios = require('axios');


const getGuitarras = async (req, res) => {
    try {
        const data = await Productos.findAll();
        
        
        res.json({guitarras:data})
    } catch (error) {
        console.log(error)
    }
    
}


const getGuitarrasById = async (req, res) => {

    const {id} = req.params
    try {
        const data = await Productos.findByPk(id);

        if(!data){
            res.status(404).json({
                error: 'Producto no encontrado',
              });
              return;
        }
    
        res.status(200).json(data)
        
       
    } catch (error) {
        res.status(500).json({
            error: "Error en el servidor"
        })
    }
    
}

const getGuitarrasByFilter = async (req, res) => {
    try {
        const data = await Productos.findAll( {where:{ CategoriasId: req.params.categoria }  });
        
        res.json({guitarras:data})
    } catch (error) {
        console.log(error)
    }
    return guitarras
}

module.exports = {getGuitarras, getGuitarrasById, getGuitarrasByFilter};