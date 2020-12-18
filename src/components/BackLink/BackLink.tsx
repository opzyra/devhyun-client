import Link from "next/link";
import { useRouter } from "next/router";

import { StyledBackLink, Inner } from "./BackLink.style";

export interface BackLinkProps {
  link?: string;
}

const Title: React.FC<BackLinkProps> = ({ link }) => {
  const router = useRouter();

  return (
    <StyledBackLink>
      <Inner>
        {link ? (
          <Link href={link}>
            <a>목록으로 가기</a>
          </Link>
        ) : (
          <a onClick={() => router.back()}>목록으로 가기</a>
        )}
      </Inner>
    </StyledBackLink>
  );
};

export default Title;
