const Servicio = require('../models/Servicio');

const getServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.status(200).json(servicios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener servicios', error });
    }
};

const getServicioById = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        if (!servicio) return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        res.status(200).json(servicio);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener servicio', error });
    }
};

const crearServicio = async (req, res) => {
    try {
        const nuevoServicio = new Servicio(req.body);
        await nuevoServicio.save();
        res.status(201).json({ mensaje: 'Servicio creado', servicio: nuevoServicio });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear servicio', error });
    }
};

const actualizarServicio = async (req, res) => {
    try {
        const actualizado = await Servicio.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );
        if (!actualizado) return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        res.status(200).json({ mensaje: 'Servicio actualizado', servicio: actualizado });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar servicio', error });
    }
};

const eliminarServicio = async (req, res) => {
    try {
        const eliminado = await Servicio.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        res.status(200).json({ mensaje: 'Servicio eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar servicio', error });
    }
};

module.exports = { getServicios, getServicioById, crearServicio, actualizarServicio, eliminarServicio };