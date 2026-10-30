# Grimoire

## Running locally

Notes are saved to a local PostgreSQL database through a small Express API in `server/`.
Vite proxies `/api` requests to it during development.

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start Postgres. Either use your own install and create a database (`createdb grimoire`),
   or start one in Docker:

   ```sh
   npm run db:up
   ```

3. Configure the connection:

   ```sh
   cp .env.example .env
   ```

   Edit `DATABASE_URL` if your Postgres user, password or database differ.

4. Start the API and the web app together:

   ```sh
   npm run dev
   ```

   The app is at http://localhost:5173 and the API at http://localhost:3001.
   The `notes` table is created automatically on first start (`server/schema.sql`).

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
