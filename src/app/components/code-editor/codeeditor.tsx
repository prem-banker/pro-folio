// components/CustomCodeEditor.tsx
import customKeymap from "@/app/utils/code-editor/keymap";
import { editorTheme } from "@/app/utils/editortheme";
import { javascript } from "@codemirror/lang-javascript";
import ReactCodeMirror, {
  EditorState,
  EditorView,
} from "@uiw/react-codemirror";
import React from "react";

interface EditorProps {
  code: string;
}

const CustomCodeEditor: React.FC<EditorProps> = ({ code }) => {
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
      value={code}
      theme={editorTheme}
    />
  );
};

export default CustomCodeEditor;
