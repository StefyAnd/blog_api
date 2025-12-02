const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController');

router.get('/', authorsController.getAllAuthors);
router.post('/', authorsController.createAuthor);


router.get('/:id/posts', authorsController.getPostsByAuthor);

module.exports = router;
