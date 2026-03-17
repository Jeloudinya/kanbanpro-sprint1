const { sequelize, Tablero, Lista, Tarjeta } = require("./models");

async function testCRUD() {
  try {
    await sequelize.authenticate();
    console.log("✅ DB conectada");

    // 🔹 CREATE
    const lista = await Lista.findOne();
    const nuevaTarjeta = await Tarjeta.create({
      titulo: "Nueva tarea",
      ListaId: lista.id,
    });
    console.log("🟢 Tarjeta creada:", nuevaTarjeta.titulo);

    // 🔹 READ (con include)
    const tablero = await Tablero.findOne({
      include: {
        model: Lista,
        include: Tarjeta,
      },
    });

    console.log("📖 Tablero con relaciones:");
    console.dir(tablero.toJSON(), { depth: null });

    // 🔹 UPDATE
    nuevaTarjeta.titulo = "Tarea actualizada";
    await nuevaTarjeta.save();
    console.log("🟡 Tarjeta actualizada");

    // 🔹 DELETE
    await nuevaTarjeta.destroy();
    console.log("🔴 Tarjeta eliminada");

  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

testCRUD();