const {User, Rcitas} = require('../models/index');
const vivienda = require('../models/vivienda');
const ViviendaController = {
    insert(req,res){
        Vivienda.create({...req.body})
        .then(vivienda=>{
           vivienda.addVivienda(req.body.ViviendaId)
           res.send(vivienda)
        })  
        .catch(err => console.error(err))
        
    },
    async insertMany(req,res){
        try {
          const  =req.body;
          const viviendaResponse =[]
          vivienda.forEach(async vivienda=>{
            const bookCreated = await Book.create({...book});
            bookCreated.addGenre(book.GenreId);
            booksResponse.push(bookCreated)
          });
          res.send('vivienda created')
        }
        catch (error) {
            console.log(error)
        }
    } ,
    async delete(req, res) {
        try {
            await Vivienda.destroy({
                where: {
                    id: req.params.id
                }
            })
            await Rcitas.destroy({
                where: {
                    ViviendaId: req.params.id
                }
            })
            res.send({ message: 'The house has been removed'})
        }
         catch (error) {
            console.log(error)
        }
    },
    async update(req, res) {
      try {
        await User.update(
          { ...req.body },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        const vivienda = await Vivienda.findByPk(req.params.id)
        book.setGenres(req.body.ViviendaId);
        res.send("vivienda actualizada con éxito");
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .send({ message: "no ha sido posible actualizado la vivienda" });
      }
    },
}

module.exports = ViviendaController;