import styled from "styled-components";

export const StyledList = styled.div`
  padding-top: 60px;
`;

export const Category = styled.div`
  font-size: 0px;
  display: flex;

  & + & {
    padding-top: 40px;
  }
`;

export const Label = styled.div`
  width: 36%;
  font-size: initial;
`;

export const LabelWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  img {
    margin: 0px 24px 0 0;
    opacity: 0.7;
    width: 84px;
  }

  p {
    font-size: 16px;
  }
`;

export const Skills = styled.div`
  padding: 0 0 0 32px;
  width: 70%;
`;

export const SkillList = styled.ul`
  font-size: 0px;
`;
