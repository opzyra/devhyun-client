import { IComponentProps } from "@/types/common";

import { StyledBrand, Inner, Logo } from "./Brand.style";

import identityPc from "@/assets/images/identity-pc.png";
import identityMobile from "@/assets/images/identity-mobile.png";
import bi from "@/assets/images/bi.png";

const Brand: React.FC<IComponentProps> = ({ isMobile }) => {
  return (
    <StyledBrand>
      <Inner>
        <h2>데브현 소개</h2>
        <p>
          어떤 사람인지, 어떤 것에 열정적인지를 파악하여 확립한 펄스널
          브랜딩입니다.
        </p>
        <p>
          세상에 많은 개발자들 중 '김현호'가 추구하는 가치를 브랜드화
          하였습니다.
        </p>
        <img src={isMobile ? identityMobile : identityPc} alt="identity" />
        <Logo>
          <div className="desc">
            <p>
              데브현 로고에서 텍스트는
              <br />
              'Developer'와 'Hyun Ho Kim'의 합성형태로
              <br />
              개발자 김현호를 의미힙니다.
              <br />
              <br />
              심볼은 알파벳 D를 추상화하여 HTML의 닫는 태그 형태로
              <br />
              두 면의 모서리를 통해 소통의 이미지를 전달하였습니다.
              <br />
              <br />
              Blue는 신뢰감을 주는 색상으로 핵심 가치를 반영하였습니다.
              <br />
              Black은 블루 컬러를 보완해주며 진취적이고 도전적인 의미를
              담았습니다.
            </p>
          </div>
          <div className="bi">
            <img src={bi} alt="BI" />
          </div>
        </Logo>
      </Inner>
    </StyledBrand>
  );
};

export default Brand;
