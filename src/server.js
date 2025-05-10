const app = require('./app');
// const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    // Cambié la configuración de listen para escuchar en todas las interfaces
    app.listen(PORT, '::', () => {
      console.log(`👉 Server running on port ${PORT}`);
      console.log(`👉 Link http://localhost:${PORT}`);
    });
    
    // Solo descomentar esta parte cuando sea necesario ejecutar migraciones
    // await new Promise((resolve, reject) => {
    //   const migrate = exec(
    //     'sequelize db:migrate',
    //     { env: process.env },
    //     err => (err ? reject(err) : resolve())
    //   );

    //   // Forward stdout+stderr to this process
    //   migrate.stdout.pipe(process.stdout);
    //   migrate.stderr.pipe(process.stderr);
    // });

  } catch (error) {
    console.log(error);
  }
}

main();
