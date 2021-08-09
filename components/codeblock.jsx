import React from "react";
// import { UnControlled as CodeMirror } from "react-codemirror2";
import { CodeSurfer } from "code-surfer";
import { nightOwl } from "@code-surfer/themes";

export const CodeBlock = ({ children, theme }) => (
  <CodeSurfer theme={theme ?? nightOwl}>{children}</CodeSurfer>
);
