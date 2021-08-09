import * as React from "react";
import styled from "styled-components";
export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-block: auto;
`;

export function Slide({ title, children }) {
  return (
    <SlideWrapper>
      <h1>{title}</h1>
      {children}
    </SlideWrapper>
  );
}
