# Proyecto Final - Colegio Gandhy

## Requisitos de Ejecución

### Frontend
1. Abrir la carpeta `frontend/html/`
2. Abrir `index.html` con Live Server en VS Code

### Backend
1. Tener instalado Node.js y MongoDB
2. Entrar a la carpeta backend:
cd backend

3. Instalar dependencias:
npm install

4. Iniciar el servidor:
node server.js


5. El servidor corre en: `http://localhost:3000`

---

## Diccionario de Endpoints

### Auth
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | /auth/login | Iniciar sesión |

### Usuarios
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /usuarios | Obtener todos |
| GET | /usuarios/:id | Obtener uno |
| POST | /usuarios | Crear usuario |
| PUT | /usuarios/:id | Actualizar usuario |
| DELETE | /usuarios/:id | Eliminar usuario |

### Servicios
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /servicios | Obtener todos |
| GET | /servicios/:id | Obtener uno |
| POST | /servicios | Crear servicio |
| PUT | /servicios/:id | Actualizar servicio |
| DELETE | /servicios/:id | Eliminar servicio |

---

## Ejemplos JSON

### Crear usuario
```json
{
    "nombre": "Jorge Perez",
    "email": "admin@gandhy.edu.co",
    "password": "1234",
    "rol": "administrador"
}
```

### Login
```json
{
    "email": "admin@gandhy.edu.co",
    "password": "1234"
}
```

### Crear servicio
```json
{
    "nombre": "Biblioteca escolar",
    "descripcion": "Servicio de préstamo de libros",
    "disponible": true
}
```

---

## Explicación del DOM

El frontend utiliza un único archivo `index.html` con cuatro vistas:
- **Login**: pantalla inicial con validación de credenciales
- **Inicio**: carrusel institucional, misión y visión
- **Página**: historia, tabla de niveles y formulario de contacto
- **Dashboard**: panel con estadísticas del colegio

La navegación entre vistas se gestiona mediante la función `mostrarVista()` en `app.js`, que oculta todas las secciones con la clase `d-none` de Bootstrap y muestra únicamente la vista solicitada. No se recarga la página en ningún momento.

---

## Desarrollado por
**Jorge Perez** - Proyecto Web 2026