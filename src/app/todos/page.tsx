import getTodoList from "@/data-access/get-todo-list.persistance";
import getTodoListUseCase from "@/use-cases/get-todo-list.use-case";
import TodoList from "./_components/todo-list";

export default async function TodoListPage() {
  const { ok, todos, message } = await getTodoListUseCase({
    getData: getTodoList,
  });
  if (!ok) return <p className="text-red-500">{message}</p>;
  return <TodoList todos={todos} />;
}
