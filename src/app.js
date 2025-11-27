const express = require('express');
const app = express();
const authorsRoutes = require('./routes/authorsRoutes');
const postsRoutes = require('./routes/postsRoutes');


app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/authors', authorsRoutes);
app.use('/posts', postsRoutes);

app.listen(3000, () => {
    console.log('Servidor activo');
});

