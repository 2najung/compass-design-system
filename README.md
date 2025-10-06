# Compass Design System

A React component library built with styled-components.

## Getting Started

### Development

```bash
npm install
npm run dev
```

This will start Storybook at http://localhost:6006

### Build

```bash
npm run build
```

### Scripts

- `npm run dev` - Start Storybook development server
- `npm run build` - Build the library for production
- `npm run build-storybook` - Build Storybook for deployment
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
├── tokens/         # Design tokens (colors, typography, spacing, etc.)
└── utils/          # Utility functions
```

## Tech Stack

- React 18
- TypeScript
- styled-components
- Vite
- Storybook
- TSUP (for library bundling)
