# Task Manager - React.js + Typescript + Redux Toolkit + React Router + Tailwind

A task management application to help users organize, track, and prioritize tasks. Features include task creation, categorization, deadlines, and progress tracking. Built with React.js (or specify the frontend framework). The repository contains source code, documentation, and setup instructions.

## Project setup guide

## 1 - Clone git repository
``` coded
git clone git@github.com:frontendguru1/task-manager.git
```

## 2 - Install dependencies
```coded
npm i
```

## 3 - Run project
```coded
npm run dev
```

## 4 - Live Preview
```coded
https://frontendguru1.github.io/task-manager
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
