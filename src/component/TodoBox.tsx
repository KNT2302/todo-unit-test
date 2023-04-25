import React, { useEffect, useState } from "react";
import TabBox from "./Tab";
import CompleteTab from "./CompleteTab";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { FetchTodo } from "@/utils/Services";
import { Todo as todo } from "@/utils/model";

const TodoBox = () => {
  const [data, setData] = useState<todo[]>([]);

  useEffect(() => {
    FetchTodo().then((data) => setData(data));
  }, []);

  return (
    <>
      <TabBox>
        {({ handleIsClicked, handleOnClick }) => (
          <TabBox.Items key={0} props={{ handleIsClicked, handleOnClick }}>
            {() => [
              {
                ci: (clicked) => (
                  <div
                    style={{ color: `${clicked.clicked ? "green" : "black"}` }}
                  >
                    Complete
                  </div>
                ),
              },
              {
                ci: (clicked) => (
                  <div
                    style={{
                      color: `${clicked.clicked ? "darkorange" : "black"}`,
                    }}
                  >
                    Todo
                  </div>
                ),
              },
            ]}
          </TabBox.Items>
        )}
        {({ currentIndex, handleOnClick }) => (
          <TabBox.Body
            key={1}
            currentIndex={currentIndex}
            handleOnClick={handleOnClick}
          >
            {(currentIndex, handleOnClick) => {
              if (currentIndex === "1") {
                return (
                  <Todo
                    data={data}
                    setData={setData}
                    handleChangeTab={handleOnClick}
                  />
                );
              }
              if (currentIndex === "0") {
                return <CompleteTab data={data} />;
              }
            }}
          </TabBox.Body>
        )}
      </TabBox>
      <AddTodo data={data} setData={setData} />
    </>
  );
};

export default TodoBox;
