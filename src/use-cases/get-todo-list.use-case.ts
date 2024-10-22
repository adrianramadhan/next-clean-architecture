import { GetTodoResponse, Todo, TodoToShow } from "@/domain/todo";

interface GetTodoListUseCaseProps {
  getData: () => Promise<GetTodoResponse>;
}

interface GetTodoListUseCaseReturn {
  ok: boolean;
  message: string;
  todos: TodoToShow[];
}

const presenter = (datas: Todo[]): TodoToShow[] => {
  return datas.map((data) => ({
    completed: data.completed,
    id: data.id,
    todo: data.todo,
  }));
};

export default async function getTodoListUseCase(
  context: GetTodoListUseCaseProps
): Promise<GetTodoListUseCaseReturn> {
  try {
    const responseData = await context.getData();
    return {
      ok: true,
      message: "Berhasil Get Data",
      todos: presenter(responseData.todos),
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      ok: false,
      message: "Gagal Get Data",
      todos: [],
    };
  }
}
