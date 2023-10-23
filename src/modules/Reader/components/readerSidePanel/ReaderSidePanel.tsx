import React, { ReactNode } from "react";
import "./ReaderSidePanel.css";

interface IReaderSidePanel {
  children: ReactNode;
}

const ReaderSidePanel: React.FC<IReaderSidePanel> = ({ children }) => {
  return <div className="readerSidePanel"> {children} </div>;
};

export default ReaderSidePanel;
