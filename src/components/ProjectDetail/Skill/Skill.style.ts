import styled from "styled-components";

export const StyledSkill = styled.section``;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;

  h2 {
    font-size: 24px;
    margin: 0 0 16px 0;
  }

  p {
    font-size: 16px;
  }

  a {
    font-size: 14px;
    display: flex;
    align-items: center;
    border-radius: 60px;
    height: 36px;
    padding: 0 24px;
    line-height: 36px;
    border: 1px solid hsla(0, 0%, 59.2%, 0.24);
    background-color: #fff;
    position: absolute;
    top: 50px;
    right: 50px;
  }

  svg {
    margin-left: 2px;
    margin-top: 2px;
  }
`;
