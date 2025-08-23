export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// Use a more reliable storage approach that works better with Next.js revalidation
let todos: Todo[] = [];
let idCounter = 1;
let lastModified = Date.now();

// Initialize with some sample data if empty
if (todos.length === 0) {
  todos = [
    { id: 1, text: "Learn Next.js Server Actions", done: false },
    { id: 2, text: "Build a todo app", done: false },
    { id: 3, text: "Deploy to production", done: false }
  ];
  idCounter = 4;
}

export function getTodos(): Todo[] {
  return todos;
}

export function getLastModified(): number {
  return lastModified;
}

export function addTodo(text: string) {
  const newTodo: Todo = { id: idCounter++, text, done: false };
  todos.push(newTodo);
  lastModified = Date.now();
  return newTodo;
}

export function markDone(id: number) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.done = true;
    lastModified = Date.now();
  }
  return todo;
}

export function resetTodos() {
  todos = [];
  idCounter = 1;
  lastModified = Date.now();
}