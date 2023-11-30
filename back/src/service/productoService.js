const guitarras = require('./../utils/data');
const { Sequelize } = require('sequelize');
const {Categorias, Productos, User} = require('../DB_connection');

const axios = require('axios');


const getGuitarras = async (req, res) => {
    try {
        const data = await Productos.findAll({
            include: [{
                model: Categorias,
                as: 'Categoria',
                attributes: ['nombre']
            }],
            attributes: {
                exclude: ['CategoriasId']
            }
        });
        res.json({guitarras:data})
    } catch (error) {
        res.json({error: error, msg: 'No se encontraron guitarras'})
    }
    return guitarras
}


const getGuitarrasById = async (req, res) => {
    try {
        const data = await Productos.findByPk(req.params.id);
        res.json({guitarra:data})
    } catch (error) {
        res.json({error: error, msg: `No se encontró la guitarra con id ${req.params.id}`})
    }
    return guitarras
}

const getGuitarrasByFilter = async (req, res) => {
    try {
        console.log(req)
        const data = await Productos.findAll({
            where: {
              CategoriasId: {
                [Sequelize.Op.in]: req.params.categoria.split(',').map(Number)
              }
            }
          });
        res.json({guitarras:data})
    } catch (error) {
        
        res.json({error: error, msg: 'No se encontraron guitarras'})
    }
    return guitarras
}

module.exports = {getGuitarras, getGuitarrasById, getGuitarrasByFilter};