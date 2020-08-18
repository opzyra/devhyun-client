import Icon from "@mdi/react";
import { mdiMenuRight } from "@mdi/js";

import { StyledBreadcrumb, Inner, BreadcrumbItem } from "./Breadcrumb.style";

interface BreadcrumbProps {
  paths: Array<string>;
  active: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths, active }) => {
  return (
    <StyledBreadcrumb>
      <Inner>
        {paths.map((path, index) => (
          <BreadcrumbItem className={path === active && "active"} key={index}>
            <span>{path}</span>
            <Icon path={mdiMenuRight} size={0.5}></Icon>
          </BreadcrumbItem>
        ))}
      </Inner>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
