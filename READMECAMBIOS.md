EN DESARROLLO DESCOMENTAR ESTA PARTE DEL SERVER PARA TRABAJAR CON MIGRACIONES : 
    await new Promise((resolve, reject) => {
       const migrate = exec(
        'sequelize db:migrate',
         { env: process.env },
         err => (err ? reject(err) : resolve())
       );

       migrate.stdout.pipe(process.stdout);
       migrate.stderr.pipe(process.stderr);
     });


EN DESARROLLO DEL PACKAGE.JSON HACER CAMBIOS  :

"scripts": {
    "dev": "nodemon src/server",  // Para desarrollo en local, ejecuta el servidor con nodemon
    "start": "node src/server",   // Para producción, ejecuta el servidor normalmente
    "reset:migrate": "npx sequelize db:migrate:undo:all && npx sequelize db:migrate",  // Para reiniciar y ejecutar migraciones
    "test": "jest --detectOpenHandles",  // Si tienes pruebas, las ejecutas aquí
    "pretest": "npm run reset:migrate"  // Ejecutar migraciones antes de las pruebas, si fuera necesario
  }



  EN PRODUCCION DEL PACKAGE.JSON HACER CAMBIOS  :

  "scripts": {
  "dev": "nodemon src/server",
  "start": "node src/server",
  "migrate": "npx sequelize db:migrate",  
  "test": "jest --detectOpenHandles",
  "pretest": "npm run migrate"  
},





  CAMBIOS PARA DESARROLLO EN CONFIG:

  require('pg')
require('pg-hstore')
require('dotenv').config();

module.exports = {
  "development": {
    use_env_variable: "DATABASE_URL",
  },
  "test": {
    use_env_variable: "DATABASE_URL",
  },
  "production": {
    use_env_variable: "DATABASE_URL",
  }
}





CAMBIOS PARA PRODUCCION DE CONFIG:

require('pg');
require('pg-hstore');
require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres"
  },
  test: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
