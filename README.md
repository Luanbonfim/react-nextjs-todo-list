# Next.js Todo App

A modern Todo application built with Next.js 13+ (App Router), TypeScript, and Tailwind CSS.

## Features

- 🚀 Server-Side Rendering (SSR)
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time Updates
- 📝 CRUD Operations
- 🔍 Type Safety with TypeScript
- 🛣️ File-based Routing
- 🔌 API Routes

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **API**: Next.js API Routes
- **Development**: Node.js & npm

## Project Structure

```
src/
├── app/
│   ├── api/              # API routes
│   │   └── todos/
│   │       ├── collection/
│   │       │   └── route.ts
│   │       └── [id]/
│   │           └── route.ts
│   ├── components/       # React components
│   │   └── Todo/
│   │       ├── Todo.tsx
│   │       └── types.ts
│   ├── types/           # Global TypeScript types
│   │   └── todo.ts
│   ├── store/           # State management
│   │   └── todos.ts
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd nextjs-todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## API Endpoints

- `GET /api/todos/collection` - Get all todos
- `POST /api/todos/collection` - Create a new todo
- `GET /api/todos/[id]` - Get a specific todo
- `PUT /api/todos/[id]` - Update a todo
- `DELETE /api/todos/[id]` - Delete a todo

## Development

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for Next.js
- **Prettier**: Code formatting
- **Source Maps**: Disabled in production

## Best Practices

- Server Components by default
- Client Components marked with 'use client'
- Type-safe API routes
- Centralized state management
- Component-specific types
- Clean project structure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
