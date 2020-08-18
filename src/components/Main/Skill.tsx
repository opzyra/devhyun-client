import { StyledSkill, Inner, SkillList, SkillItem } from "./Skill.style";

import frontend from "@/assets/images/frontend.png";
import backend from "@/assets/images/backend.png";
import devops from "@/assets/images/devops.png";

export const Skill: React.FC = () => {
  return (
    <StyledSkill>
      <Inner>
        <h2>Skills</h2>
        <p>
          웹 개발 파트별로 정리한 간략한 기술 스택입니다.
          <br />
          분야별 기술에 대하여 더 자세한 내용은 소개 페이지에서 확인 하실 수
          있습니다.
        </p>
        <SkillList>
          <SkillItem>
            <div>
              <img src={frontend} alt="frontend" />
              <h3>Frontend</h3>
            </div>
            <p>
              HTML·CSS·JQuery 웹 퍼블리싱
              <br />
              React·NextJS SPA 개발
            </p>
          </SkillItem>
          <SkillItem>
            <div>
              <img src={backend} alt="backend" />
              <h3>Backend</h3>
            </div>
            <p>
              Express·Typescript API 개발
              <br />
              MySQL DB 스키마 설계
            </p>
          </SkillItem>
          <SkillItem>
            <div>
              <img src={devops} alt="devops" />
              <h3>Devops</h3>
            </div>
            <p>
              Linux·AWS 서버 구축
              <br />
              Git 버전관리
            </p>
          </SkillItem>
        </SkillList>
      </Inner>
    </StyledSkill>
  );
};
