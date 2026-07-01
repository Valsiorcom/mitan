# Mitan - Development Configuration

## Node Version

This project uses Node.js 18.17.0+

```bash
node --version  # Should be >= 18.17.0
```

## Environment Setup

1. **Clone repository**
   ```bash
   git clone https://github.com/Valsiorcom/mitan.git
   cd mitan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## Project Structure

```
mitan/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── error.tsx                # Error boundary
│   ├── not-found.tsx            # 404 page
│   ├── loading.tsx              # Loading UI
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # 30+ UI components
│   ├── layout/                  # Layout components
│   ├── providers.tsx            # Client providers
│   └── index.ts                 # Barrel exports
├── hooks/                        # Custom React hooks
│   ├── useDebounce.ts
│   ├── useClickOutside.ts
│   ├── useLazyLoad.ts
│   ├── useLocalStorage.ts
│   ├── usePagination.ts
│   ├── usePerformanceMonitoring.ts
│   ├── use-mobile.ts
│   ├── useToast.ts
│   └── index.ts
├── lib/                          # Utilities
│   ├── utils.ts                 # Class name utilities
│   ├── constants.ts             # Application constants
│   ├── validators.ts            # Validation functions
│   ├── formatting.ts            # Format utilities
│   ├── accessibility.ts         # A11y utilities
│   ├── performance.ts           # Performance tracking
│   ├── dynamic.ts               # Dynamic imports
│   ├── classnames.ts            # Class utilities
│   └── index.ts                 # Barrel export
├── types/                        # TypeScript types
│   └── index.ts
├── public/                       # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── manifest.json
├── middleware.ts                # Next.js middleware
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
├── tsconfig.json               # TypeScript config
├── .eslintrc.json              # ESLint config
├── .prettierrc                 # Prettier config
├── vercel.json                 # Vercel config
└── package.json                # Dependencies
```

## Accessibility Testing

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Escape closes modals
   - Arrow keys navigate menus

2. **Screen Reader Testing**
   - Use NVDA (Windows) or JAWS
   - macOS: VoiceOver (Cmd+F5)
   - Test heading hierarchy
   - Test form labels and errors

3. **Color Contrast**
   - Use axe DevTools browser extension
   - Verify WCAG AA compliance (4.5:1)

4. **Focus Management**
   - Check visible focus indicators
   - Verify tab order
   - Test focus trap in modals

## Performance Testing

1. **Lighthouse**
   ```bash
   npm run build
   npm start
   # Open Chrome DevTools > Lighthouse
   ```

2. **Web Vitals**
   - Enable NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING=true
   - Metrics sent to /api/analytics/web-vitals

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel dashboard
3. Set environment variables
4. Deploy

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Create feature branch: `git checkout -b feature/description`
2. Commit changes: `git commit -m "feat: description"`
3. Push to branch: `git push origin feature/description`
4. Open Pull Request

## Code Standards

- TypeScript strict mode
- ESLint enforced
- Prettier formatting
- WCAG AA accessibility
- Lighthouse 95+ performance
- Semantic HTML
- Semantic commits

## Common Issues

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next
npm run build
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Support

For issues and questions, please create an issue on GitHub.