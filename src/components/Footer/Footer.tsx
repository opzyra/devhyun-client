import Link from "next/link";
import * as fns from "date-fns";

import {
  StyledFooter,
  Inner,
  Links,
  Info,
  Brand,
  Policy,
  Sns,
} from "./Footer.style";

import mail from "@/assets/images/mail.png";
import kakao from "@/assets/images/kakao.png";
import git from "@/assets/images/git.png";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Inner>
        <Links>
          <Brand>
            <span>데브현</span>
          </Brand>
          <Policy>
            <Link href="/policy">
              <a>개인정보 처리 방침</a>
            </Link>
          </Policy>
          <Sns>
            <a href="mailto:opzyra@gmail.com" title="이메일">
              <img src={mail} alt="이메일" />
            </a>
            <a href="#" title="카카오톡">
              <img src={kakao} alt="카카오톡" />
            </a>
            <a href="https://github.com/opzyra" target="_blank" title="깃허브">
              <img src={git} alt="깃허브" />
            </a>
          </Sns>
        </Links>
        <Info>
          <span>
            <strong>김현호</strong>
          </span>
          <span>이메일 opzyra@gmail.com</span>
          <span>카카오톡 opzyra</span>
          <span>깃허브 opzyra</span>
          <div>
            Copyright ⓒ {fns.format(new Date(), "yyyy")} Devhyun All Rights
            Reserved.
          </div>
        </Info>
      </Inner>
    </StyledFooter>
  );
};

export default Footer;
