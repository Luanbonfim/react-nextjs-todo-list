'use client';

import { useState } from 'react';
import { TodoProps } from './types/TodoProps';
import { TodoItem } from '@/app/components/TodoList/types/TodoItem';

export default function TodoList({ initialTodos }: TodoProps) {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add a new todo
  const addTodo = async () => {
    if (newTodo.trim() !== '') {
      try {
        setIsLoading(true);
        const response = await fetch('/api/todos/collection', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: newTodo }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to add todo');
        }
        
        const data = await response.json();
        setTodos([...todos, data]);
        setNewTodo('');
        setError(null);
      } catch (err) {
        setError('Error adding todo. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleTodo = async (id: number) => {
    try {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !todo.completed }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
      
      const updatedTodo = await response.json();
      setTodos(todos.map(t => t.id === id ? updatedTodo : t));
      setError(null);
    } catch (err) {
      setError('Error updating todo. Please try again.');
      console.error(err);
    }
  };

  // Delete a todo
  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
      
      setTodos(todos.filter(todo => todo.id !== id));
      setError(null);
    } catch (err) {
      setError('Error deleting todo. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={addTodo}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add'}
        </button>
      </div>
      
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 p-2 border rounded-lg"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5"
            />
            <span
              className={`flex-1 ${
                todo.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 text-red-500 hover:bg-red-100 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 