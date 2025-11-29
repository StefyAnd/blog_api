const pool = require('../db');

exports.createPost = async (req, res) => {
  const { titulo, descripcion, categoria, autor_id } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, categoria, autor_id]
    );
   
    const [rows] = await pool.query(
      `SELECT p.*, a.id as autor_id, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen
       FROM posts p
       LEFT JOIN autores a ON p.autor_id = a.id
       WHERE p.id = ?`,
      [result.insertId]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creando post' });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.*, a.id as autor_id, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen
       FROM posts p
       LEFT JOIN autores a ON p.autor_id = a.id
       ORDER BY p.fecha_creacion DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener posts' });
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT p.*, a.id as autor_id, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen
       FROM posts p
       LEFT JOIN autores a ON p.autor_id = a.id
       WHERE p.id = ?`,
      [id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Post no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener post' });
  }
};
