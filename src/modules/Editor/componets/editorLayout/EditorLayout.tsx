import React from "react";
import NavBar from "../../../Shared/components/navBar/NavBar";
import EditorMainArea from "../editorMainArea/EditorMainArea";

import './EditorLayout.css'

const EditorLayout: React.FC = () => {
  return (
    <main className="editorLayout">
      <NavBar />
      <EditorMainArea />
    </main>
  );
};

export default EditorLayout;
