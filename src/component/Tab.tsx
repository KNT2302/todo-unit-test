import React, { ReactNode, useState } from "react";
import TabItem from "./TabItem";

type TabBoxI = (props: any) => ReactNode;

const TabBox = ({ children }: { children: TabBoxI[] }) => {
  const [currentIndex, setCurrentIndex] = useState<string>("1");
  const handleOnClick = (index: string) => {
    setCurrentIndex(index);
  };
  const handleIsClicked = (index: string) => {
    return currentIndex === index;
  };
  return (
    <div
      style={{
        width: "100%",
        border: ".1em solid ",
        borderRadius: "1em",
      }}
    >
      {children.map((child) =>
        child({ handleOnClick, handleIsClicked, currentIndex })
      )}
    </div>
  );
};

interface CI {
  ci: (rest: any) => ReactNode;
}

const TabBoxItems = ({
  props,
  children,
}: {
  props: any;
  children: () => CI[];
}) => {
  return (
    <div
      style={{
        borderBottom: ".1em solid",
        padding: "1em",
        display: "flex",
        gap: "1em",
      }}
    >
      {children().map((item, index) => {
        return (
          <TabItem
            index={index + ""}
            key={index}
            handleIsClicked={props.handleIsClicked}
            handleOnClick={props.handleOnClick}
          >
            {(clicked) => item.ci(clicked)}
          </TabItem>
        );
      })}
    </div>
  );
};

const TabBoxBody = ({
  currentIndex,
  handleOnClick,
  children,
}: {
  handleOnClick:(index:string)=>void
  currentIndex: string;
  children: (index: string, handleOnClick:any) => ReactNode;
}) => {
  return (
    <div
      style={{
        padding: "1em",
      }}
    >
      {children(currentIndex, handleOnClick)}
    </div>
  );
};

TabBox.Items = TabBoxItems;

TabBox.Body = TabBoxBody;

export default TabBox;
