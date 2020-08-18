import styled, { keyframes } from "styled-components";

import banner from "@/assets/images/banner.png";
import symbol from "@/assets/images/symbol.png";
import code from "@/assets/images/code.png";

const codeAnimate = keyframes`
  0% {
    top: 55px;
  }
  100% {
    top: 80px;
  }
`;

export const StyledBanner = styled.section`
  background: url(${banner}) no-repeat;
  height: 450px;
  background-size: cover;
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const Catchphrase = styled.div`
  padding: 130px 0 0 0;
  line-height: 80px;

  h2 {
    font-size: 36px;
    color: #004abf;
    font-weight: 500;
  }

  p {
    line-height: 30px;
    font-size: 20px;
    color: #666;
    font-weight: 500;
  }
`;

export const Symbol = styled.div`
  position: absolute;
  background: url(${symbol}) no-repeat;
  top: 130px;
  right: 85px;
  width: 399px;
  height: 287px;
`;

export const Code = styled.div`
  position: absolute;
  top: 50px;
  right: 200px;
  width: 80px;
  height: 50px;
  background: url(${code}) no-repeat;
  background-size: contain;
  animation: ${codeAnimate} 0.8s 1s infinite linear alternate;
`;
