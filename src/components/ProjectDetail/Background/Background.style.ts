import styled from "styled-components";

import { BackgroundProps } from "./Background";

export const StyledBackground = styled.section`
  padding: 48px 0 60px 0;
`;

export const Inner = styled.div<BackgroundProps>`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  height: 360px;
  text-indent: -9999px;

  background: url(${(props) => props.mock}) no-repeat;
  background-size: cover;
`;
