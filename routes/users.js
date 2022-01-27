const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); 

router.post('/',UserController.create)
router.get('/',UserController.getAll)
router.delete('/id/:id',UserController.delete)
router.put('/:id',UserController.update)
router.post('/login',UserController.login)
router.delete('/logout',UserController.logout)

module.exports = router;