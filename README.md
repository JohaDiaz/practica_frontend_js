# Frontend Wallapop - Práctica Frontend js

Este proyecto consiste en el desarrollo de una aplicación web similar a Wallapop, diseñada como una práctica para aplicar conocimientos de desarrollo frontend y manejo de APIs REST. La aplicación permite listar, crear, editar y eliminar anuncios, así como autenticar y registrar usuarios.

## Funcionalidades Principales

### 1. Listado de Anuncios
- Muestra anuncios con su imagen, nombre, descripción, precio, y si es compra o venta.
- Gestión de estados de interfaz:
  - **Vacío:** Sin anuncios disponibles.
  - **Error:** Al cargar los anuncios.
  - **Cargando:** Mientras se recuperan los anuncios.
  - **Éxito:** Anuncios listos para mostrar.
- Al hacer clic en un anuncio, se accede a su detalle.
- Botón para crear anuncios si el usuario está autenticado.

### 2. Detalle de Anuncio
- Información detallada del anuncio: foto, nombre, descripción, precio y tipo.
- Gestión de estados de interfaz (vacío, error, cargando, éxito).
- Botón para eliminar el anuncio si pertenece al usuario autenticado.

### 3. Creación de Anuncio
- Formulario para añadir:
  - Foto (opcional), nombre, descripción, precio y tipo (compra/venta).
- Gestión de estados de interfaz (error, cargando, éxito).
- Redirección a la pantalla de listado si el usuario no está autenticado.

### 4. Login
- Formulario de autenticación (usuario y contraseña).
- Obtención de un token JWT para autenticar al usuario en las siguientes operaciones.
- Gestión de estados de interfaz (cargando, error, éxito).

### 5. Registro
- Formulario para registrar un nuevo usuario (usuario y contraseña).
- Gestión de estados de interfaz (cargando, error, éxito).

## Requisitos Técnicos
- **Frontend:** Sin frameworks ni librerías de JavaScript. Se permite el uso de herramientas de CSS como Tailwind o Bootstrap.
- **Backend:** Simulado con `sparrest.js`, basado en `json-server`.

## Requisitos Opcionales
- Paginación de anuncios en el listado.
- Buscador de anuncios.
- Edición de anuncios (propietario autenticado).
- Filtrado de anuncios por etiquetas (tags estáticos o dinámicos).

## Cómo Ejecutar el Proyecto
1. Configurar y ejecutar el backend (ver sección de configuración).
2. Abrir el archivo `index.html` en el navegador para ejecutar la aplicación.
3. Asegurarse de utilizar el token JWT en las operaciones protegidas.

## Tecnologías Utilizadas
- HTML, CSS, JavaScript puro.
- Tailwind CSS / Bootstrap (opcional).
- Sparrest.js (`json-server`).
