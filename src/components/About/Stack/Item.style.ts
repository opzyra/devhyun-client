import styled from "styled-components";

export const StyledItem = styled.li`
  width: 50%;
  display: inline-block;
  margin: 0 0 28px 0;
  height: 48px;

  img {
    float: left;
    margin: 0 12px 0 0;
  }

  div {
    display: block;
    font-size: 14px;

    h3 {
      font-size: 16px;
      font-weight: 500;

      span {
        font-size: 12px;
        margin: 0 0 0 8px;
        display: inline-block;
        font-weight: 500;
      }

      span.prod {
        color: #004abf;
      }
    }
    p {
      font-size: 14px;
    }
  }
`;
