import * as React from "react";
import styled from "styled-components";
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: auto;
  & li {
    margin-block-end: 1rem;
  }
`;

export const Frame = styled.div`
  margin: 10px;
  height: 100%;
  width: 60vw;
  position: relative;
`;

export function Slide({ title, children }) {
  return (
    <Frame>
      <h1>{title}</h1>
      <Content>{children}</Content>
    </Frame>
  );
}
