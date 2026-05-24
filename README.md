# CampusGuía BUAP

Aplicación web diseñada para facilitar la navegación dentro de Ciudad Universitaria (CU) de la Benemérita Universidad Autónoma de Puebla.

## Características
- Integración con Google Maps para rutas peatonales exactas.
- Mapa de más de 120 edificios, incluyendo Facultades, EMAs y 19 puertas de acceso desde MySQL.
- Búsqueda rápida con extensiones y correos oficiales de la universidad.
- Registro e inicio de sesión usando JWT para guardar lugares favoritos.

---

## Requisitos

Antes de instalar el proyecto en cualquier otro dispositivo, asegúrate de tener:
- [Node.js](https://nodejs.org/) (Versión 16 o superior).
- Un servidor **MySQL** (ya sea XAMPP, Workbench, o Docker) corriendo en el puerto 3306.

---

## Instalación y Configuración

Sigue estos pasos cuidadosamente para levantar el proyecto al 100%:

### 1. Clonar el repo

git clone <URL_DE_TU_REPO>

cd Proyecto-Final


### 2. Configurar el backend
Abre una terminal y entra a la carpeta del backend:

cd backend
npm install

Configura tus credenciales de MySQL. Si tu MySQL tiene contraseña, edita el archivo backend/.env y colócala en DB_PASSWORD

Inicializa la base de datos y llénala de datos con los siguientes comandos:

node db/init.js 

node db/seed.js   

Enciende el servidor Backend:

node server.js

### 3. Configurar el frontend
Abre otra terminal, asegúrate de estar en la raíz del proyecto y ejecuta:

npm install
npm run dev

Entra a http://localhost:5173. 

---

## Tecnologías utilizadas
Frontend:
- React.js (Vite)
- CSS3
- Lucide React 

Backend:
- Node.js & Express
- MySQL
- JWT & bcrypt
