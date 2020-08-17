import Typed from "react-typed";
import {
  BannerWrapper,
  Inner,
  Catchphrase,
  Symbol,
  Code,
} from "./Banner.style";

const Header: React.FC = () => {
  const phrases = [
    "NodeJS + React로 웹 애플리케이션을 구축합니다.",
    "뿌리깊은 프론트엔드 개발자를 목표로 노력합니다.",
    "항상 새로운 기술에 적극적으로 도전합니다.",
  ];

  return (
    <BannerWrapper>
      <Inner>
        <Catchphrase>
          <h2>안녕하세요,</h2>
          <p>웹 브라우저로 사람을 연결하는 개발자 김현호 입니다.</p>
          <p>
            <Typed
              strings={phrases}
              typeSpeed={50}
              backSpeed={30}
              showCursor={false}
              loop={true}
            />
          </p>
          <Symbol />
          <Code />
        </Catchphrase>
      </Inner>
    </BannerWrapper>
  );
};

export default Header;
