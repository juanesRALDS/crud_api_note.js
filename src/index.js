
// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 9000;
const userRoutes = require('./routes/users');

//middleware
app.use(express.json());
app.use("/api", userRoutes)


// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB establecida con éxito'))
.catch(err => console.error('Error al conectar con MongoDB:', err));

// Rutas
app.get('/', (req, res) => {
    res.send('welcome to my API');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
