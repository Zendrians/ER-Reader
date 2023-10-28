import React, { useContext } from "react";
import ReaderSidePanel from "../readerSidePanel/ReaderSidePanel";
import "./ReaderFeaturesPanelContainer.css";
import SelectionCorner from "../../../Shared/components/rightSidePanel/SelectionCorner";
import ReaderFeaturesBar from "../readerFeaturesBar/ReaderFeaturesBar";
import CharactersPanel from "../charactersPanel/CharactersPanel";
import { PanelContext } from "../../context/PanelContext";
import { ReaderTabs } from "../../enums/RedarTabs";
import SoundPanel from "../soundPanel/SoundPanel";

const ReaderFeaturesPanelContainer: React.FC = () => {
  const { currentRightTab } = useContext(PanelContext);

  const checkOpenTab = () => {
    switch (currentRightTab) {
      case ReaderTabs.Characters:
        return <CharactersPanel />;
      case ReaderTabs.Sound:
        return <SoundPanel />;
      default:
        return <div>No Tab selected</div>;
    }
  };

  return (
    <aside className="readerInfoPanelContainer">
      <SelectionCorner orientation="right" isPanelOpen={true}>
        <ReaderFeaturesBar />
      </SelectionCorner>
      <ReaderSidePanel>{checkOpenTab()}</ReaderSidePanel>
    </aside>
  );
};

export default ReaderFeaturesPanelContainer;
