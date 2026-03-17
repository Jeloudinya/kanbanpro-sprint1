const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Tarjeta = sequelize.define("Tarjeta", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  });

  return Tarjeta;
};