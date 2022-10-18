import React, { useMemo } from "react";
import { useSlate } from "slate-react";
import { Editor, Transforms, Element as SlateElement } from "slate";

import { LIST_TYPES, TEXT_ALIGN_TYPES } from "../const/const";

import Icon from "./Icon";

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
    }),
  );

  return !!match;
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type");
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n: any) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n as any) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    } as any;
  } else {
    newProperties = {
      // eslint-disable-next-line no-nested-ternary
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    } as any;
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  const active = useMemo(
    () => isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"),
    [format],
  );
  return (
    <button
      type="button"
      style={{
        cursor: "pointer",
        color: active ? "white" : "#aaa",
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </button>
  );
};

export default BlockButton;
