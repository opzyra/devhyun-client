import { IComponentProps } from "@/types/common";

import KeywordItem from "./KeywordItem";

import { StyledKeyword, Inner, KeywordList } from "./Keyword.style";

import web from "@/assets/images/web.png";
import language from "@/assets/images/language.png";
import flow from "@/assets/images/flow.png";
import root from "@/assets/images/root.png";
import trust from "@/assets/images/trust.png";

const Keyword: React.FC<IComponentProps> = ({ isMobile }) => {
  return (
    <StyledKeyword>
      <Inner>
        <KeywordList>
          <KeywordItem title="웹개발자" img={web} isMobile={isMobile}>
            <p>웹개발자</p>
            <p>김현호</p>
          </KeywordItem>
          <KeywordItem title="자바스크립트" img={language} isMobile={isMobile}>
            <p>매력적인</p>
            <p>Javascript</p>
          </KeywordItem>
          <KeywordItem title="문제의식" img={flow} isMobile={isMobile}>
            <p>문제의식</p>
            <p>해결</p>
          </KeywordItem>
          <KeywordItem title="뿌리깊은" img={root} isMobile={isMobile}>
            <p>뿌리깊은</p>
            <p>개발자</p>
          </KeywordItem>
          <KeywordItem title="뿌리깊은" img={trust} isMobile={isMobile}>
            <p>핵심가치</p>
            <p>신뢰</p>
          </KeywordItem>
        </KeywordList>
      </Inner>
    </StyledKeyword>
  );
};

export default Keyword;
