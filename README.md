# 🛍️ CLI de Gestor de Productos desde la terminal

Un proyecto Node.js que interactúa con la API [FakeStore](https://fakestoreapi.com) para gestionar productos directamente desde la terminal. Permite listar, crear y eliminar productos usando comandos simples.

## 🚀 Características
- **Consultar todos los productos** (`GET`).
- **Buscar un producto por ID** (`GET`).
- **Crear nuevos productos** (`POST`).
- **Eliminar productos** (`DELETE`).

## 📦 Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/emmanuel-cruz-dev/node-project.git

2. Instala las dependencias:
   ```bash
   npm install

## 🔧 Configuración
Asegúrate de tener:

Node.js (v16+ recomendado).

npm o yarn.

## 💻 Uso
Ejecuta los comandos desde la raíz del proyecto:

1. Obtener todos los productos
   ```bash
   npm run start GET products

2. Obtener un producto específico (ID = 1)
   ```bash
   npm run start GET products/1
   
3. Crear un producto nuevo
   ```bash
   npm run start POST products "Nombre del producto" 19.99 "categoría"
   ```

   Ejemplo:
     ```bash
      npm run start POST products "Camiseta JS" 25 "Ropa para hombres"
     ```

4. Eliminar un producto
   ```bash
   npm run start DELETE products/7

## 📝 Estructura del Código
```
.
├── src/                   # Código fuente principal
│   ├── controllers/       # Controladores de productos
│   │   └── productController.js  # Lógica de endpoints (GET, POST, DELETE)
│   ├── routes/            # Rutas de la API
│   │   └── productRoutes.js       # Definición de rutas (Express)
│   ├── services/          # Servicios externos
│   │   └── apiService.js  # Conexión con FakeStore mediante fetch
│   ├── utils/             # Utilidades auxiliares
│   │   └── utils.js       # Funciones compartidas
│   ├── index.js           # Punto de entrada (configuración de Express)
│   └── api.http           # Pruebas de endpoints (opcional)
├── .gitignore             # Archivos excluidos de Git (node_modules)
├── package.json           # Dependencias y scripts
└── package-lock.json      # Versiones exactas de dependencias
```

## 🛠️ Tecnologías
- **Node.js**: Entorno de ejecución.  
- **Express**: Framework para el servidor web.  
- **Fetch API**: Para peticiones HTTP a FakeStore API (sin Axios).  
- **Nodemon**: Recarga automática en desarrollo.  
- **ES Modules**: Uso de import/export (gracias a "type": "module").

## 🌐 API Utilizada
Este proyecto utiliza [FakeStore](https://fakestoreapi.com) para obtener y manejar una lista de productos.
