"use server";

import { addTodo, markDone, resetTodos } from "@/utils/store-data";
import { revalidatePath } from "next/cache";

export async function addTodoAction(formData: FormData) {
  const text = formData.get("text") as string;
  if (text && text.trim()) {
    addTodo(text.trim());
    console.log("Added todo:", text);
  }
  // Force revalidation of the current page
  revalidatePath("/");
}

export async function markDoneAction(id: number) {
  const todo = markDone(id);
  console.log("Marked todo as done:", id, todo);
  // Force revalidation of the current page
  revalidatePath("/");
}

export async function resetTodosAction() {
  resetTodos();
  console.log("Reset all todos");
  // Force revalidation of the current page
  revalidatePath("/");
}