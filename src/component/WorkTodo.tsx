import { Todo } from "@/utils/model";
import React from "react";

interface WorkTodoI {
  name: string;
  data: Todo[];
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleChangeTab:any
}

const WorkTodo: React.FC<WorkTodoI> = ({ name, setData, data,handleChangeTab }) => {
  const handleDeleteTodo = (todoDelete: any) => {
    const newDataTodo = data.filter(
      (todo: any) => todo.name !== todoDelete.name
    );
    setData([...newDataTodo]);
  };

  const handleSetComplete = (completeTodo: any) => {
    const todoIndex = data.findIndex((todo:any)=>todo.name === completeTodo.name);
    const newDataTodo = data;
    newDataTodo[todoIndex].complete = true;
    setData([...newDataTodo]);
    handleChangeTab("0")
  };

  return (
    <div
      data-testid="worktodo"
      style={{
        border: "1px solid darkorange",
        borderRadius: "1em",
        padding: ".5em 1em",
        marginBlock: "1em",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        data-testid={`${name}complete`}
        style={{ flex: "1", cursor: "pointer" }}
        onClick={() => handleSetComplete({ name, complete: false })}
      >
        {name}
      </div>
      <button
        data-testid={`${name}delete`}
        onClick={() => handleDeleteTodo({ name, complete: false })}
      >
        Delete
      </button>
    </div>
  );
};

export default WorkTodo;
