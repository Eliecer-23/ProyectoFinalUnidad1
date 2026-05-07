const express    = require('express');
const mongoose   = require('mongoose');
const dotenv     = require('dotenv');
const cors       = require('cors');

// Rutas
const authRoutes      = require('./routes/auth');
const usuariosRoutes  = require('./routes/usuarios');
const serviciosRoutes = require('./routes/servicios');

// Configuración
dotenv.config();
const app  = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error de conexión:', err));

// Rutas principales
app.use('/auth',      authRoutes);
app.use('/usuarios',  usuariosRoutes);
app.use('/servicios', serviciosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'API Colegio Gandhy funcionando' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});