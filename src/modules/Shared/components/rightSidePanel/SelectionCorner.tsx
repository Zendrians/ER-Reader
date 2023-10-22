import React, { ReactNode } from "react";
import "./SelectionCorner.css";
import classNames from "classnames";

interface ISelectionCorner {
  children: ReactNode;
  orientation: "left" | "right";
  isPanelOpen: boolean;
}

const SelectionCorner: React.FC<ISelectionCorner> = ({
  orientation,
  children,
  isPanelOpen,
}) => {
  return (
    <div
      className={classNames(
        "selectionCorner",
        `selectionCorner--${orientation}`,
        { "selectionCorner--panelOpen": isPanelOpen }
      )}
    >
      {children}
    </div>
  );
};

export default SelectionCorner;

// className={`selectionCorner selectionCorner--${orientation}`}
