import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./ModalDialog.css";

interface IModalDialog {
  isOpen: boolean;
  children: ReactNode;
}

const ModalDialog: React.FC<IModalDialog> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <dialog
      open
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="modalDialog"
    >
      {children}
    </dialog>,
    document.getElementById('readerMainArea') ?? document.body
  );
};

export default ModalDialog;