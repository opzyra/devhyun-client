import Link from "next/link";

import Icon from "@mdi/react";
import IconProps from "@mdi/react/Icon";

import { StyledButton } from "./Button.style";

interface ButtonProps {
  type: "submit" | "button";
  buttonStyle: "primary" | "secondary";
  size: "small" | "nomal" | "large";
  label: string | React.ReactNode;
  mdi?: IconProps;
  route?: string;
  link?: string;
  target?: string;
  props?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  size,
  type,
  route,
  link,
  target,
  label,
  mdi,
  props,
}) => {
  if (route) {
    return (
      <Link href={route}>
        <StyledButton
          buttonStyle={buttonStyle}
          size={size}
          type={type}
          {...props}
        >
          <span>{label}</span>
          {mdi && <Icon path={mdi} size={0.6}></Icon>}
        </StyledButton>
      </Link>
    );
  }

  return (
    <a href={link} target={target}>
      <StyledButton
        buttonStyle={buttonStyle}
        size={size}
        type={type}
        {...props}
      >
        <span>{label}</span>
        {mdi && <Icon path={mdi} size={0.6}></Icon>}
      </StyledButton>
    </a>
  );
};

export default Button;
