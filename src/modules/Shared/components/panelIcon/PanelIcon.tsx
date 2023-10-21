import React, { ReactNode } from "react";
import "./PanelIcon.css"

interface IPanelIcon {
  children: ReactNode;
  onClick?: () => void;
}

const PanelIcon: React.FC<IPanelIcon> = ({ children, onClick }) => {
  return <button className="panelIcon" onClick={onClick}>{children}</button>;
};

export default PanelIcon;
