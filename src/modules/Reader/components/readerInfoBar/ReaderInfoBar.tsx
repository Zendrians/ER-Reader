import React, { useContext } from "react";
import PanelIcon from "../../../Shared/components/panelIcon/PanelIcon";
import NoteBookIcon from "../../../../assets/reactSvg/NoteBookIcon";
import ListIcon from "../../../../assets/reactSvg/ListIcon";
import { PanelContext, PanelState } from "../../context/PanelContext";
import { ReaderTabs } from "../../enums/RedarTabs";

const ReaderInfoBar: React.FC = () => {
  const { currentTab, updatePanel } = useContext(PanelContext);

  const handleIconClick = (panelOptions: PanelState) => {
    if (panelOptions.currentTab === currentTab) {
      updatePanel({ isPanelOpen: false, orientation: "right", currentTab: null });
    } else {
      updatePanel(panelOptions);
    }
  };

  return (
    <React.Fragment>
      <PanelIcon
        isSelected={currentTab === ReaderTabs.BookData}
        onClick={() => {
          handleIconClick({
            isPanelOpen: true,
            orientation: "right",
            currentTab: ReaderTabs.BookData,
          });
        }}
      >
        <NoteBookIcon />
      </PanelIcon>
      <PanelIcon
        isSelected={currentTab === ReaderTabs.ChapterList}
        onClick={() => {
          handleIconClick({
            isPanelOpen: true,
            orientation: "right",
            currentTab: ReaderTabs.ChapterList,
          });
        }}
      >
        <ListIcon />
      </PanelIcon>
    </React.Fragment>
  );
};

export default ReaderInfoBar;
