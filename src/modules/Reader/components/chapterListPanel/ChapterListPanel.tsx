import React from "react";
import PanelBookCover from "../panelBookCover/PanelBookCover";
import "./ChapterListPanel.css";
import ContentBox from "../../../Shared/components/contentBox/ContentBox";
import ChapterSelectButton from "../../../Shared/components/chapterSelectButton/chapterSelectButton";
import ChapterTypes from "../../../Shared/enums/ChapterTypes";

const ChapterListPanel: React.FC = () => {
  return (
    <div className="chapterListPanel">
      <PanelBookCover />
      <div className="chapterListPanel__contentContainer">
        <ContentBox>
          <div className="chapterListPanel__chaptersContainer">
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Prologue}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
             <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
             <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
             <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Interlude}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Chapter}
            />
            <ChapterSelectButton
              chapterName="This one chapter name"
              chapterNumber={1}
              chapterType={ChapterTypes.Epilogue}
            />
          </div>
        </ContentBox>
      </div>
    </div>
  );
};

export default ChapterListPanel;
