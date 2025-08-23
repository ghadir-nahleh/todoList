import { addTodoAction } from "@/app/actions";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

export default function AddTodoForm() {
  return (
    <form action={addTodoAction} className="flex flex-col sm:flex-row gap-2 mb-4">
      <Input 
        name="text" 
        placeholder="New todo" 
        required 
        className="flex-1"
        autoComplete="off"
      />
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Add
      </Button>
    </form>
  );
}
