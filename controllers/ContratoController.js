const { Contrato } = require('../models/index')

const ContratoController = {
    create(req,res){
        Contrato.create({...req.body})
        .then(contrato => res.send(contrato))
        .catch(err => console.error(err))
    }
}

module.exports = ContratoController;