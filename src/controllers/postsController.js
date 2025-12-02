const postsModel = require('../models/postsModels');


const getAllPosts = async (req, res) => {
    try {
        const [rows] = await postsModel.getAllPosts();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
};

const getPostById = async (req, res) => {
    try {
        const [rows] = await postsModel.getPostById(req.params.id);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el post' });
    }
};


const createPost = async (req, res) => {
    try {
        const [result] = await postsModel.createPost(req.body);
        res.json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el post' });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost
};
