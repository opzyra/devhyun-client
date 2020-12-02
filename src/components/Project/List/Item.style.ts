import styled from "styled-components";

export const StyledItem = styled.li`
  position: relative;
  width: 33.3%;
  padding: 0 35px 31px 0;
  box-sizing: border-box;
  display: inline-block;

  img {
    width: 100%;
  }

  .title {
    margin: 24px 0 0;
    font-size: 16px;
  }

  /* &:hover .title {
    color: #004abf;
  } */

  .desc {
    font-size: 14px;
  }
`;
