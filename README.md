# Dashboard para Control de Cursos

- Esta aplicación web está inspirada para usuarios que quisieran ser profesores y tener un administrador de sus cursos.
- La parte del servidor está creada por las siguientes tecnologías:
  - NodeJs
  - ExpressJs
  - MongoDB
  - Express Validators
  - Dotenv
- El cliente ha sido creado por las siguientes tecnologías:
  - Reactjs
  - typescript
  - react-router-dom V6
  - url_github_client:
  - react toastify
  - fetch
  - url_github_client: https://github.com/anthonysa0813/coursesClient
- URL Postman documentación: https://documenter.getpostman.com/view/9252275/2s847BUvkm#9b6ac89d-eb0d-4045-9132-e24114ac3ee5

![imagen_de_project](public\image_project.png)

## clonar el repositorio

```bash
git clone git@github.com:anthonysa0813/CoursesServer.git
```

## Ingresar al repositorio

```bash
cd CoursesServer
```

## Descargar las dependencias

```bash
 npm install ó yarn install
```

# {{url}}

```bash
http://localhost:5050/api/
```

# Correr el servidor

```bash
  npm run dev ó yarn dev
```

# Información Extra

## .env file

- Si tienes mongoDBCompass, te puedes conectar a la base de datos con la siguiente ruta:
  - mongodb+srv://root:Vx3!p-!2zLbDey4@cluster0.u4zza2q.mongodb.net/Courses

```env
  MONGO_URI=mongodb+srv://root:Vx3!p-!2zLbDey4@cluster0.u4zza2q.mongodb.net/Courses
  URL=http://localhost:5050/api
```
