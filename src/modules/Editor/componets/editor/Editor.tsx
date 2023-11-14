import React, { useRef, useState } from "react";

import "./Editor.css";
import { parseEditorText } from "../../../../utils/editorParser";

const Editor: React.FC = () => {
  const [editorText, setEditorText] = useState("<p>Hey you</p>");
  const editorRef = useRef(document.createElement("div"));
  document.execCommand("defaultParagraphSeparator", false, "p");

  const handleBlur = () => {
    setEditorText(editorRef.current.innerHTML);
    parseEditorText(editorRef.current.innerHTML)
  };

  return (
    <div
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
      ref={editorRef}
      contentEditable
      className="editor"
      dangerouslySetInnerHTML={{ __html: editorText }}
    ></div>
  );
};

export default Editor;
