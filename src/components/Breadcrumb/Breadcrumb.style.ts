import styled from "styled-components";

export const StyledBreadcrumb = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 20px;
`;

export const Inner = styled.p`
  font-size: 12px;

  span:last-child svg {
    display: none;
  }
`;

export const BreadcrumbItem = styled.span`
  display: inline-flex;
  align-items: center;

  span {
    margin-right: 4px;
  }

  svg {
    margin-right: 4px;
  }

  &.active {
    color: #004abf;
    font-weight: 500;
  }
`;
