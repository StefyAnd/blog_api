const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController');


router.get('/', authorsController.consultarAutores);

router.post('/', authorsController.ingresarAutor);

router.route('/:id')
    .get(authorsController.consultarDetalleAutor)

    .put(authorsController.actualizarAutor)

    .delete(authorsController.eliminarAutor);


    module.exports = router;   