import React from "react";
import ChapterTypes from "../../enums/ChapterTypes";
import "./chapterSelectButton.css";

interface IChapterSelectButton {
  chapterType: ChapterTypes;
  chapterName: string;
  chapterNumber: number;
}

const ChapterSelectButton: React.FC<IChapterSelectButton> = ({
  chapterType,
  chapterName,
  chapterNumber,
}) => {
  return (
    <button className="chapterSelectButton">
      <h4>{`${chapterType.toString()} - ${chapterNumber}`}</h4>
      <h3 className="chapterSelectButton__chapterName">
        <em>{chapterName}</em>
      </h3>
    </button>
  );
};

export default ChapterSelectButton;
