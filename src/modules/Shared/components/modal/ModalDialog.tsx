import React, { ReactNode, useContext } from "react";
import ReactDOM from "react-dom";
import "./ModalDialog.css";
import { PanelContext } from "../../../Reader/context/PanelContext";

interface IModalDialog {
  children: ReactNode;
}

const ModalDialog: React.FC<IModalDialog> = ({ children }) => {
  const { isOpen } = useContext(PanelContext);
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
    document.getElementById("readerMainArea") ?? document.body
  );
};

export default ModalDialog;
