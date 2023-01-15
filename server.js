const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// 
app.use(express.static(__dirname + '/public'));

//
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



// simple route

app.get('/', (req, res) => {
    res.sendFile( __dirname +"/public/form.html");
    // res.json({"message": "Hello Crud Node Express"});
});


// otra route

app.get('/usuarios', (req, res) => {
  res.sendFile( __dirname +"/public/usuarios.html");
});
//////////////////// ROUTES //////////////////////////
require("./app/routes/consejo.route")(app);
require("./app/routes/user.route")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
