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
    
}


const getGuitarrasById = async (req, res) => {

    console.log("getGuitarrasById")
    try {
        const data = await Productos.findByPk(req.params.id);
        res.json({guitarra:data})
    } catch (error) {
        res.json({error: error, msg: `No se encontró la guitarra con id ${req.params.id}`})

    }
    
}

const getGuitarrasByFilter = async (req, res) => {
    try {
        // Obtén el arreglo de categorías desde los parámetros de la solicitud
        const categorias = req.query.categorias ? JSON.parse(req.query.categorias) : [];

        const data = await Productos.findAll({
            where: {
                CategoriasId: {
                    [Sequelize.Op.in]: categorias,
                },
            },
            include: [{
                model: Categorias,
                as: 'Categoria',
                attributes: ['nombre']
            }],
            attributes: {
                exclude: ['CategoriasId']
            }
        });

        res.json({ guitarras: data });
    } catch (error) {
        // console.log(error);
        res.status(500).json({ error: 'Error al obtener las guitarras por filtro' });
    }
};

module.exports = {getGuitarras, getGuitarrasById, getGuitarrasByFilter};