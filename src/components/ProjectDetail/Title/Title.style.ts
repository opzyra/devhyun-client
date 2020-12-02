import styled from "styled-components";

export const StyledTitle = styled.section`
  h2 {
    font-size: 28px;
  }

  .date {
    font-size: 14px;
  }

  .icon {
    position: absolute;
    top: 0px;
    right: 0px;

    img {
      width: 64px;
      cursor: pointer;
    }
  }

  .url {
    margin: 20px 0 0 0;
    clear: both;
    font-size: 14px;

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: 4px;
      }

      a {
        display: inline-block;
        color: #004abf;
      }
    }
  }
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
`;
