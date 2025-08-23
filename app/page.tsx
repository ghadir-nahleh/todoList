import { getTodos, getLastModified } from "@/utils/store-data";
import { markDoneAction, resetTodosAction } from "@/app/actions";
import AddTodoForm from "@/components/atoms/AddTodoForm";
import Button from "@/components/atoms/Button";

export default function Page() {
  const todos = getTodos();
  const lastModified = getLastModified();

  return (
    <main className="max-w-md mx-auto p-4 sm:p-6 lg:p-8" key={lastModified}>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
        Todo List
      </h1>

      <AddTodoForm />

      <div className="text-center mb-6 sm:mb-8">
        <form action={resetTodosAction}>
          <Button 
            type="submit" 
            variant="danger" 
            className="px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-bold w-full sm:w-auto"
          >
            Reset All
          </Button>
        </form>
      </div>

      <ul className="space-y-2 sm:space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 rounded-lg p-3 sm:px-4 sm:py-3 bg-white shadow-sm hover:shadow-md transition-shadow gap-2 sm:gap-0"
          >
            {/* Cross out when done */}
            <span className={`text-gray-800 text-sm sm:text-base ${todo.done ? "line-through text-gray-500" : ""}`}>
              {todo.text}
            </span>

            {/* Done button: disabled if already done */}
            <form action={markDoneAction.bind(null, todo.id)} className="sm:self-center">
              <Button
                type="submit"
                variant={todo.done ? "outline" : "primary"}
                disabled={todo.done}
                className="text-xs sm:text-sm w-full sm:w-auto"
              >
                {todo.done ? "✔ Done" : "Done"}
              </Button>
            </form>
          </li>
        ))}
      </ul>

    </main>
  );
}
