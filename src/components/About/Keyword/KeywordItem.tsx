import { Tooltip } from "react-tippy";

import { DeviceConsumer } from "@/pages/_app";

import { StyledKeywordItem } from "./KeywordItem.style";

interface KeywordItemProps {
  title: string;
  img: string;
  children?: React.ReactNode;
}

const KeywordItem: React.FC<KeywordItemProps> = ({ title, img, children }) => {
  return (
    <DeviceConsumer>
      {(isMobile) => (
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
      )}
    </DeviceConsumer>
  );
};

export default KeywordItem;
