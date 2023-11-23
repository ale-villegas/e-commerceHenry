const {Router} = require('express');
const { getGuitarras, getGuitarrasById } = require('../service/productoService');

const router = Router();

router.get('/guitarras', getGuitarras)
router.get('/guitarras/:id', getGuitarrasById) 

module.exports = router

//ToDo: reemplazar las funciones flechas por los servicios correspondientes