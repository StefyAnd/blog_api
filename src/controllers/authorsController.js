const pool = require('../db');

exports.createAuthor = async (req, res) => {
  const { nombre, email, imagen } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)',
      [nombre, email, imagen]
    );
    const [rows] = await pool.query('SELECT * FROM autores WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creando autor' });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM autores');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener autores' });
  }
};

exports.getAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM autores WHERE id = ?', [id]);
    if (!rows.length) return res.status(404).json({ error: 'Autor no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener autor' });
  }
};

exports.getPostsByAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const [posts] = await pool.query(
      `SELECT p.*, a.id as autor_id, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen
       FROM posts p
       LEFT JOIN autores a ON p.autor_id = a.id
       WHERE p.autor_id = ?`,
      [id]
    );
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener posts del autor' });
  }
};




