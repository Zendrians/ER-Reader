import React, { useRef } from "react";

import "./Editor.css";

const Editor: React.FC = () => {
  const editorRef = useRef(document.createElement("div"));
  document.execCommand('defaultParagraphSeparator', false, 'p');

  const handleBlur = () => {
    if (editorRef === null) return;
    editorRef.current.firstChild
    console.log(editorRef.current.innerHTML);
  };

  return (
    <div
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
      ref={editorRef}
      contentEditable
      className="editor"
    >
      Insert text here
    </div>
  );
};

export default Editor;
