import React from "react";
import PanelIcon from "../panelIcon/PanelIcon";
import CharacterIcon from "../../../../assets/reactSvg/CharacterIcon";
import LocationIcon from "../../../../assets/reactSvg/LocationIcon";
import MusicIcon from "../../../../assets/reactSvg/MusicIcon";
import OpenBookIcon from "../../../../assets/reactSvg/OpenBookIcon";
import ChatBubbleIcon from "../../../../assets/reactSvg/ChatBubbleIcon";

import "./SelectionCorner.css";

// interface IRightSidePanel {
//   children: Array<ReactNode>;
// }

const SelectionCorner: React.FC = () => {
  return (
    <div className="rightSidePanel">
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
    </div>
  );
};

export default SelectionCorner;
