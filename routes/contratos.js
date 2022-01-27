const express = require('express');
const GenreController = require('../controllers/ContratoController');
const router = express.Router();

router.viviendas('/',ViviendaController.create)

module.exports = router;