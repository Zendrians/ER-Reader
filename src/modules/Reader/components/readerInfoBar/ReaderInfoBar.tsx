import React, { useContext } from "react";
import PanelIcon from "../../../Shared/components/panelIcon/PanelIcon";
import NoteBookIcon from "../../../../assets/reactSvg/NoteBookIcon";
import ListIcon from "../../../../assets/reactSvg/ListIcon";
import { PanelContext } from "../../context/PanelContext";

const ReaderInfoBar: React.FC = () => {
  const { updatePanel } = useContext(PanelContext);

  return (
    <React.Fragment>
      <PanelIcon
        onClick={() => {
          updatePanel({ isOpen: true, orientation: "right" });
        }}
      >
        <NoteBookIcon />
      </PanelIcon>
      <PanelIcon>
        <ListIcon />
      </PanelIcon>
    </React.Fragment>
  );
};

export default ReaderInfoBar;
