const sequelize = require("../config/database");

const UsuarioModel = require("./usuario");
const TableroModel = require("./tablero");
const ListaModel = require("./lista");
const TarjetaModel = require("./tarjeta");

// Inicializar modelos
const Usuario = UsuarioModel(sequelize);
const Tablero = TableroModel(sequelize);
const Lista = ListaModel(sequelize);
const Tarjeta = TarjetaModel(sequelize);

// Relaciones

// Usuario → Tablero
Usuario.hasMany(Tablero);
Tablero.belongsTo(Usuario);

// Tablero → Lista
Tablero.hasMany(Lista);
Lista.belongsTo(Tablero);

// Lista → Tarjeta
Lista.hasMany(Tarjeta);
Tarjeta.belongsTo(Lista);

module.exports = {
  sequelize,
  Usuario,
  Tablero,
  Lista,
  Tarjeta,
};