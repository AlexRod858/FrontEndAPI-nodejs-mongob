

module.exports = mongoose => {
    const Usuario = mongoose.model(
      "usuarios",
      mongoose.Schema(
        {
          _id : mongoose.Schema.Types.ObjectId,
          Nombre: String,
          Email: String,
          Nacimiento: Date
        },
        { timestamps: true },
        {collection : 'usuarios'}
      )
    );
  
    return Usuario;
  };