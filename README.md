# Mi Servidor

Este proyecto es una aplicación completa que incluye un backend con Node.js y Express, y un frontend con React y Vite. La aplicación permite a los usuarios registrarse, iniciar sesión y gestionar publicaciones. Creado por Kaleb Cortés Mejía

## Backend

El backend está construido con Node.js y Express, y utiliza MongoDB como base de datos. Incluye las siguientes funcionalidades:

- **Autenticación**: Registro e inicio de sesión de usuarios utilizando JWT.
- **Gestión de usuarios**: CRUD de usuarios.
- **Gestión de publicaciones**: CRUD de publicaciones.
- **Middleware**: Logger, manejo de errores y autenticación.
- **Variables de entorno**: Configuración de variables de entorno con dotenv.

### Estructura del backend

- `models/`: Modelos de Mongoose para la base de datos.
- `routes/`: Rutas de la API.
- `middlewares/`: Middlewares personalizados.
- `server.js`: Archivo principal del servidor.

### Instalación y ejecución del backend

1. Clona el repositorio.
2. Navega a la carpeta del backend.
3. Instala las dependencias:

```sh
    npm install
```
4. Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
MONGO_URI=tu_mongo_uri
JWT_SECRET=tu_jwt_secret
```
5. Inicia el servidor:

```bash
npm start
```

### FrontEnd

El frontend está construido con React y Vite. Incluye las siguientes funcionalidades:

- Autenticación: Formularios de registro e inicio de sesión.
- Gestión de usuarios: Visualización y edición de perfiles de usuario.
- Gestión de publicaciones: Visualización, creación, edición y eliminación de publicaciones.

#### Estructura del frontend

- ``src/components/``: Componentes reutilizables de React.
- ``src/pages/``: Páginas de la aplicación.
- ``src/App.jsx``: Componente principal de la aplicación.
- ``src/main.jsx``: Punto de entrada de la aplicación.


#### Instalación y ejecución del frontend

1. Navega a la carpeta del frontend.

2. Instala las dependencias:
```sh
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

### Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (``git checkout -b feature/nueva-funcionalidad``).
3. Realiza tus cambios y haz commit (``git commit -am 'Añadir nueva funcionalidad'``).
4. Sube tus cambios a tu fork (``git push origin feature/nueva-funcionalidad``).
5. Abre un Pull Request.


### Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo ``LICENSE`` para más detalles.