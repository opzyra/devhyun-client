import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: #39424c;
  font-size: 14px;
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 40px 0px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 20px 0;
  padding: 0 0 12px 0;
  border-bottom: 1px solid #485561;
  color: #b2bbc3;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  color: #b2bbc3;
  line-height: 18px;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin: 0;
  line-height: 22px;

  span {
    &::after {
      content: " |";
      display: inline-block;
      padding: 0 0 0 10px;
      color: #485561;
    }

    &:nth-child(4)::after {
      display: none;
    }

    display: inline;
    margin: 0 10px 0 0;
    color: #647586;
    font-size: 12px;
  }

  strong {
    color: #b2bbc3;
    font-weight: 300;
  }
`;

export const Brand = styled.div`
  span {
    &::after {
      content: "|";
      margin: 0 0 0 24px;
      color: #485561;
    }

    margin: 0 24px 0 0;
  }
`;

export const Policy = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;

  a {
    line-height: 22px;
    font-weight: 500;
    letter-spacing: -0.5px;
    color: inherit;
    margin: 0 24px 0 0;
  }
`;

export const Sns = styled.div`
  display: flex;

  a {
    & + a {
      margin: 0 0 0 4px;
    }

    &:hover {
      img {
        opacity: 1;
      }
    }

    img {
      width: 28px;
      opacity: 0.6;
    }
  }
`;
