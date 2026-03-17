const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "kanbanpro",     // nombre DB
  "postgres",      // usuario
  "1234",          // contraseña (cámbiala)
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = sequelize;