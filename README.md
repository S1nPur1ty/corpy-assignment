# Corpy & Co Assignment

This assignment is made with the following framework: Vue/Nuxt.js. It also includes, Typescript, Pinia, i18n and Dark/Light mode using Tailwind and Flowbite elements. It is responsive and clean as intended. The additional features are dark/light mode and i18n translation support.

## Table of Contents

- [Installation](#installation)
- [Code Structure](#code-structure)
- [Testing](#testing)

## Installation

#### Navigate to the project directory
```
cd ~/.../projectFolder
```

#### Install dependencies
```
npm install
```

#### Run
```
npm run dev
```

### Or build and run the project with Docker

#### Build
```
docker-compose build
```

#### Run
```
docker-compose up
```

## Code Structure
- `assets`: Static assets like images and stylesheets.
- `components/base`: Base Components which contains the Header and the Sidebar.
- `components/views`: View Components used in the dashboard.
- `layouts`: Application layout templates.
- `pages`: The application's page content.
- `server/api`: Backend API logic.
- `stores`: State management with Pinia.
- `tests`: Unit and integration tests.
- `types`: TypeScript type definitions.

## Testing
```
npm run test
```