
import { todoStore } from '@/app/store/TodoStore';
import { NextResponse } from 'next/server';


export async function GET() {
  return NextResponse.json(todoStore.getTodos());
}

export async function POST(request: Request) {
  const body = await request.json();
  
  console.log(body);
  if (!body.text || typeof body.text !== 'string') {
    return NextResponse.json(
      { error: 'Text is required and must be a string' },
      { status: 400 }
    );
  }
  
  const newTodo = todoStore.addTodo(body.text);
  return NextResponse.json(newTodo, { status: 201 });
} 