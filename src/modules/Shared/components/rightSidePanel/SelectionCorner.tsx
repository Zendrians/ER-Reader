import React, { ReactNode, useContext } from "react";
import "./SelectionCorner.css";
import { PanelContext } from "../../../Reader/context/PanelContext";

interface ISelectionCorner {
  children: ReactNode;
  orientation: "left" | "right";
}

const SelectionCorner: React.FC<ISelectionCorner> = ({
  orientation,
  children,
}) => {
  const { isPanelOpen } = useContext(PanelContext);
  const animation = !isPanelOpen
    ? `selectionCorner--animation--${orientation}`
    : "";

  return (
    <div
      className={`selectionCorner selectionCorner--${orientation} ${animation}`}
    >
      {children}
    </div>
  );
};

export default SelectionCorner;
