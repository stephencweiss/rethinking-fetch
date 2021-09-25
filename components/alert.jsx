import * as React from "react";
import styled from "styled-components";

export const AlertStyle = styled.div`
  width: 100%;
  background: red;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  padding: 16px;
  border-radius: 8px;
`;

export function Alert({ children }) {
  return <AlertStyle>{children}</AlertStyle>;
}
