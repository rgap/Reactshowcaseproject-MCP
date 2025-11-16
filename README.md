# React Showcase Project

A showcase website built with React, TypeScript, and CSS Modules featuring multiple mini-projects.

## Features

- **ReactDev Tic-Tac-Toe**: Classic tic-tac-toe game with history, localStorage persistence, and winning line highlight
- **Poke Collection**: Pokemon search and favorites management using PokeAPI
- **Internationalization**: Full i18n support with EN/ES language switching

## Tech Stack

- React 18+
- TypeScript (strict mode)
- Vite
- CSS Modules + CSS Variables
- ITCSS Architecture
- BEM Naming Convention

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  styles/         # ITCSS layers (settings, generic, elements)
  components/     # Reusable components
  pages/          # Page components
  contexts/       # React contexts (I18n)
  hooks/          # Custom hooks
  utils/          # Utility functions
  locales/        # Translation files
```

