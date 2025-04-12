
import { todoStore } from '@/app/store/TodoStore';
import { NextResponse } from 'next/server';

// GET /api/todos/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const todo = todoStore.getTodos().find(t => t.id === parseInt(params.id));
  
  if (!todo) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(todo);
}

// PUT /api/todos/[id]
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const updatedTodo = todoStore.updateTodo(parseInt(params.id), body);
  
  if (!updatedTodo) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(updatedTodo);
}

// DELETE /api/todos/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const success = todoStore.deleteTodo(parseInt(params.id));
  
  if (!success) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }
  
  return new NextResponse(null, { status: 204 });
} 