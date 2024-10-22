import { TodoToShow } from "@/domain/todo";
import React from "react";

interface TodoListProps {
  todos: TodoToShow[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo, index) => (
        <li key={index}>
          <p>{todo.todo}</p>
          <p>{todo.completed ? "TodoCompleted" : "Todo Not Completed"}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
