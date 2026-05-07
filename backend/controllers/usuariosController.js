const Usuario = require('../models/Usuario');

// Obtener todos los usuarios
const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener usuarios', error });
    }
};

// Obtener un usuario por ID
const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener usuario', error });
    }
};

// Crear usuario
const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario creado', usuario: nuevoUsuario });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear usuario', error });
    }
};

// Actualizar usuario
const actualizarUsuario = async (req, res) => {
    try {
        const actualizado = await Usuario.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );
        if (!actualizado) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        res.status(200).json({ mensaje: 'Usuario actualizado', usuario: actualizado });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar usuario', error });
    }
};

// Eliminar usuario
const eliminarUsuario = async (req, res) => {
    try {
        const eliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        res.status(200).json({ mensaje: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar usuario', error });
    }
};

module.exports = { getUsuarios, getUsuarioById, crearUsuario, actualizarUsuario, eliminarUsuario };