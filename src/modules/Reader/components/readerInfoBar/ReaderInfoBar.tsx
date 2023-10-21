import React, { Dispatch, SetStateAction } from "react";
import PanelIcon from "../../../Shared/components/panelIcon/PanelIcon";
import NoteBookIcon from "../../../../assets/reactSvg/NoteBookIcon";
import ListIcon from "../../../../assets/reactSvg/ListIcon";

interface IReaderInfoBar {
  setIsRightPanelOpen: Dispatch<SetStateAction<boolean>>
}

const ReaderInfoBar: React.FC<IReaderInfoBar> = ({setIsRightPanelOpen}) => {
  return (
    <React.Fragment>
      <PanelIcon onClick={() => {setIsRightPanelOpen(true)}}>
        <NoteBookIcon />
      </PanelIcon>
      <PanelIcon>
        <ListIcon />
      </PanelIcon>
    </React.Fragment>
  );
};

export default ReaderInfoBar;
