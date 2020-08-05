import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href, ...props }) => {
  const router = useRouter();
  return (
    <Link href={href} {...props}>
      {React.cloneElement(Children.only(children), {
        className:
          `/${router.pathname.split("/")[1]}` === props.href ? `active` : null,
      })}
    </Link>
  );
};

export default NavLink;
