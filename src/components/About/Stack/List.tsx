import {
  StyledList,
  Category,
  Label,
  LabelWrapper,
  Skills,
  SkillList,
} from "./List.style";

import Item from "./Item";

import frontendLabel from "@/assets/images/frontend.png";
import backendLabel from "@/assets/images/backend.png";
import devopsLabel from "@/assets/images/devops.png";

import { frontend, backend, devops } from "@/data/skill";

const List: React.FC = () => {
  return (
    <StyledList>
      <Category>
        <Label>
          <LabelWrapper>
            <img src={frontendLabel} alt="frontend" />
            <div>
              <h3>Frontend</h3>
              <p>퍼블리싱 &amp; SPA 프레임워크</p>
            </div>
          </LabelWrapper>
        </Label>
        <Skills>
          <SkillList>
            {frontend.map(({ img, name, level, desc }) => (
              <Item src={img} name={name} level={level} desc={desc} />
            ))}
          </SkillList>
        </Skills>
      </Category>
      <Category>
        <Label>
          <LabelWrapper>
            <img src={backendLabel} alt="backend" />
            <div>
              <h3>backend</h3>
              <p>MVC웹 개발 &amp; RestAPI 서버 구축</p>
            </div>
          </LabelWrapper>
        </Label>
        <Skills>
          <SkillList>
            {backend.map(({ img, name, level, desc }) => (
              <Item src={img} name={name} level={level} desc={desc} />
            ))}
          </SkillList>
        </Skills>
      </Category>
      <Category>
        <Label>
          <LabelWrapper>
            <img src={devopsLabel} alt="devops" />
            <div>
              <h3>Devops</h3>
              <p>형상관리와 유지보수 &amp; 서버 구축</p>
            </div>
          </LabelWrapper>
        </Label>
        <Skills>
          <SkillList>
            {devops.map(({ img, name, level, desc }) => (
              <Item src={img} name={name} level={level} desc={desc} />
            ))}
          </SkillList>
        </Skills>
      </Category>
    </StyledList>
  );
};

export default List;
