import { StyledPageTitle, Inner } from "./PageTitle.style";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <StyledPageTitle>
      <Inner>
        <h2>{title}</h2>
      </Inner>
    </StyledPageTitle>
  );
};

export default PageTitle;
