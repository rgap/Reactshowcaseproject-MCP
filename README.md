# React Showcase Project

A showcase website built with React, TypeScript, and Vite featuring multiple mini-projects including Tic-Tac-Toe and Poke Collection.

## Tech Stack

- **React 18+** - Functional components only
- **TypeScript** - Strict mode enabled
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Component-scoped styling
- **ITCSS Architecture** - Organized CSS structure
- **BEM Naming Convention** - Maintainable CSS classes

## Project Structure

```
src/
  ├── styles/                 # ITCSS layers
  │   ├── settings/           # CSS variables
  │   ├── generic/            # Resets
  │   ├── elements/           # Base styles
  │   └── global.css          # Main import
  ├── components/             # Reusable components
  │   ├── Button/
  │   ├── Tag/
  │   ├── ProjectCard/
  │   └── LanguagePicker/
  ├── pages/                  # Page components
  │   └── HomePage/
  ├── contexts/               # React contexts
  │   └── I18nContext.tsx
  ├── locales/                # Translations (en/es)
  ├── utils/                  # Utility functions
  └── App.tsx
```

## Features

- 🌐 **Internationalization (i18n)** - Manual implementation supporting English and Spanish
- 🎨 **Modern UI** - Clean design following Figma specifications
- 📱 **Responsive Design** - Mobile-friendly layout
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🎯 **Type-Safe** - Full TypeScript coverage

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Mini Projects

### 1. ReactDev Tic-Tac-Toe
A complete implementation of the React tutorial Tic-Tac-Toe game with enhancements:
- TypeScript implementation
- Game history tracking
- Reset functionality
- Winner line highlighting
- Tied game detection
- LocalStorage persistence

### 2. Poke Collection
A Pokemon collection manager featuring:
- User authentication
- Pokemon search via PokeAPI
- Favorites management
- API integration with Poke Collection Lite
- LocalStorage persistence

## Architecture Guidelines

### CSS Architecture (ITCSS)

1. **Settings**: CSS variables and design tokens
2. **Generic**: Reset and normalize styles
3. **Elements**: Base HTML element styles
4. **Components**: Component-specific styles with BEM

### BEM Naming Convention

- **Block**: `.component`
- **Element**: `.component__element`
- **Modifier**: `.component--modifier`

### React Patterns

- Named exports only: `export { Component }`
- Barrel exports in `index.ts`
- Functional components with TypeScript
- Context API for global state
- Custom hooks for reusable logic

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

### PokeAPI
- Base URL: `https://pokeapi.co/api/v2/`
- Pokemon endpoint: `/pokemon/[pokemon-name]`

### Poke Collection Lite API
- Base URL: `https://poke-collection-lite-production.up.railway.app`
- Endpoints:
  - GET `/api/[username]/favorites` - List favorites
  - POST `/api/[username]/favorites` - Add favorite
  - DELETE `/api/[username]/favorites/[id]` - Remove favorite
  - POST `/api/[username]/reset` - Reset favorites

## Contributing

This project follows strict coding standards:
- Use `intent` instead of `variant` for component variations
- Follow BEM naming in CSS Modules
- Use CSS variables for all design tokens
- Maintain TypeScript strict mode
- No `console.log` in production code

## License

Private project for educational purposes.

