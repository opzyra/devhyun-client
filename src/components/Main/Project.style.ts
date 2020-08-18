import styled from "styled-components";

import company from "@/assets/images/company.png";
import portfolio from "@/assets/images/portfolio.png";

export const StyledProject = styled.section`
  background: #fafafa;
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  text-align: center;
  padding: 32px 0px;
`;

export const ProjectList = styled.ul`
  font-size: 0;
`;

export const ProjectItem = styled.li`
  display: inline-block;
  width: 48%;
  text-align: left;
  font-size: initial;
  margin: 0 10px;

  a {
    display: block;
    padding: 25px;
    border: 1px solid #eeeeee;
    background-size: 18%;
  }

  &:nth-child(1) a {
    background: url(${company}) no-repeat 90% center #fff;
  }

  &:nth-child(2) a {
    background: url(${portfolio}) no-repeat 90% center #fff;
  }

  h3 {
    font-weight: 500;
    font-size: 20px;
    padding: 0 0 10px;
    color: #004abf;
  }

  p {
    font-size: 14px;
    line-height: 24px;
  }

  div {
    margin: 20px 0 0;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 4px;
  }
`;
