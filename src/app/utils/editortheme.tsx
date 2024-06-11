import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export const editorTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#011221",
    backgroundImage: "",
    foreground: "#c9d1d9",
    caret: "#c9d1d9",
    selection: "#003d73",
    selectionMatch: "#003d73",
    lineHighlight: "#36334280",
    gutterBackground: "#011221",
    gutterForeground: "#8a919966",
  },
  styles: [
    { tag: t.comment, color: "#8b949e" }, // Matching _highlight.tags.comment
    { tag: t.variableName, color: "#79c0ff" }, // Matching _highlight.tags.variableName
    { tag: [t.string, t.special(t.brace)], color: "#a5d6ff" }, // Matching _highlight.tags.string
    { tag: t.number, color: "#79c0ff" }, // Matching _highlight.tags.number
    { tag: t.bool, color: "#ffab70" }, // Matching _highlight.tags.bool
    { tag: t.null, color: "#79c0ff" }, // Assuming _highlight.tags.null should be same as _highlight.tags.number
    { tag: t.keyword, color: "#ff7b72" }, // Matching _highlight.tags.keyword
    { tag: t.operator, color: "#79c0ff" }, // Matching _highlight.tags.operator
    { tag: t.className, color: "#d2a8ff" }, // Matching _highlight.tags.className
    { tag: t.definition(t.typeName), color: "#ff7b72" }, // Assuming _highlight.tags.typeName
    { tag: t.typeName, color: "#ff7b72" }, // Matching _highlight.tags.typeName
    { tag: t.angleBracket, color: "#8b949e" }, // Assuming _highlight.tags.bracket
    { tag: t.tagName, color: "#7ee787" }, // Matching _highlight.tags.tagName
    { tag: t.attributeName, color: "#79c0ff" }, // Matching _highlight.tags.attributeName
  ],
});
