import { TodoItem } from "../components/TodoList/types/TodoItem";

class TodoStore {
  private static instance: TodoStore;
  private todos: TodoItem[] = [
    { id: 1, text: 'Learn Next.js', completed: false },
    { id: 2, text: 'Build an API', completed: false },
  ];

  private constructor() {}

  public static getInstance(): TodoStore {
    if (!TodoStore.instance) {
      TodoStore.instance = new TodoStore();
    }
    return TodoStore.instance;
  }

  public getTodos(): TodoItem[] {
    return this.todos;
  }

  public addTodo(text: string): TodoItem {
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  public updateTodo(id: number, updates: Partial<TodoItem>): TodoItem | null {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) return null;

    this.todos[index] = { ...this.todos[index], ...updates };
    return this.todos[index];
  }

  public deleteTodo(id: number): boolean {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) return false;

    this.todos.splice(index, 1);
    return true;
  }
}

export const todoStore = TodoStore.getInstance(); 