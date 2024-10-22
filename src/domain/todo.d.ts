interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface GetTodoResponse {
  todos: Todo[];
}

interface TodoToShow {
  id: number;
  todo: string;
  completed: boolean;
}

export { Todo, GetTodoResponse, TodoToShow };
