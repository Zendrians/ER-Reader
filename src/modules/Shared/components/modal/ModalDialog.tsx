import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./ModalDialog.css";

interface IModalDialog {
  isOpen: boolean;
  children: ReactNode;
  position: string;
  anchorElId: string;
}

const ModalDialog: React.FC<IModalDialog> = ({ isOpen, children, position, anchorElId }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <dialog
      open
      aria-modal="true"
      aria-labelledby="dialog-title"
      className={`modalDialog modalDialog--${position}`}
    >
      {children}
    </dialog>,
    document.getElementById(anchorElId) ?? document.body
  );
};

export default ModalDialog;