const {Router} = require('express');
const { getGuitarras, getGuitarrasById, getGuitarrasByFilter } = require('../service/productoService');
const { getCategorias } = require('../service/CategoriaService');
const serviceMp = require('../service/serviceMp');
const router = Router();

router.get('/guitarras', getGuitarras)
router.get('/guitarras/filtros', getGuitarrasByFilter)
router.get('/guitarras/:id', getGuitarrasById)
router.get('/categorias', getCategorias)
router.post("/mercado-pago", serviceMp)





module.exports = router

//ToDo: reemplazar las funciones flechas por los servicios correspondientes