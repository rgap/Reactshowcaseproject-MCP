# React Showcase Project

A modern React showcase website built with TypeScript, CSS Modules, ITCSS architecture, and BEM methodology.

## Features

- ✅ React 18+ with TypeScript (strict mode)
- ✅ Vite for fast development and building
- ✅ CSS Modules for scoped styling
- ✅ ITCSS Architecture (Settings, Generic, Elements, Components)
- ✅ BEM Naming Convention
- ✅ Responsive design
- ✅ Language switcher (EN/ES)
- ✅ Project showcase cards

## Project Structure

```
src/
  styles/
    settings/
      variables.css          # CSS variables
    generic/
      reset.css             # CSS reset/normalize
    elements/
      base.css              # Base element styles
    global.css              # Imports all layers
  components/
    Header/                 # Header with language picker
    LanguagePicker/         # Language selection button
    FeatureTag/             # Feature tag badge
    ComponentCard/          # Project card component
  pages/
    HomePage/               # Main page with project grid
  utils/
    cx.ts                   # Class name utility
  App.tsx                   # Main App component
  main.tsx                  # Entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18+** - UI library (functional components only)
- **TypeScript** - Type safety with strict mode
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **CSS Variables** - Design tokens
- **Nunito Font** - Google Fonts

## Architecture

### ITCSS Layers

1. **Settings** - CSS variables and design tokens
2. **Generic** - Reset and normalize styles
3. **Elements** - Base HTML element styles
4. **Components** - Component-specific styles with BEM

### BEM Naming

- **Block**: `.component`
- **Element**: `.component__element`
- **Modifier**: `.component--modifier`

## Components

### Header
Main header with logo and language picker

### LanguagePicker
Language selection button with flag icons

### FeatureTag
Badge component for displaying project features

### ComponentCard
Card component displaying project information with image, title, and feature tags

### HomePage
Main page displaying a grid of project cards

## Design System

### Colors
- Primary: #0f172a
- Background: #f8fafc
- Header Background: #eff4ff
- Card Background: #ffffff
- Border: #cbd5e1

### Typography
- Font Family: Nunito
- Font Weights: 400 (Normal), 500 (Medium), 700 (Bold)

### Spacing
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- 2XL: 48px
- 3XL: 64px

## Browser Support

Modern browsers with ES2020 support

## License

MIT


