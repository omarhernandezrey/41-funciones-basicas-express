/* index.js */
import express from "express";
import path from "path";

const app = express();

// Configura la ubicación de las vistas
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.set("views", path.join(__dirname, "views"));

// Ruta para la página de inicio
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Ruta para la página 'about'
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Ruta para la página 'contact'
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// Configuración de EJS como motor de plantillas
app.set("view engine", "ejs");

// Ruta para renderizar la vista 'index.ejs'
app.get("/dynamic", (req, res) => {
  const title = "Título dinámico";
  res.render("index", { title });
});

// Inicialización del servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Express server initialized");
});
