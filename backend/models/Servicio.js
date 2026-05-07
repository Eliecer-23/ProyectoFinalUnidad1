const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
    nombre:      { type: String, required: true },
    descripcion: { type: String, required: true },
    disponible:  { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Servicio', servicioSchema);