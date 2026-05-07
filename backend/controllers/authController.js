const Usuario = require('../models/Usuario');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario por email
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        // Verificar contraseña (texto plano por ahora)
        if (usuario.password !== password) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        res.status(200).json({
            mensaje: 'Login exitoso',
            usuario: {
                id:     usuario._id,
                nombre: usuario.nombre,
                email:  usuario.email,
                rol:    usuario.rol
            }
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error });
    }
};

module.exports = { login };