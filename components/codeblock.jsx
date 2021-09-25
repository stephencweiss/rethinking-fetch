import React from "react";
import { CodeSurfer } from "code-surfer";
import { nightOwl } from "@code-surfer/themes";

export const CodeBlock = ({ children, theme }) => (
  <CodeSurfer theme={theme ?? nightOwl}>{children}</CodeSurfer>
);
