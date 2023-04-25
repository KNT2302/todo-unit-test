import React, { Children, ReactNode } from "react";

interface TabItemI {
  index: string;
  style?: React.CSSProperties;
  handleIsClicked: (index: string) => boolean;
  handleOnClick: (index: string) => void;
  children: (props: any) => ReactNode;
}

const TabItem: React.FC<TabItemI> = ({
  index,
  style,
  children,
  handleIsClicked,
  handleOnClick,
}) => {
  const clicked = handleIsClicked(index);
  return (
    <div
      style={{ cursor: "pointer", ...style }}
      onClick={() => handleOnClick(index)}
    >
      {children({ clicked })}
    </div>
  );
};

export default TabItem;
