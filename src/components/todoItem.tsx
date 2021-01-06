import * as React from 'react';
interface Todo {
    text: string;
    completed: boolean;
  }

interface Props {
    todo: Todo;
    i: number
    deleteTodo: (value: number) => void
    markComplete: (value: number) => void
    }

export const TodoItem : React.FC<Props> = ({todo, markComplete, deleteTodo, i}) => {
    return (
        <div className="d-flex text-center w-100">
        <div style={{textDecoration: todo.completed ? 'line-through': 'unset'}} className="text-center" onClick={() => markComplete(i)}>{todo.text}</div>
        <button className="btn btn-danger mr-5" onClick={() => deleteTodo(i)}>X</button>
    </div>
    )
}