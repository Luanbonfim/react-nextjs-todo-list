import { Suspense } from 'react';
import TodoLoading from './components/TodoList/TodoLoading';
import TodoList from './components/TodoList/TodoList';


// This is the equivalent of getServerSideProps in the App Router
export default async function Home() {

  const response = await fetch('http://localhost:3000/api/todos/collection', {
    cache: 'no-store' // This ensures we get fresh data on each request
  });
  
  const initialTodos = await response.json();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Next.js Todo App</h1>
        <Suspense fallback={<TodoLoading />}>
          <TodoList initialTodos={initialTodos} />
        </Suspense>
      </div>
    </div>
  );
}
