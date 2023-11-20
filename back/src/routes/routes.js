const {Router} = require('express');

const router = Router();

router.get('/guitarras', (req,res) => {
    console.log("GetGuitarras")
    res.json({message:"Test de Get de Guitarras"})

})
router.get('/guitarras/:id', (req,res) => {
    console.log("GetGuitarras por Id")
    res.json({message:"Test de Get de Guitarras por id"})
} )

module.exports = router