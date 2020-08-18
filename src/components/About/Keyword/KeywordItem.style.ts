import styled from "styled-components";

export const StyledKeywordItem = styled.li`
  display: inline-block;
  text-align: center;
  background: #f2f2f2;
  padding: 20px;
  width: 148px;
  border-radius: 50%;
  margin: 0 0 0 72px;

  &:first-child {
    margin: 0px;
  }

  img {
    width: 64px;
    opacity: 0.9;
  }

  p {
    font-size: 14px;
    margin: 2px 0 0 0;
  }
`;
