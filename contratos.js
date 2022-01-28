const express = require('express');
const router = express.Router();
const ContratoController = require('../controllers/ContratoController');


router.post('/',ViviendaController.create)

module.exports = router;