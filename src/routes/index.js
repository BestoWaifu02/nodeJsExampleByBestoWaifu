const express = require("express");
//Router a comparacion de app nos permite tener mas rutas
const router = express.Router();

//routes
router.get("/", (req, res) => {
  //Como usamos el motor de plantillas ejs ahora no se debe mandar un archivo html sino se debe renderizar un archivo ejs que termina siendo un html

  //res.sendFile(path.join(__dirname, "views/index.html"));

  //Usando render
  res.render("index.html", { title: "first website" });

  /* SIN USAR EL MODULO PATH no se puede enviar el archivo por los simgolos de diagonal inversa que no son para directorios
     console.log(__dirname+'/views/index.html'); */

  //Usando path (identifica el sistema operativo)
  //console.log(path.join(__dirname, "views/index.html"));
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "contact page" });
});

module.exports = router;
