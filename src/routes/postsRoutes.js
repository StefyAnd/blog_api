const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Consulta de posts' });
});

router.post('/', (req, res) => {
    res.json({ msg: 'Creación de un post' });
});
router.route('/:id')
    .get((req, res) => {
        res.json({ msg: 'Consulta de un post por ID' });
    })
    .put((req, res) => {
        res.json({ msg: 'Actualización de un post por ID' });
    })
    .delete((req, res) => {
        res.json({ msg: 'Eliminación de un post por ID' });
    });







    module.exports = router;   