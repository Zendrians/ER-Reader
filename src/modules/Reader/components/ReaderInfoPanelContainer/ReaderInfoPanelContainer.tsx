import React, { Dispatch, SetStateAction } from "react";
import ReaderSidePanel from "../readerSidePanel/ReaderSidePanel";
import "./ReaderInfoPanelContainer.css";
import ReaderInfoBar from "../readerInfoBar/ReaderInfoBar";
import SelectionCorner from "../../../Shared/components/rightSidePanel/SelectionCorner";



const ReaderInfoPanelContainer: React.FC = () => {
  return (
    <aside className="readerInfoPanelContainer">
      <ReaderSidePanel />
      <SelectionCorner orientation="right">
        <ReaderInfoBar />
      </SelectionCorner>
    </aside>
  );
};

export default ReaderInfoPanelContainer;
