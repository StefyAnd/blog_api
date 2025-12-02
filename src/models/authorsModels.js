const db = require('../db');

const getAllAuthors = () => {
    return db.query('SELECT * FROM autores');
};

const createAuthor = (authorData) => {
 
    return db.query('INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)', 
        [authorData.nombre, authorData.email, authorData.imagen]
    );
};

module.exports = {
    getAllAuthors,
    createAuthor
};
