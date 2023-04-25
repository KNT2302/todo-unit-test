import React from "react";
import CompleteTodo from "./CompleteTodo";
import { Todo } from "@/utils/model";

interface CompleteTabI {
  data: Todo[];
}

const CompleteTab: React.FC<CompleteTabI> = ({ data }) => {
  const completeTodo = data.filter((todo) => todo.complete === true);

  return (
    <div>
      <p>Works you have done</p>
      {completeTodo.map((todo) => {
        return <CompleteTodo key={todo.name} name={todo.name} />;
      })}
    </div>
  );
};

export default CompleteTab;
