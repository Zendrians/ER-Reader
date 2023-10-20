import React, { ReactNode } from "react";
import "./PanelIcon.css"

interface IPanelIcon {
  children: ReactNode;
}

const PanelIcon: React.FC<IPanelIcon> = ({ children }) => {
  return <button className="panelIcon">{children}</button>;
};

export default PanelIcon;
