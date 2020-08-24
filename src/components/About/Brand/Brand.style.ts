import styled from "styled-components";

export const StyledBrand = styled.section`
  padding: 80px 0;
`;

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
`;

export const Logo = styled.div`
  display: flex;
  margin: 32px 0 0 0;

  .desc {
    display: flex;
    align-items: center;
  }

  .bi {
    flex: 1;
    text-align: center;
  }
`;
