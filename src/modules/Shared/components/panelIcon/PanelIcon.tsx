import React, { ReactNode } from "react";
import "./PanelIcon.css";

interface IPanelIcon {
  children: ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
}

const PanelIcon: React.FC<IPanelIcon> = ({ children, onClick, isSelected }) => {
  return (
    <button
      className={`panelIcon ${isSelected ? "panelIcon--selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PanelIcon;
