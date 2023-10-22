import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./ModalDialog.css";

interface IModalDialog {
  isOpen: boolean;
  children: ReactNode;
  position: string;
}

const ModalDialog: React.FC<IModalDialog> = ({ isOpen, children, position }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      aria-modal="true"
      aria-labelledby="dialog-title"
      className={`modalDialog modalDialog--${position}`}
    >
      {children}
    </div>,
    document.getElementById("readerMainArea") ?? document.body
  );
};

export default ModalDialog;