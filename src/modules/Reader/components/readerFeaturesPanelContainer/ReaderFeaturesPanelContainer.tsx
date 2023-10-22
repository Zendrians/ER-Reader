import React from "react";
import ReaderSidePanel from "../readerSidePanel/ReaderSidePanel";
import "./ReaderFeaturesPanelContainer.css";
import SelectionCorner from "../../../Shared/components/rightSidePanel/SelectionCorner";
import ReaderFeaturesBar from "../readerFeaturesBar/ReaderFeaturesBar";

const ReaderFeaturesPanelContainer: React.FC = () => {
  return (
    <aside className="readerInfoPanelContainer">
      <SelectionCorner orientation="right">
        <ReaderFeaturesBar />
      </SelectionCorner>
      <ReaderSidePanel />
    </aside>
  );
};

export default ReaderFeaturesPanelContainer;
