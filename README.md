# Job Portal

A modern job portal built with **Vue 3**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Features

- Vue 3 with `<script setup>` SFCs
- TypeScript for type safety
- Vite for fast development and build
- Tailwind CSS for utility-first styling
- shadcn-vue for accessible, customizable UI components
- Vue Router 4 for client-side routing
- Mock database using localStorage
- Simple authentication and role-based route guards
- Component-based architecture

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Install dependencies

```bash
yarn install
# or
npm install
```

### Run the development server

```bash
yarn dev
# or
npm run dev
```

### Build for production

```bash
yarn build
# or
npm run build
```

### Preview the production build

```bash
yarn preview
# or
npm run preview
```

## Project Structure

```
src/
  components/      # Vue components + UI components (shadcn-vue)
  composables/     # Reusable logic
  mock/            # Mock database
  pages/           # Route pages
  router/          # Vue Router setup and guards
  types/           # TypeScript types
  index.css        # Tailwind and global styles
  main.ts          # App entry point
```

## Authentication & Routing

- Users can log in as either an **employer** or **applicant** (mocked).
- Route guards protect pages based on authentication and user role.
- User state is managed via a simple composable for reactivity across the app in `src/composables/useCurrentUser.ts`.

## UI Components

This project uses [shadcn-vue](https://www.shadcn-vue.com/) for accessible, customizable UI components.
To add new components, use:

```bash
npx shadcn-vue@latest add <component>
```

## Customization

- Update mock users in `src/mock/initDB.ts`.
- Add or modify pages in `src/pages/`.
- Extend types in `src/types/`.

## License

MIT
