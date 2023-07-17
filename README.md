# Liteflix Frontend

Proyecto frontend para el codechallenge de Litebox
Consiste en una aplicacion SPA escrita en Typescript y utilizando React.
Desplegada en Firebase Hosting

## Demo

Pueden acceder a la demo en [Firebase Hosting](https://liteflix-7359f.web.app/)

## Tabla de contenidos

- [Tecnologias](#tecnologias)
- [Features](#features)
- [Como se corre](#como-se-corre)
- [Como se despliega](#como-se-deploya)

## Tecnologias

Este proyecto fue creado usando [Vite](https://vitejs.dev/)
UI kit con [Storybook](https://storybook.js.org/)
UI desarrollada con [Styled Components](https://styled-components.com/)
Gestion de formularios con [Formik](https://formik.org/)
Automatizaciones con [Husky](https://typicode.github.io/husky/)
CI/CD con [Github Actions](https://github.com/p4tr1c1o/Liteflix/actions)

## Features

  * Manejo de tipos con Typescript
  * Linting y formateo de codigo automatico antes de cada coommit
  * Versionado automatico con Semantic-Release
  * Changelog automatico con Semantic-Release

## Como se corre

Primero instalar todas las dependencias con:

	yarn install

Luego levantar el entorno de desarrollo con:

	yarn run dev


Para correr el UI kit

	yarn run storybook

## Como se despliega

Este proyecto se encuentra integrado con Firebase a traves de Github Actions, por lo cual luego de cada push se ejecuta un Action de build y despliegue al hosting.

No obstante se puede ejecutar este proceso manualmente

Transpilando el codigo con:

	yarn run build 

Iniciando sesion en Firebase con:

	firebase login

Luego desplegando el codigo con:

	firebase deploy