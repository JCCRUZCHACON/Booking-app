const app = require('./app');

// Para ejecutar migraciones automáticamente en producción:
//const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    // Escucha en todas las interfaces si estamos en producción
    app.listen(PORT, '::', () => {
      console.log(`👉 Server running on port ${PORT}`);
      console.log(`👉 Link http://localhost:${PORT}`);
    });

    // Solo ejecuta las migraciones en desarrollo (no en producción)
    // if (process.env.NODE_ENV === 'development') {
    //   console.log('🛠️ En modo desarrollo, ejecutando migraciones...');
    //   await new Promise((resolve, reject) => {
    //     const migrate = exec(
    //       'sequelize db:migrate', 
    //       { env: process.env }, 
    //       err => (err ? reject(err) : resolve())
    //     );

    //     migrate.stdout.pipe(process.stdout); // Muestra salida estándar
    //     migrate.stderr.pipe(process.stderr); // Muestra errores
    //   });
    // }
  } catch (error) {
    console.log('🚨 Error al iniciar el servidor:', error);
  }
}

main();
