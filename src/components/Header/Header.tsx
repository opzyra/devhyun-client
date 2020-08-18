import Link from "next/link";
import { useRouter } from "next/router";

import { StyledHeader, Inner, Brand, Nav } from "./Header.style";

import brand from "@/assets/images/brand.png";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <Inner>
        <Brand>
          <Link href="/">
            <a>
              <img src={brand} alt="brand" />
            </a>
          </Link>
        </Brand>
        <Nav>
          <ul>
            <li>
              <NavLink href="/about">
                <a>소개</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/project">
                <a>프로젝트</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/blog/post">
                <a>블로그</a>
              </NavLink>
            </li>
            <li>
              <a href="https://github.com/opzyra" target="_blank">
                깃허브
              </a>
            </li>
          </ul>
        </Nav>
      </Inner>
    </StyledHeader>
  );
};

export default Header;
