const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Configuración del motor de vistas
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos (CSS)
app.use(express.static(path.join(__dirname, "public")));

// --------------------
// RUTAS GET
// --------------------

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/dashboard", (req, res) => {
  const data = fs.readFileSync("data.json", "utf-8");
  const parsedData = JSON.parse(data);

  res.render("dashboard", parsedData);
});

// --------------------
// RUTA POST
// --------------------

app.post("/nueva-tarjeta", (req, res) => {
  const { title } = req.body;

  const data = fs.readFileSync("data.json", "utf-8");
  const parsedData = JSON.parse(data);

  parsedData.boards[0].lists[0].cards.push({ title });

  const newData = JSON.stringify(parsedData, null, 2);
  fs.writeFileSync("data.json", newData);

  res.redirect("/dashboard");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});