# vue_db_table

Account management app. Stores a list of accounts with labels, login/password, and account type (LDAP or Local). Data persists in localStorage via Pinia.

## Tech stack

- Vue 3 + TypeScript
- Vite
- Vuetify (UI components)
- Pinia + pinia-plugin-persistedstate (state management)

## Project structure

```
src/
├── App.vue                     # Root component
├── main.ts                     # Entry point
├── entities/
│   └── account/                # Account domain logic
│       ├── index.ts            # Public API (re-exports)
│       └── model/
│           ├── types.ts        # Account types and constants
│           ├── store.ts        # Pinia store (CRUD + persistence)
│           ├── labels.ts       # Label parsing utilities
│           └── validation.ts   # Form validation
├── shared/
│   └── ui/                     # Reusable UI components
│       ├── BaseInput.vue       # Text/password input wrapper
│       ├── BaseSelect.vue      # Select dropdown wrapper
│       └── IconButton.vue      # Icon button wrapper
└── widgets/
    └── account-list/           # Account list feature
        ├── index.ts
        └── ui/
            ├── AccountList.vue # List container, add button
            └── AccountRow.vue  # Single account row with form
```

Architecture follows a feature-based layout: `entities` for domain logic and state, `shared` for reusable components, `widgets` for page-level features. Each module exposes a public API via `index.ts`.

## Setup and run

Node.js `>=20.19` or `>=22.12` required.

```sh
git clone <git@github.com:Ailadir/vue-task.git>
cd vue_db_table
npm install
npm run dev
```

## Available scripts

| Script               | Description                         |
| -------------------- | ----------------------------------- |
| `npm run dev`        | Start dev server                    |
| `npm run build`      | Type-check and build for production |
| `npm run preview`    | Preview production build locally    |
| `npm run type-check` | Run `vue-tsc` type checking         |
