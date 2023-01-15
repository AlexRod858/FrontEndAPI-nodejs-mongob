const db = require("../models");
const Consejo = db.consejos;

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Create and Save a new consejo
exports.create = async (req, res) => {
    if (!req.body.usuario || !req.body.consejo || !req.body.categoria) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    const consejo = new Consejo({
        usuario: req.body.usuario,
        categoria: req.body.categoria,
        consejo: req.body.consejo,
    });
    
    consejo
    .save(consejo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Retrieve all consejos from the database.
exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    var condition = descripcion ? { descripcion: { $regex: new RegExp(descripcion), $options: "i" } } : {};
  
    Consejo.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving consejos."
        });
      });
  };
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Find a single consejo with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Consejo.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
  };

///////////////////////////////////////////////////////////////////////////

  exports.findByUser = (req, res) => {
    const id = req.params.id;
  let condicion = Consejo.where({ usuario : id})
    Consejo.find(condicion)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Consejos with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
  };
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Update a consejo by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Consejo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Consejo with id=${id}. Maybe Consejo was not found!`
          });
        } else res.send({ message: "Consejo was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Consejo with id=" + id
        });
      });
  };

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Delete a consejo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Consejo.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Consejo with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Consejo was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Consejo with id=" + id
        });
      });
  };