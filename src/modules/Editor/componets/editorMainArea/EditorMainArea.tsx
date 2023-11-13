import React from "react";
import './EditorMainArea.css'
import Editor from "../editor/Editor";

const EditorMainArea: React.FC = () => {
  return (
    <div className="editorMainArea">
      <Editor />
      <div>B</div>
    </div>
  );
};

export default EditorMainArea;
