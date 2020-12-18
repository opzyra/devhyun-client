import { textToHtml } from "@/utils/convert";

import { StyledOutline, Inner } from "./Outline.style";

export interface OutlineProps {
  outline: string;
}

const Title: React.FC<OutlineProps> = ({ outline }) => {
  return (
    <StyledOutline>
      <Inner>
        <h2>프로젝트 개요</h2>
        <p dangerouslySetInnerHTML={{ __html: textToHtml(outline) }}></p>
      </Inner>
    </StyledOutline>
  );
};

export default Title;
