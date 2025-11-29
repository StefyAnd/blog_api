const express = require('express');
const router = express.Router();
const controller = require('../controllers/authorsController');


router.post('/', controller.createAuthor);

router.get('/', controller.getAllAuthors);

router.get('/:id', controller.getAuthorById);

router.get('/:id/posts', controller.getPostsByAuthor);

module.exports = router; 