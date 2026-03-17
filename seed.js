const { sequelize, Usuario, Tablero, Lista, Tarjeta } = require("./models");

async function seed() {
  try {
    await sequelize.sync({ force: true });
    console.log("🧹 DB reiniciada");

    // Usuarios
    const user1 = await Usuario.create({
      nombre: "Diego",
      email: "diego@mail.com",
    });

    const user2 = await Usuario.create({
      nombre: "Ana",
      email: "ana@mail.com",
    });

    // Tableros
    const tablero1 = await Tablero.create({
      titulo: "Proyecto Stream",
      UsuarioId: user1.id,
    });

    const tablero2 = await Tablero.create({
      titulo: "Vida Personal",
      UsuarioId: user1.id,
    });

    const tablero3 = await Tablero.create({
      titulo: "Trabajo",
      UsuarioId: user2.id,
    });

    // Listas
    const lista1 = await Lista.create({
      titulo: "Pendiente",
      TableroId: tablero1.id,
    });

    const lista2 = await Lista.create({
      titulo: "En progreso",
      TableroId: tablero1.id,
    });

    // Tarjetas
    await Tarjeta.create({
      titulo: "Configurar OBS",
      descripcion: "Ajustar escenas",
      ListaId: lista1.id,
    });

    await Tarjeta.create({
      titulo: "Comprar micrófono",
      ListaId: lista2.id,
    });

    console.log("🌱 Datos insertados correctamente");
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

seed();