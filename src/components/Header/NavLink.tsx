import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
  children: JSX.Element[] | JSX.Element;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ children, href, ...props }) => {
  const router = useRouter();
  return (
    <Link href={href} {...props}>
      {React.cloneElement(Children.only(children), {
        className:
          `/${router.pathname.split("/")[1]}` === href ? `active` : null,
      })}
    </Link>
  );
};

export default NavLink;
