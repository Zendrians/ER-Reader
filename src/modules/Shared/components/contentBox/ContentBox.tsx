import React, { ReactNode } from "react";
import "./ContentBox.css";
import classNames from "classnames";

interface IContentBox {
  children: ReactNode;
  fitContent?: boolean;
}

const ContentBox: React.FC<IContentBox> = ({
  children,
  fitContent = false
}) => {
  return (
    <div
      className={classNames("contentBox", {
        "contentBox-fitContent": fitContent
      })}
    >
      {children}
    </div>
  );
};

export default ContentBox;
