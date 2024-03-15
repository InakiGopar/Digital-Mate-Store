# Digital Mate Store

This project is a fullstack application that simulates a digital mate store. The application consists of an API developed with Node.js and Express.js in the `backend` folder, and a frontend developed with React.js in the `frontend` folder, which consumes this API to display information to the user.

## Contents

- [API Dependencies](#api-dependencies)
- [Frontend Dependencies](#frontend-dependencies)
- [Installation](#installation)
- [Usage](#usage)

## API Dependencies

The API uses the following dependencies:

- express: ^4.18.3
- morgan: ^1.10.0
- mysql2: ^3.6.5

To install all the API dependencies, run the following command in the `backend` folder:

```sh
npm install express morgan mysql2
```
## Frontend

The frontend uses the following dependencies:

- @radix-ui/react-icons: ^1.3.0
- @radix-ui/themes: ^2.0.3
- @vitejs/plugin-react: 4.2.1
- react: 18.2.0
- react-dom: 18.2.0
- react-router-dom: ^6.22.2
- vite: ^5.1.0

To install all the frontend dependencies, run the following command in the frontend folder:

```sh
npm install @radix-ui/react-icons @radix-ui/themes @vitejs/plugin-react react react-dom react-router-dom vite
```

## Installation
1. Clone this repository.
2. To install the backend dependencies, navigate to the backend folder and run npm install express morgan mysql2.
3. To install the frontend dependencies, navigate to the frontend folder and runnpm install @radix-ui/react-icons @radix-ui/themes @vitejs/plugin-react react react-dom react-router-dom vite.

## Usage
- To start the backend, run node src/index.js in the backend folder. The API will be available at http://localhost:1111.
- To start the frontend, run npm run dev in the frontend folder. The frontend will be available at http://localhost:5173.
