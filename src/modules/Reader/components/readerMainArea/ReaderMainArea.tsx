import React, { useContext } from "react";
import "./ReaderMainArea.css";
import SelectionCorner from "../../../Shared/components/rightSidePanel/SelectionCorner";
import ReaderFeaturesBar from "../readerFeaturesBar/ReaderFeaturesBar";
import ReaderInfoBar from "../readerInfoBar/ReaderInfoBar";
import PanelModal from "../../../Shared/components/modal/PanelModal";
import ReaderInfoPanelContainer from "../ReaderInfoPanelContainer/ReaderInfoPanelContainer";
import { PanelContext } from "../../context/PanelContext";
import ReaderFeaturesPanelContainer from "../readerFeaturesPanelContainer/ReaderFeaturesPanelContainer";
import ReadingZone from "../readingZone/ReadingZone";

const ReaderMainArea: React.FC = () => {
  const { isLeftPanelOpen, isRightPanelOpen } = useContext(PanelContext);

  return (
    <React.Fragment>
      <section id="readerMainArea" className="readerMainArea">
        <div id="left-container" className="readerMainArea__sidePanelContainer">
          {!isLeftPanelOpen && (
            <SelectionCorner orientation="left" isPanelOpen={isLeftPanelOpen}>
              <ReaderInfoBar />
            </SelectionCorner>
          )}
        </div>
        <ReadingZone />
        <div
          id="right-container"
          className="readerMainArea__sidePanelContainer"
        >
          {!isRightPanelOpen && (
            <SelectionCorner orientation="right" isPanelOpen={isRightPanelOpen}>
              <ReaderFeaturesBar />
            </SelectionCorner>
          )}
        </div>
      </section>
      <PanelModal isOpen={isLeftPanelOpen} position="left">
        <ReaderInfoPanelContainer />
      </PanelModal>
      <PanelModal isOpen={isRightPanelOpen} position="right">
        <ReaderFeaturesPanelContainer />
      </PanelModal>
    </React.Fragment>
  );
};

export default ReaderMainArea;
