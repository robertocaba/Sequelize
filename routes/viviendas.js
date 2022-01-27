const express = require('express');
const ViviendaController = require('../controllers/ViviendaController');
const router = express.Router();

router.post('/',ViviendaController.insert)
router.post('/many',ViviendaController.insertMany)
router.delete('/:id',ViviendaController.delete)
router.put('/:id',ViviendaController.update)

module.exports = router;