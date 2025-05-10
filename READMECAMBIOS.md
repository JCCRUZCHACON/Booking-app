Solo descomentar esta parte cuando sea necesario ejecutar migraciones en server 
    await new Promise((resolve, reject) => {
       const migrate = exec(
        'sequelize db:migrate',
         { env: process.env },
         err => (err ? reject(err) : resolve())
       );

       migrate.stdout.pipe(process.stdout);
       migrate.stderr.pipe(process.stderr);
     });


Y en package.json :

"scripts": {
    "dev": "nodemon src/server",  // Para desarrollo en local, ejecuta el servidor con nodemon
    "start": "node src/server",   // Para producción, ejecuta el servidor normalmente
    "reset:migrate": "npx sequelize db:migrate:undo:all && npx sequelize db:migrate",  // Para reiniciar y ejecutar migraciones
    "test": "jest --detectOpenHandles",  // Si tienes pruebas, las ejecutas aquí
    "pretest": "npm run reset:migrate"  // Ejecutar migraciones antes de las pruebas, si fuera necesario
  }