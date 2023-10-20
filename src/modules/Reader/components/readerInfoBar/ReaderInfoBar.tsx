import React from "react";
import PanelIcon from "../../../Shared/components/panelIcon/PanelIcon";
import NoteBookIcon from "../../../../assets/reactSvg/NoteBookIcon";
import ListIcon from "../../../../assets/reactSvg/ListIcon";

const ReaderInfoBar: React.FC = () => {
  return (
    <React.Fragment>
      <PanelIcon>
        <NoteBookIcon />
      </PanelIcon>
      <PanelIcon>
        <ListIcon />
      </PanelIcon>
    </React.Fragment>
  );
};

export default ReaderInfoBar;
