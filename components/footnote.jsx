import * as React from "react";
import styled from "styled-components";

export const Footnotes = styled.details`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 1rem;
  width: 100%;
  padding: 16px;
  &[open] {
    background: white;
    color: black;
  }
`;

export const Footnote = ({ children }) => (
  <Footnotes>
    <summary>Footnotes</summary>
    {children}
  </Footnotes>
);
