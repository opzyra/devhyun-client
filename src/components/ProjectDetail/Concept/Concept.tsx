import { StyledConcept, Inner } from "./Concept.style";

export interface ConceptProps {
  title: string;
  concept: string;
}

const Title: React.FC<ConceptProps> = ({ title, concept }) => {
  return (
    <StyledConcept>
      <Inner>
        <img src={concept} alt={`${title} 컨셉 이미지`} />
      </Inner>
    </StyledConcept>
  );
};

export default Title;
