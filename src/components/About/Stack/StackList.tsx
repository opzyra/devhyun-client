import {
  StyledStackList,
  Category,
  Label,
  LabelWrapper,
  Skills,
  SkillList,
  SkillItem,
} from "./StackList.style";

import frontend from "@/assets/images/frontend.png";
import backend from "@/assets/images/backend.png";
import devops from "@/assets/images/devops.png";

import skillHtml from "@/assets/images/skill-html.png";
import skillCss from "@/assets/images/skill-css.png";
import skillJquery from "@/assets/images/skill-jquery.png";
import skillGraphql from "@/assets/images/skill-graphql.png";
import skillReact from "@/assets/images/skill-react.png";
import skillNext from "@/assets/images/skill-next.png";

import skillSpringboot from "@/assets/images/skill-springboot.png";
import skillNodejs from "@/assets/images/skill-nodejs.png";
import skillTypescript from "@/assets/images/skill-typescript.png";
import skillMysql from "@/assets/images/skill-mysql.png";
import skillTypeorm from "@/assets/images/skill-typeorm.png";

import skillAws from "@/assets/images/skill-aws.png";
import skillLinux from "@/assets/images/skill-linux.png";
import skillJunit from "@/assets/images/skill-junit.png";
import skillSvn from "@/assets/images/skill-svn.png";
import skillGit from "@/assets/images/skill-git.png";

const StackList: React.FC = () => {
  return (
    <StyledStackList>
      <Category>
        <Label>
          <LabelWrapper>
            <img src={frontend} alt="frontend" />
            <div>
              <h3>Frontend</h3>
              <p>퍼블리싱 &amp; SPA 프레임워크</p>
            </div>
          </LabelWrapper>
        </Label>
        <Skills>
          <SkillList>
            <SkillItem>
              <img src={skillHtml} alt="html" />
              <div>
                <h3>
                  HTML<span className="prod">실무</span>
                </h3>
                <p>태그를 활용한 마크업</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillCss} alt="css" />
              <div>
                <h3>
                  CSS<span className="prod">실무</span>
                </h3>
                <p>PSD 화면 퍼블리싱</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillJquery} alt="jQuery" />
              <div>
                <h3>
                  jQuery<span className="prod">실무</span>
                </h3>
                <p>라이브러리 활용 및 커스터마이징</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillReact} alt="react" />
              <div>
                <h3>
                  React<span className="prod">실무</span>
                </h3>
                <p>Hook·Redux·StyledComponent 활용</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillNext} alt="nextjs" />
              <div>
                <h3>
                  NextJS<span className="prod">실무</span>
                </h3>
                <p>SSR이 적용된 React SPA 개발</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillGraphql} alt="graphql" />
              <div>
                <h3>
                  Graphql<span className="prod">실무</span>
                </h3>
                <p>Apollo를 기반으로한 프로젝트 설계</p>
              </div>
            </SkillItem>
          </SkillList>
        </Skills>
      </Category>
      <Category>
        <Label>
          <LabelWrapper>
            <img src={backend} alt="backend" />
            <div>
              <h3>backend</h3>
              <p>MVC웹 개발 &amp; RestAPI 서버 구축</p>
            </div>
          </LabelWrapper>
        </Label>
        <Skills>
          <SkillList>
            <SkillItem>
              <img src={skillNodejs} alt="nodejs" />
              <div>
                <h3>
                  NodeJS<span className="prod">실무</span>
                </h3>
                <p>Express기반의 REST API 구축</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillTypescript} alt="typescript" />
              <div>
                <h3>
                  TypeScript<span className="prod">실무</span>
                </h3>
                <p>타입을 활용한 NodeJS·React 개발</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillSpringboot} alt="springboot" />
              <div>
                <h3>
                  SpringBoot<span className="prod">실무</span>
                </h3>
                <p>기본 환경 셋팅 및 라이브러리를 활용한 웹 개발</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillMysql} alt="mysql" />
              <div>
                <h3>
                  MySQL<span className="prod">실무</span>
                </h3>
                <p>JOIN, INDEX에 대한 이해를 바탕으로 SQL 작성</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillTypeorm} alt="typeorm" />
              <div>
                <h3>
                  Typeorm<span className="prod">실무</span>
                </h3>
                <p>ORM 구조에 따른 데이터 베이스 설계</p>
              </div>
            </SkillItem>
          </SkillList>
        </Skills>
      </Category>
      <Category>
        <Label>
          <LabelWrapper>
            <img src={devops} alt="devops" />
            <div>
              <h3>Devops</h3>
              <p>형상관리와 유지보수 &amp; 서버 구축</p>
            </div>
          </LabelWrapper>
        </Label>
        <Skills>
          <SkillList>
            <SkillItem>
              <img src={skillAws} alt="aws" />
              <div>
                <h3>
                  AWS<span className="prod">실무</span>
                </h3>
                <p>EC2 서버 구축 및 운영</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillLinux} alt="linux" />
              <div>
                <h3>
                  Linux<span className="prod">실무</span>
                </h3>
                <p>기본 명령어 숙지 및 서버 환경 설정</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillJunit} alt="junit" />
              <div>
                <h3>
                  JUnit<span className="prod">실무</span>
                </h3>
                <p>테스트 케이스 및 테스트 코드 작성</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillSvn} alt="svn" />
              <div>
                <h3>
                  SVN<span className="prod">실무</span>
                </h3>
                <p>프로젝트를 진행하면서 형상관리 툴 경험</p>
              </div>
            </SkillItem>
            <SkillItem>
              <img src={skillGit} alt="git" />
              <div>
                <h3>
                  Git<span className="prod">실무</span>
                </h3>
                <p>기본적인 사용과 브랜치 활용</p>
              </div>
            </SkillItem>
          </SkillList>
        </Skills>
      </Category>
    </StyledStackList>
  );
};

export default StackList;
