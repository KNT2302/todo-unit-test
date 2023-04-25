import { Todo } from "@/utils/model";
import React, { useRef, useState } from "react";

interface AddTodoI {
  data: Todo[];
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo: React.FC<AddTodoI> = ({ data, setData }) => {
  const [error, setError] = useState<string>("");
  const setTodo = (newTodo: any) => {
    setData([...data, newTodo]);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = todo?.current?.value;

    if (!newTodo) {
      setError("Required");
      return;
    }

    setTodo({
      name: newTodo,
      complete: false,
    });

    todo.current.value = "";
  };

  const todo = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) => handleAddTodo(e)}>
      <input
        style={{
          padding: ".5em 1em",
        }}
        ref={todo}
        type="text"
        placeholder="Enter todo"
        name="todo"
        data-testid="todoInput"
      />
      <p style={{ height: "2em", color:'red' }}>{error}</p>
      <input
        type="submit"
        value="Add"
        style={{
          padding: ".5em 1em",
        }}
        data-testid="addTodo"
      />
    </form>
  );
};

export default AddTodo;
