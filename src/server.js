const app = require('./app');


const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    // Escucha en todas las interfaces si estamos en producción
    app.listen(PORT, '::', () => {
      console.log(`👉 Server running on port ${PORT}`);
      console.log(`👉 Link http://localhost:${PORT}`);
    });

  } catch (error) {
    console.log('🚨 Error al iniciar el servidor:', error);
  }
}

main();
