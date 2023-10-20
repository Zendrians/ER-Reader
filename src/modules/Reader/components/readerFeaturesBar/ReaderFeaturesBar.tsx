import React from "react";
import PanelIcon from "../../../Shared/components/panelIcon/PanelIcon";
import CharacterIcon from "../../../../assets/reactSvg/CharacterIcon";
import LocationIcon from "../../../../assets/reactSvg/LocationIcon";
import MusicIcon from "../../../../assets/reactSvg/MusicIcon";
import OpenBookIcon from "../../../../assets/reactSvg/OpenBookIcon";
import ChatBubbleIcon from "../../../../assets/reactSvg/ChatBubbleIcon";
import BugIcon from "../../../../assets/reactSvg/BugIcon";

const ReaderFeaturesBar: React.FC = () => {
  return (
    <React.Fragment>
      <PanelIcon>
        <CharacterIcon />
      </PanelIcon>
      <PanelIcon>
        <LocationIcon />
      </PanelIcon>
      <PanelIcon>
        <MusicIcon />
      </PanelIcon>
      <PanelIcon>
        <OpenBookIcon />
      </PanelIcon>
      <PanelIcon>
        <ChatBubbleIcon />
      </PanelIcon>
      <PanelIcon>
        <BugIcon />
      </PanelIcon>
    </React.Fragment>
  );
};

export default ReaderFeaturesBar;
