import React from "react";
import ReaderSidePanel from "../readerSidePanel/ReaderSidePanel";
import "./ReaderFeaturesPanelContainer.css";
import SelectionCorner from "../../../Shared/components/rightSidePanel/SelectionCorner";
import ReaderFeaturesBar from "../readerFeaturesBar/ReaderFeaturesBar";
import CharactersPanel from "../charactersPanel/CharactersPanel";

const ReaderFeaturesPanelContainer: React.FC = () => {
  return (
    <aside className="readerInfoPanelContainer">
      <SelectionCorner orientation="right" isPanelOpen={true}>
        <ReaderFeaturesBar />
      </SelectionCorner>
      <ReaderSidePanel>
        <CharactersPanel />
      </ReaderSidePanel>
    </aside>
  );
};

export default ReaderFeaturesPanelContainer;
