const express = require('express');
const app = express();
const authorsRoutes = require('./routes/authorsRoutes');
const postsRoutes = require('./routes/postsRoutes');


app.use(express.json());

app.use('/api/authors', authorsRoutes);
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
