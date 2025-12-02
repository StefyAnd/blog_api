const db = require('../db');

const getAllPosts = () => {
    return db.query(`
        SELECT 
            posts.*, 
            autores.nombre AS autor_nombre,
            autores.email AS autor_email,
            autores.imagen AS autor_imagen
        FROM posts
        INNER JOIN autores 
        ON posts.autor_id = autores.id
    `);
};

const getPostById = (id) => {
    return db.query(`
        SELECT 
            posts.*, 
            autores.nombre AS autor_nombre,
            autores.email AS autor_email,
            autores.imagen AS autor_imagen
        FROM posts
        INNER JOIN autores 
        ON posts.autor_id = autores.id
        WHERE posts.id = ?
    `, [id]);
};

const createPost = (postData) => {
 
    return db.query('INSERT INTO posts (titulo, categoria, autor_id) VALUES (?, ?, ?)', 
        [postData.titulo, postData.categoria, postData.autor_id]
    );
};

const getPostsByAuthorId = (authorId) => {
    return db.query(`
        SELECT 
            posts.*, 
            autores.nombre AS autor_nombre,
            autores.email AS autor_email,
            autores.imagen AS autor_imagen
        FROM posts
        INNER JOIN autores 
        ON posts.autor_id = autores.id
        WHERE autores.id = ?
    `, [authorId]);
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    getPostsByAuthorId
};
