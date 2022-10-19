import React, { useCallback, useMemo, FC } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";

import Element from "./Atoms/Element";
import Leaf from "./Atoms/Leaf";
import BlockButton from "./Atoms/BlockButton";
import MarkButton from "./Atoms/MarkButton";
import Toolbar from "./Atoms/Toolbar";

interface Props {
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  initialValue?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

const defaultValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];
const TextEditor: FC<Props> = ({ placeholder, onChange, initialValue = null }) => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withReact(createEditor()), []);
  const initialValueParse = useMemo(() => {
    try {
      return initialValue ? JSON.parse(initialValue) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }, []);

  return (
    <Slate
      editor={editor}
      value={initialValueParse}
      onChange={(value) => {
        const isAstChange = editor.operations.some((op) => op.type !== "set_selection");
        if (isAstChange && onChange) {
          // Save the value to Local Storage.
          const content = JSON.stringify(value);
          console.log("Content change", content);
          onChange(content);
        }
      }}
    >
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        <BlockButton format="left" icon="format_align_left" />
        <BlockButton format="center" icon="format_align_center" />
        <BlockButton format="right" icon="format_align_right" />
        <BlockButton format="justify" icon="format_align_justify" />
      </Toolbar>
      <Editable
        placeholder={placeholder}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        spellCheck
        autoFocus
        // onKeyDown={(event) => {
        //   for (const hotkey in HOTKEYS) {
        //     if (isHotkey(hotkey, event as any)) {
        //       event.preventDefault();
        //       const mark = HOTKEYS[hotkey];
        //       toggleMark(editor, mark);
        //     }
        //   }
        // }}
      />
    </Slate>
  );
};

export default TextEditor;
