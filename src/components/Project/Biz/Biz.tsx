import { StyledBiz, Inner } from "./Biz.style";
import List from "../List";

import { bizProject } from "@/data/project";

const Biz: React.FC = () => {
  return (
    <StyledBiz>
      <Inner>
        <h2>기업 프로젝트</h2>
        <p>개발 의뢰를 받아 수행한 프로젝트 입니다.</p>
        <p>일부 프로젝트는 운영되고 있습니다.</p>
        <List items={bizProject} />
      </Inner>
    </StyledBiz>
  );
};

export default Biz;
