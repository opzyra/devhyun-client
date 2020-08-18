import { Tooltip } from "react-tippy";

import { StyledKeywordItem } from "./KeywordItem.style";

interface KeywordItemProps {
  isMobile: boolean;
  title: string;
  img: string;
  children?: React.ReactNode;
}

const KeywordItem: React.FC<KeywordItemProps> = ({
  isMobile,
  title,
  img,
  children,
}) => {
  return (
    <StyledKeywordItem>
      {isMobile ? (
        <Tooltip
          title={title}
          theme="dark"
          position="bottom"
          trigger="click"
          animateFill={false}
        >
          <img src={img} alt={title} />
        </Tooltip>
      ) : (
        <img src={img} alt={title} />
      )}
      {children}
    </StyledKeywordItem>
  );
};

export default KeywordItem;
