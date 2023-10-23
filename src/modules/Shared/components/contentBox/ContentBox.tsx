import React, { ReactNode } from "react";
import './ContentBox.css'

interface IContentBox {
  children: ReactNode;
}

const ContentBox: React.FC<IContentBox> = ({ children }) => {
  return <div className="contentBox">{children}</div>;
};

export default ContentBox;
