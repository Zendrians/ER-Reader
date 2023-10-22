import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./PanelModal.css";

interface IPanelModal {
  isOpen: boolean;
  children: ReactNode;
  position: string;
}

const PanelModal: React.FC<IPanelModal> = ({ isOpen, children, position }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      aria-modal="true"
      aria-labelledby="dialog-title"
      className={`panelModal panelModal--${position}`}
    >
      {children}
    </div>,
    document.getElementById("readerMainArea") ?? document.body
  );
};

export default PanelModal;