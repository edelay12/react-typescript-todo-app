import React, { useState } from "react";

interface Todo {
  text: string;
  completed: boolean;
}

interface Props {
  handleSubmitTodo: (
    event: React.FormEvent<HTMLFormElement>,
    t: string
  ) => void | undefined;
}

export const AddTodo: React.FC<Props> = ({ handleSubmitTodo }) => {
  const [t, setT] = useState<string>("");

  return (
    <form className="d-flex" onSubmit={e => handleSubmitTodo(e, t)}>
      <input
        className="form-control w-50 ml-auto"
        type="text"
        value={t}
        onChange={e => setT(e.target.value)}
        name="todoAddInput"
      />
      <input className="w-25 mr-auto" type="submit" value="submit" />
    </form>
  );
};
