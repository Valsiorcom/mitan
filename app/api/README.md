# API Routes

This directory contains API routes for the application.

Create route handlers in this directory:

```typescript
// app/api/example/route.ts
export async function GET(request: Request) {
  return Response.json({ message: 'Hello' });
}
```
