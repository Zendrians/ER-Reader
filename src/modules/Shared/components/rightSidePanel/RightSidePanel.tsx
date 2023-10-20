import React, { ReactNode } from "react";
import "./RightSidePanel.css";

interface IRightSidePanel {
  children: Array<ReactNode>;
}

const RightSidePanel: React.FC<IRightSidePanel> = ({ children }) => {
  return <div className="rightSidePanel">{children}</div>;
};

export default RightSidePanel;
