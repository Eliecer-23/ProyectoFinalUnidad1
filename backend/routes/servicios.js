const express = require('express');
const router = express.Router();
const {
    getServicios,
    getServicioById,
    crearServicio,
    actualizarServicio,
    eliminarServicio
} = require('../controllers/serviciosController');

router.get('/',        getServicios);
router.get('/:id',     getServicioById);
router.post('/',       crearServicio);
router.put('/:id',     actualizarServicio);
router.delete('/:id',  eliminarServicio);

module.exports = router;