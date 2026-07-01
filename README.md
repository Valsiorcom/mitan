# Mitan

Production-ready Next.js application with Relume design system integration.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ ESLint & Prettier configuration
- ✅ Dark mode support
- ✅ Responsive design
- ✅ WCAG AA accessible

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm 9.0.0 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
npm run format
```

### Type Checking

```bash
npm run type-check
```

## Project Structure

```
mitan/
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── error.tsx        # Error boundary
│   └── not-found.tsx    # 404 page
├── components/          # Reusable components
│   ├── ui/              # UI components
│   └── layout/          # Layout components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── public/              # Static assets
└── config files         # Next.js, Tailwind, etc.
```

## Component Library

All UI components are built with shadcn/ui and Radix UI primitives for maximum accessibility and customization.

### Available Components

- Button
- Card
- Dialog
- Dropdown Menu
- Form Fields
- Input
- Label
- Modal
- Pagination
- Select
- Table
- Tabs
- Toast
- Tooltip
- Alert
- Avatar
- Badge
- Breadcrumb
- Checkbox
- RadioGroup
- Skeleton
- Spinner

## Styling

- Tailwind CSS for utility-first styling
- CSS custom properties for theme variables
- Dark mode support with `dark:` prefix
- Responsive design with breakpoints

## Accessibility

All components follow WCAG AA guidelines:
- Semantic HTML
- ARIA labels and attributes
- Keyboard navigation support
- Focus management
- Screen reader support

## License

This project is private and proprietary.