// components/CustomCodeEditor.tsx
import React from "react";
import Link from "next/link";
import ReactCodeMirror, {
  EditorState,
  EditorView,
} from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import customKeymap from "@/app/utils/code-editor/keymap";
import { editorTheme } from "@/app/utils/editortheme";

const CustomCodeEditor: React.FC = () => {
  const codesnippet = `const button = document.querySelector('#sendBtn');`;
  const extensions = [
    EditorView.editable.of(false),
    EditorState.readOnly.of(true),
    javascript({ typescript: true }),
    customKeymap,
  ];

  return (
    <ReactCodeMirror
      editable={false}
      extensions={extensions}
      value={codesnippet}
      height="200px"
      theme={editorTheme}
      onChange={(value, viewUpdate) => {
        console.log("value:", value);
      }}
    />
  );
};

export default CustomCodeEditor;
