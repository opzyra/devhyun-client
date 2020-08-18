import styled from "styled-components";

export const StyledButton = styled.button<{
  buttonStyle: "primary" | "secondary";
  size: "small" | "nomal" | "large";
}>`
  display: inline-flex;
  align-items: center;
  border-radius: 60px;
  font-size: 14px;
  border: 1px solid hsla(0, 0%, 59.2%, 0.24);
  background-color: #fff;

  &:hover {
    color: #fff;
    background: #004abf;
  }

  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          
        `;
      case "large":
        return `
          padding: 0 30px;
          height: 45px;
          line-height: 45px;
        `;
      default:
        return `
          padding: 0 24px;
          height: 36px;
          line-height: 36px;
        `;
    }
  }}

  span {
    margin-right: 4px;
  }
`;
