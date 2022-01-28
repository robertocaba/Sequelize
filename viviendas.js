const express = require('express');
const router = express.Router();
const ViviendaController = require('../controllers/ViviendaController');


router.post('/',ViviendaController.create)
router.get ('/',ViviendaController.getAll)
router.delete('/:id',ViviendaController.delete)
router.put('/:id',ViviendaController.update)

module.exports = router;