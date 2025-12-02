const authorsModel = require('../models/authorsModels');
const postsModel = require('../models/postsModels');
 

const getAllAuthors = async (req, res) => {
    try {
        const [rows] = await authorsModel.getAllAuthors();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo autores' });
    }
};

const createAuthor = async (req, res) => {
    try {
        const [result] = await authorsModel.createAuthor(req.body);
        res.json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).json({ error: 'Error creando autor' });
    }
};

const getPostsByAuthor = async (req, res) => {
    try {
        const [rows] = await postsModel.getPostsByAuthorId(req.params.id);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo posts del autor' });
    }
};

module.exports = {
    getAllAuthors,
    createAuthor,
    getPostsByAuthor
};
