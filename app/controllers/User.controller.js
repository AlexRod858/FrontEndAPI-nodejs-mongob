const db = require("../models");
const Usuario = db.usuarios;

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Create and Save a new usuario
exports.create = async (req, res) => {
    if (!req.body.nombre || !req.body.email || !req.body.date) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    const usuario = new Usuario({
        _id: new db.mongoose.Types.ObjectId(),
        Nombre: req.body.nombre,
        Email: req.body.email,
        Nacimiento: req.body.date,
        // author: user._id //populate
    });
    
    usuario
    .save(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuario."
      });
    });
};
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Retrieve all usuarios from the database.
exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    var condition = descripcion ? { descripcion: { $regex: new RegExp(descripcion), $options: "i" } } : {};
  
    Usuario.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving usuarios."
        });
      });
  };
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Find a single usuariowith an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Usuario.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Usuario with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Usuario with id=" + id });
      });
  };

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Update a usuarioby the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Usuario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Usuario with id=${id}. Maybe usuariowas not found!`
          });
        } else res.send({ message: "Usuario was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Usuario with id=" + id
        });
      });
  };

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Delete a usuariowith the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Usuario.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Usuario with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Usuario was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Usuario with id=" + id
        });
      });
  };