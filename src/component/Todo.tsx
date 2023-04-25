import React from "react";
import CompleteTodo from "./CompleteTodo";
import WorkTodo from "./WorkTodo";
import { Todo } from "@/utils/model";

interface TodoTabI {
  data: Todo[];
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleChangeTab: (index:string)=>void;
}

const Todo: React.FC<TodoTabI> = ({ data, setData, handleChangeTab }) => {
  const planedTodo = data.filter((todo) => todo.complete === false);

  return (
    <div>
      <p>Works you have planed</p>
      {planedTodo.length === 0 ? (
        <p
          style={{
            marginBlock: "1em",
            color: "darkorange",
          }}
        >
          Have no work planed
        </p>
      ) : (
        <>
          {planedTodo.map((todo) => {
            return (
              <WorkTodo
                key={todo.name}
                name={todo.name}
                data={data}
                setData={setData}
                handleChangeTab={handleChangeTab}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Todo;
