import styled from "styled-components";

export const StyledSkill = styled.section``;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  text-align: center;
  padding: 80px 0px;

  h2 {
    font-size: 24px;
    color: #004abf;
    padding: 0 0 16px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    padding: 0px 0px 90px 0px;
  }
`;

export const SkillList = styled.ul`
  font-size: 0;
`;

export const SkillItem = styled.li`
  display: inline-block;
  width: 33.3%;
  padding: 0 15px;
  box-sizing: border-box;

  img {
    width: 64px;
  }

  h3 {
    font-size: initial;
    padding: 12px 0px 16px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    padding: 0px;
  }
`;
