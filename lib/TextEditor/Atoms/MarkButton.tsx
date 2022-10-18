import React, { useMemo } from "react";
import { useSlate } from "slate-react";
import { Editor } from "slate";

import Icon from "./Icon";

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  const active = useMemo(() => isMarkActive(editor, format), [format]);
  return (
    <button
      type="button"
      style={{
        cursor: "pointer",
        color: active ? "white" : "#aaa",
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </button>
  );
};

export default MarkButton;
