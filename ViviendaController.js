const {Vivienda, User, Rcitas, sequelize} = require('../models/index');
const {Op} = sequelize;

const ViviendaController = {
  create(req, res) {
      Vivienda.create({...req.body})
          .then(vivienda => res.status(201).send({ message: 'Vivienda creada con éxito', vivienda }))
          .catch(console.error)
  },
  update(req, res) {
     

  },
  getAll(req,res){
      Post.findAll({
          include: [User]
      })
      .then(viviendas => res.send(viviendas))
      .catch(err => {
          console.log(err)
          res.status(500).send({ message: 'Ha habido un problema al cargar las viviendas' })
      })

  },
  getById(req, res) {
      Vivienda.findByPk(req.params.id, {
              include: [User]
          })
          .then(Vivienda => res.send(Vivienda))
          .catch(err => {
              console.error(err)
              res.status(500).send({ message :'No se ha podido cargar la vivienda'})
          })
  },
  getOneByName(req, res) {
      Vivienda.findOne({
              where: {
                  nonmbre: {
                      [Op.like]: `%${req.params.nombre}%`
                  }
              },
              include: [User]
          })
          .then(pepito => res.send(pepito))
          .catch(err => {
              console.error(err)
              res.status(500).send({ message :'No se ha podido cargar la vivienda'})
          })
  },
  async delete(req, res) {
      try {
          await Vivienda.destroy({
              where: {
                  id: req.params.id
              }
          })
          res.send(
              'La vivienda ha sido eliminada con éxito'
          )
      } catch (error) {
          console.error(error)
          res.status(500).send({ message :'No se ha podido destruir la vivienda'})
      }
      
  },


}



module.exports = ViviendaController;