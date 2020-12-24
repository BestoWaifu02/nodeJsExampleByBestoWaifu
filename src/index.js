const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

//Settings express

app.set("port", process.env.PORT || 3000);

//Definiendo la ruta de views (solo la carpeta)
app.set("views", path.join(__dirname, "views"));

app.engine("html", require("ejs").renderFile);

//Definiendo el motor de plantillas (en este caso es EJS el cual no se debe requerir porque express ya ubica este motor de plantilla)
app.set("view engine", "ejs");

//middlewares

//rutas
app.use(require("./routes/index"));

//static files
//cualquier archivo en esta carpeta sera accedico al navegador
app.use(express.static(path.join(__dirname, "public")));

//listening
app.listen(app.get("port"), () => {
  console.log("server running on port: ", app.get("port"));
});
