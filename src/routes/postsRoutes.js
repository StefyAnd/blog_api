const express = require('express');
const router = express.Router();
const controller = require ('../controllers/postsController')

router.post('/', controller.createPost);
router.get('/', controller.getAllPosts);
router.get('/:id', controller.getPostById);

module.exports = router;
