const express = require('express');
const app = express();
const authorsRoutes = require('./routes/authorsRoutes');
const postsRoutes = require('./routes/postsRoutes');

app.use(express.json());

app.use('/api/authors', authorsRoutes);
app.use('/api/posts', postsRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor activado', process.env.PORT || 3000);
});

module.exports = app;
