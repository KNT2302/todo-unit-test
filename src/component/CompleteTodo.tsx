import React from "react";

interface CompleteTodoI {
  name: string;
}

const CompleteTodo: React.FC<CompleteTodoI> = ({ name }) => {
  return (
    <div
    data-testid="complete"
      style={{
        border: "1px solid green",
        borderRadius: "1em",
        padding: ".5em 1em",
        marginBlock: "1em",
      }}
    >
      {name}
    </div>
  );
};

export default CompleteTodo;
