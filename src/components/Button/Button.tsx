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
  target?: boolean;
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
}) => {
  if (route) {
    return (
      <StyledButton buttonStyle={buttonStyle} size={size} type={type}>
        <Link href={route}>
          <>
            <span>{label}</span>
            {mdi && <Icon path={mdi} size={0.5}></Icon>}
          </>
        </Link>
      </StyledButton>
    );
  }

  const click = () => {
    target ? null : (location.href = link);
  };

  return (
    <StyledButton
      buttonStyle={buttonStyle}
      size={size}
      type={type}
      onClick={click}
    >
      <>
        <span>{label}</span>
        {mdi && <Icon path={mdi} size={0.5}></Icon>}
      </>
    </StyledButton>
  );
};

export default Button;
