import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
  background: #fff;
  border-bottom: 1px solid #eee;
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 81px;
  position: relative;
`;

export const Brand = styled.h1`
  float: left;
  line-height: 81px;
  height: 81px;

  a {
    display: inline-block;
  }

  img {
    width: 200px;
    display: block;
    margin-top: 12px;
    margin-left: -18px;
  }
`;

export const Nav = styled.nav`
  float: right;

  ul {
    font-size: 0px;

    li {
      display: inline-block;

      a {
        display: block;
        line-height: 81px;
        padding: 0 20px;
        font-size: 16px;

        &:hover {
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }
  }
`;
