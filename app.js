/* app.js */
const express = require("express");
const app = express();
const path = require("path"); // Importa el módulo 'path' para manejar rutas de archivos

// Configura la ubicación de las vistas
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

// Configura EJS como motor de plantillas
app.set("view engine", "ejs");

app.get("/dynamic", (req, res) => {
  const title = "Título dinámico";
  res.render("index", { title });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
