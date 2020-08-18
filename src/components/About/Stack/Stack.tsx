import { StyledStack, Inner } from "./Stack.style";

import StackList from "./StackList";

const Stack: React.FC = () => {
  return (
    <StyledStack>
      <Inner>
        <h2>기술스택 소개</h2>
        <p>
          현업에서 사용하여 프로젝트를 진행하거나 관심있게 학습해본 경험이 있는
          기술스택입니다.
        </p>
        <p>
          실무·토이는 해당 언어를 사용하여 결과물을 도출해본 경험이 있으며
          개발된 소스코드를 이해할 수 있습니다.
        </p>
        <p>
          기초 단계는 관심있게 학습 중이며 일정 학습정도가 되면 토이 프로젝트를
          진행합니다.
        </p>
        <StackList></StackList>
      </Inner>
    </StyledStack>
  );
};

export default Stack;
