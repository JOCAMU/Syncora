# API de Syncora

La API de Syncora está desarrollada con Node.js y Express siguiendo una arquitectura por capas.

Actualmente la API incluye endpoints básicos para gestionar proyectos.

---

# Endpoints disponibles

## GET /api/projects

Obtiene la lista de proyectos.

### Respuesta

```json
[
  {
    "id": 1,
    "name": "Syncora Web App",
    "status": "In Progress"
  }
]
```

---

## POST /api/projects

Crea un nuevo proyecto.

### Respuesta

```json
{
  "message": "Proyecto creado correctamente"
}
```

---

## DELETE /api/projects/:id

Elimina un proyecto según su id.

### Ejemplo

/api/projects/1

### Respuesta

```json
{
  "message": "Proyecto 1 eliminado"
}
```