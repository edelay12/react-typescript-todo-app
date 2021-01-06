import * as React from "react";

interface Todo {
  text: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  deleteTodo: (value: number) => void;
  markComplete: (value: number) => void;
}

export const DisplayTodos: React.FC<Props> = ({
  todos,
  markComplete,
  deleteTodo
}) => {
  return (
    <div>
      {todos.map((t, i) => (
        <div
          className={`d-flex text-center w-75 mx-auto my-3 shadow rounded ${t.completed &&
            "bg-red"}`}
        >
          <h2
            style={{ textDecoration: t.completed ? "line-through" : "unset" }}
            className="text-center mx-auto"
            onClick={() => markComplete(i)}
          >
            {t.text}
          </h2>
          <button
            className="btn btn-danger mr-5 ml-auto h-75"
            onClick={() => deleteTodo(i)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
