import styled from "styled-components";

import arrowBack from "@/assets/images/arrow-back.png";

export const StyledBackLink = styled.div`
  padding: 40px 0px 80px 0;
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;

  a {
    font-size: 16px;

    display: inline-block;
    position: relative;
    padding: 0 0 0 24px;
    cursor: pointer;

    &::before {
      display: inline-block;
      overflow: hidden;
      background: url(${arrowBack}) no-repeat;
      text-indent: 9999px;
      white-space: nowrap;
      position: absolute;
      top: 7px;
      left: 0;
      width: 24px;
      height: 15px;
      content: "";
    }

    &::after {
      display: block;
      width: 100%;
      height: 1px;
      background-color: #000;
      content: "";
    }
  }
`;
