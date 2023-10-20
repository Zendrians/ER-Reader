import React, { ReactNode } from "react";
import "./SelectionCorner.css";

interface ISelectionCorner {
  children: ReactNode;
  orientation: "left" | "right";
}

const SelectionCorner: React.FC<ISelectionCorner> = ({
  orientation,
  children,
}) => {
  return (
    <div className={`selectionCorner selectionCorner--${orientation}`}>
      {children}
    </div>
  );
};

export default SelectionCorner;
