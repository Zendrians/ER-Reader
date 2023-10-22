import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./ModalDialog.css";

interface IModalDialog {
  isOpen: boolean;
  children: ReactNode;
  animation: string
}

const ModalDialog: React.FC<IModalDialog> = ({ isOpen, children, animation }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <dialog
      open
      aria-modal="true"
      aria-labelledby="dialog-title"
      className={`modalDialog modalDialog__animation--${animation}`}
    >
      {children}
    </dialog>,
    document.getElementById('readerMainArea') ?? document.body
  );
};

export default ModalDialog;