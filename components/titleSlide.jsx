import * as React from "react";
// import styled from "styled-components";
import { themes } from "mdx-deck";

export const TitleSlide = ({ children }) => {
  const yellow = themes.yellow;
  return <div style={yellow}>{children}</div>;
};
