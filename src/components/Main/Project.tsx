import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import {
  StyledProject,
  Inner,
  ProjectList,
  ProjectItem,
} from "./Project.style";

export const Project: React.FC = () => {
  return (
    <StyledProject>
      <Inner>
        <ProjectList>
          <ProjectItem>
            <Link href="/project?scroll=company">
              <a>
                <h3>기업 프로젝트</h3>
                <p>기업에서 진행한 프로젝트 입니다.</p>
                <p>애플리케이션 개발이 완료되어 현재 운영되고 있습니다.</p>
                <div>
                  <span>상세보기</span>
                  <Icon path={mdiArrowRight} size={0.5} />
                </div>
              </a>
            </Link>
          </ProjectItem>
          <ProjectItem>
            <Link href="/project?scroll=portfolio">
              <a>
                <h3>개인 프로젝트</h3>
                <p>다양한 기술을 습득하며 개발한 포트폴리오 입니다.</p>
                <p>학습용, 간단한 서비스 등의 개발 활동 입니다.</p>
                <div>
                  <span>상세보기</span>
                  <Icon path={mdiArrowRight} size={0.5} />
                </div>
              </a>
            </Link>
          </ProjectItem>
        </ProjectList>
      </Inner>
    </StyledProject>
  );
};
