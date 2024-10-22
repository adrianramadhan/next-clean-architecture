import { GetTodoResponse } from "@/domain/todo";

export default async function getTodoList(): Promise<GetTodoResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/todos`
  );
  const responseData: GetTodoResponse = await response.json();
  return responseData;
}
