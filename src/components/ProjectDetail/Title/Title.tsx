import { Tooltip } from "react-tippy";
import Icon from "@mdi/react";
import { mdiMicrosoftInternetExplorer } from "@mdi/js";

import { StyledTitle, Inner } from "./Title.style";

import productionIcon from "@/assets/images/production.png";
import responsiveIcon from "@/assets/images/responsive.png";

interface TitleProps {
  name: string;
  title: string;
  period: string;
  url: string;
  production: boolean;
  responsive: boolean;
}

const Title: React.FC<TitleProps> = ({
  name,
  title,
  period,
  url,
  production,
  responsive,
}) => {
  return (
    <StyledTitle>
      <Inner>
        <h2>{title}</h2>
        <p className="date">{period}</p>
        <div className="icon">
          {production && (
            <Tooltip
              title="배포"
              theme="dark"
              position="bottom"
              trigger="mouseenter"
              distance={24}
              animateFill={false}
              size="small"
            >
              <img src={productionIcon} alt={name} />
            </Tooltip>
          )}
          {responsive && (
            <Tooltip
              title="반응형"
              theme="dark"
              position="bottom"
              trigger="mouseenter"
              distance={24}
              animateFill={false}
              size="small"
            >
              <img src={responsiveIcon} alt={name} />
            </Tooltip>
          )}
        </div>
        <p className="url">
          <span>
            <Icon path={mdiMicrosoftInternetExplorer} size={0.7} />
            <a href={url} target="_blank">
              {url}
            </a>
          </span>
        </p>
      </Inner>
    </StyledTitle>
  );
};

export default Title;
