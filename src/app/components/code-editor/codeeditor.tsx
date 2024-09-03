import customKeymap from "@/app/utils/code-editor/keymap";
import { javascript } from "@codemirror/lang-javascript";
import "./codeeditor.css";
import ReactCodeMirror, {
  EditorState,
  EditorView,
} from "@uiw/react-codemirror";
import React from "react";
import { editorTheme } from "@/app/utils/code-editor/editortheme";

interface EditorProps {
  code: string;
  fontSize?: string; // Optional fontSize prop as a string
}

const CustomCodeEditor: React.FC<EditorProps> = ({ code, fontSize }) => {
  const extensions = [
    EditorView.editable.of(false),
    EditorState.readOnly.of(true),
    javascript({ typescript: true }),
    customKeymap,
  ];

  return (
    <div
      className={`h-full ${fontSize ? "" : "editor-font"}`}
      style={fontSize ? { fontSize } : {}}
    >
      <ReactCodeMirror
        editable={false}
        extensions={extensions}
        value={code}
        theme={editorTheme}
      />
    </div>
  );
};

export default CustomCodeEditor;
