import React, { useContext } from "react";
import PanelIcon from "../../../Shared/components/panelIcon/PanelIcon";
import CharacterIcon from "../../../../assets/reactSvg/CharacterIcon";
import LocationIcon from "../../../../assets/reactSvg/LocationIcon";
import MusicIcon from "../../../../assets/reactSvg/MusicIcon";
import OpenBookIcon from "../../../../assets/reactSvg/OpenBookIcon";
import ChatBubbleIcon from "../../../../assets/reactSvg/ChatBubbleIcon";
import BugIcon from "../../../../assets/reactSvg/BugIcon";
import { PanelContext, PanelState } from "../../context/PanelContext";
import { ReaderTabs } from "../../enums/RedarTabs";

const ReaderFeaturesBar: React.FC = () => {
  const { currentRightTab, updatePanel } = useContext(PanelContext);

  const handleIconClick = (panelOptions: Partial<PanelState>) => {
    if (panelOptions.currentRightTab === currentRightTab) {
      updatePanel({ isRightPanelOpen: false, currentRightTab: null });
    } else {
      updatePanel(panelOptions);
    }
  };

  return (
    <React.Fragment>
      <PanelIcon
        isSelected={currentRightTab === ReaderTabs.Characters}
        onClick={() => {
          handleIconClick({
            isRightPanelOpen: true,
            currentRightTab: ReaderTabs.Characters,
          });
        }}
      >
        <CharacterIcon />
      </PanelIcon>
      <PanelIcon
        isSelected={currentRightTab === ReaderTabs.Locations}
        onClick={() => {
          handleIconClick({
            isRightPanelOpen: true,
            currentRightTab: ReaderTabs.Locations,
          });
        }}
      >
        <LocationIcon />
      </PanelIcon>
      <PanelIcon
        isSelected={currentRightTab === ReaderTabs.Sound}
        onClick={() => {
          handleIconClick({
            isRightPanelOpen: true,
            currentRightTab: ReaderTabs.Sound,
          });
        }}
      >
        <MusicIcon />
      </PanelIcon>
      <PanelIcon
        isSelected={currentRightTab === ReaderTabs.Lore}
        onClick={() => {
          handleIconClick({
            isRightPanelOpen: true,
            currentRightTab: ReaderTabs.Lore,
          });
        }}
      >
        <OpenBookIcon />
      </PanelIcon>
      <PanelIcon
        isSelected={currentRightTab === ReaderTabs.Comments}
        onClick={() => {
          handleIconClick({
            isRightPanelOpen: true,
            currentRightTab: ReaderTabs.Comments,
          });
        }}
      >
        <ChatBubbleIcon />
      </PanelIcon>
      <PanelIcon
        isSelected={currentRightTab === ReaderTabs.FeedBack}
        onClick={() => {
          handleIconClick({
            isRightPanelOpen: true,
            currentRightTab: ReaderTabs.FeedBack,
          });
        }}
      >
        <BugIcon />
      </PanelIcon>
    </React.Fragment>
  );
};

export default ReaderFeaturesBar;
