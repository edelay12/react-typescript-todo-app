import React, { useReducer } from "react";
import "./App.css";
import { AddTodo } from "./components/addTodo";
import { DisplayTodos } from "./components/displayTodos";

type Actions =
  | { type: "add"; text: string }
  | {
      type: "remove";
      idx: number;
    }
  | {
      type: "markComplete";
      idx: number;
    };

interface Todo {
  text: string;
  completed: boolean;
}

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, completed: false }];
    case "remove":
      return state.filter((_, i) => action.idx !== i);
    case "markComplete":
      let todos = state;
      todos.map((t, i) => {
        if (action.idx == i) t.completed = !t.completed;
      });
      return [...todos];
    default:
      return state;
  }
};

type State = Todo[];

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Todos </h1>
      </header>
      <div>
        {JSON.stringify(todos)}
        <AddTodo
          handleSubmitTodo={(e, input) => {
            e.preventDefault();
            dispatch({ type: "add", text: input });
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "add", text: "..." });
          }}
        >
          +
        </button>
      </div>

      <DisplayTodos
        todos={todos}
        markComplete={i => dispatch({ type: "markComplete", idx: i })}
        deleteTodo={i => dispatch({ type: "remove", idx: i })}
      />
    </div>
  );
};
// deleteTodo={(i) => dispatch({type: "remove", idx: i})}  markComplete={(i) => dispatch({type: "markComplete", idx: i})}
//onClick={() => markComplete(i)
export default App;
