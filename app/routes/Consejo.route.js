
module.exports = app => {
    const consejos = require("../controllers/consejo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new consejo
    router.post("/", consejos.create);
  
    // Retrieve all consejos
    router.get("/", consejos.findAll);
  
  
  
    // Retrieve a single consejo with id
    router.get("/:id", consejos.findOne);

      // Retrieve all consejos with id
    router.get("/usuario/:id", consejos.findByUser);

    // Update a consejo with id
    router.put("/:id", consejos.update);
  
    // Delete a consejo with id
    router.delete("/:id", consejos.delete);
  
    // Delete all consejos
    // router.delete("/", consejos.deleteAll);
  
    app.use('/api/consejos', router);
  };