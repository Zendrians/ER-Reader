import React, { useContext } from "react";
import PanelIcon from "../../../Shared/components/panelIcon/PanelIcon";
import NoteBookIcon from "../../../../assets/reactSvg/NoteBookIcon";
import ListIcon from "../../../../assets/reactSvg/ListIcon";
import { PanelContext, PanelState } from "../../context/PanelContext";
import { ReaderTabs } from "../../enums/RedarTabs";

const ReaderInfoBar: React.FC = () => {
  const { currentLeftTab, updatePanel } = useContext(PanelContext);

  const handleIconClick = (panelOptions: Partial<PanelState>) => {
    if (panelOptions.currentLeftTab === currentLeftTab) {
      updatePanel({ isLeftPanelOpen: false, currentLeftTab: null });
    } else {
      updatePanel(panelOptions);
    }
  };

  return (
    <React.Fragment>
      <PanelIcon
        isSelected={currentLeftTab === ReaderTabs.BookData}
        onClick={() => {
          handleIconClick({
            isLeftPanelOpen: true,
            currentLeftTab: ReaderTabs.BookData,
          });
        }}
      >
        <NoteBookIcon />
      </PanelIcon>
      <PanelIcon
        isSelected={currentLeftTab === ReaderTabs.ChapterList}
        onClick={() => {
          handleIconClick({
            isLeftPanelOpen: true,
            currentLeftTab: ReaderTabs.ChapterList,
          });
        }}
      >
        <ListIcon />
      </PanelIcon>
    </React.Fragment>
  );
};

export default ReaderInfoBar;
