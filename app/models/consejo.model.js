

module.exports = mongoose => {
    const Consejo = mongoose.model(
      "consejos",
      mongoose.Schema(
        {
          usuario: {
            type: mongoose.Schema.ObjectId,
            ref: 'usuarios'
        },
        categoria: String,
          consejo: String
        },
        { timestamps: true }
      )
    );
    return Consejo;
  };