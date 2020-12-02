import { StyledBackground, Inner } from "./Background.style";

export interface BackgroundProps {
  mock: string;
}

const Title: React.FC<BackgroundProps> = ({ mock }) => {
  return (
    <StyledBackground>
      <Inner mock={mock} />
    </StyledBackground>
  );
};

export default Title;
