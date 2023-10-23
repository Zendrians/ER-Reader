import React, { useContext } from "react";
import ReaderSidePanel from "../readerSidePanel/ReaderSidePanel";
import "./ReaderInfoPanelContainer.css";
import ReaderInfoBar from "../readerInfoBar/ReaderInfoBar";
import SelectionCorner from "../../../Shared/components/rightSidePanel/SelectionCorner";
import BookInfoPanel from "../bookInfoPanel/BookInfoPanel";
import ChapterListPanel from "../chapterListPanel/ChapterListPanel";
import { PanelContext } from "../../context/PanelContext";
import { ReaderTabs } from "../../enums/RedarTabs";

const ReaderInfoPanelContainer: React.FC = () => {
  const { currentLeftTab } = useContext(PanelContext);

  const checkOpenTab = () => {
    switch (currentLeftTab) {
      case ReaderTabs.BookData:
        return <BookInfoPanel />;
      case ReaderTabs.ChapterList:
        return <ChapterListPanel />;
      default:
        return <div>No Tab selected</div>;
    }
  };

  return (
    <aside className="readerInfoPanelContainer">
      <ReaderSidePanel>
        {checkOpenTab()}
      </ReaderSidePanel>
      <SelectionCorner orientation="left" isPanelOpen={true}>
        <ReaderInfoBar />
      </SelectionCorner>
    </aside>
  );
};

export default ReaderInfoPanelContainer;
