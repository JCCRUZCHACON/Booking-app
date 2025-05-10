# Proyecto de Backend de Hoteles

## Descripción

Este es un API para la gestión de reservas en un hotel. Incluye autenticación mediante **JWT** y se conecta a una base de datos **PostgreSQL**. Permite a los usuarios iniciar sesión, listar y agregar hoteles a través de endpoints seguros.

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>

Instala las dependencias:
npm install

Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto con las siguientes variables:

DATABASE_URL=tu_url_de_base_de_datos
TOKEN_SECRET=tu_clave_secreta_jwt
TOKEN_EXPIRES_IN=1d  # Tiempo de expiración del token (opcional)

Inicia el servidor:

Para desarrollo local:

npm run dev

Rutas principales
POST /login: Autenticación de usuarios. Devuelve un token JWT para acceder a las rutas protegidas.

GET /hotels: Obtiene la lista de hoteles disponibles.

POST /hotels: Crea un nuevo hotel (requiere autenticación).

Tecnologías utilizadas
Node.js

Express

JWT (JSON Web Token) para autenticación

Sequelize para la gestión de la base de datos con PostgreSQL

Cómo probar la API
Autenticarse: Realiza una solicitud POST a /login con tus credenciales para obtener un token JWT.

Acceder a rutas protegidas: Usa el token obtenido en el paso anterior para acceder a las rutas protegidas (/hotels y POST /hotels).

¡Gracias por revisar el proyecto! Si tienes alguna duda, no dudes en contactarme.