import { textToHtml } from "@/utils/convert";

import { StyledPoint, Inner } from "./Point.style";

export interface PointProps {
  title: string;
  point: string;
  full: string;
}

const Title: React.FC<PointProps> = ({ title, point, full }) => {
  return (
    <StyledPoint>
      <Inner>
        <h2>작업 포인트</h2>
        <p dangerouslySetInnerHTML={{ __html: textToHtml(point) }}></p>
        <img src={full} alt={`${title} 이미지`} />
      </Inner>
    </StyledPoint>
  );
};

export default Title;
