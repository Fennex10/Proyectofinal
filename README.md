# 🚀 Proyecto Final DevOps – CI/CD con GitHub Actions, Docker & Render

Este proyecto implementa un pipeline **CI/CD completo** utilizando:

* **GitHub Actions** para automatizar pruebas, construcción de imagen Docker y despliegue.
* **Docker** para contenerizar la aplicación.
* **Render** para la publicación automática en producción.

---

## 📌 Tecnologías usadas

* Node.js (servidor HTTP básico)
* Jest + Supertest (pruebas unitarias)
* Docker
* GitHub Actions
* Render (deploy automático)

---

# 🖥️ Aplicación

La aplicación es un simple Hola Mundo:

```
Hola Mundo desde DevOps CI/CD!
```

Está desarrollada sin Express, usando únicamente el módulo `http` de Node.js.

---

# 📁 Estructura del proyecto

```
📦 mi-app-devops
├── app.js
├── server.js
├── tests
│   └── app.test.js
├── Dockerfile
├── package.json
├── .github
│   └── workflows
│       └── ci-cd.yml
└── README.md
```

---

# ⚙️ Instalación local

```bash
npm install
npm start
```

Visita:
👉 [http://localhost:3000](http://localhost:3000)

---

# 🧪 Ejecutar pruebas unitarias

```bash
npm test
```

Las pruebas verifican que la aplicación responde correctamente al hacer un GET a `/`.

---

# 🐳 Docker

### Crear imagen

```bash
docker build -t mi-app-devops .
```

### Ejecutar contenedor

```bash
docker run -p 3000:3000 mi-app-devops
```

---

# 🔄 CI/CD Pipeline con GitHub Actions

El pipeline realiza automáticamente:

### ✔️ 1. Instalación de dependencias

### ✔️ 2. Ejecución de pruebas unitarias

### ✔️ 3. Construcción de imagen Docker

### ✔️ 4. Push de la imagen a Docker Hub

### ✔️ 5. Despliegue automático a Render

---

# 🔐 Secrets necesarios en GitHub

| Secret              | Descripción               |
| ------------------- | ------------------------- |
| `DOCKERHUB_USER`    | Usuario de Docker Hub     |
| `DOCKERHUB_TOKEN`   | Token de Docker Hub       |
| `RENDER_API_KEY`    | API Key de Render         |
| `RENDER_SERVICE_ID` | ID del servicio en Render |

---

# 📤 Despliegue automático (Render)

El workflow ejecuta:

```bash
POST https://api.render.com/v1/services/<SERVICE_ID>/deploys
```

Usando tu:

```
RENDER_API_KEY
```

Cuando haces push a `main`, Render actualiza la app y publica la nueva versión.


# 🎓 Autor

**Dewrin Girón**
Proyecto final DevOps – CI/CD
Profesor: *Elvyz Cruz*
