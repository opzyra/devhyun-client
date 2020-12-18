import MockAboutperiod from "@/assets/project/mok_aboutperiod.png";
import ConceptAboutperiod from "@/assets/project/concept_aboutperiod.png";
import FullAboutperiod from "@/assets/project/full_aboutperiod.png";

// export interface IProject {

// }

export const bizProject = [
  {
    name: "aboutperiod",
    mock: MockAboutperiod,
    concept: ConceptAboutperiod,
    full: FullAboutperiod,
    production: true,
    responsive: true,
    title: "어바웃 피리어드 홈페이지",
    spec: "NodeJS, Bootstrap, JQuery, MySQL, AWS",
    period: "2019.02 ~ 2019.03",
    url: "https://www.aboutperiod.com",
    outline: `어바웃피리어드는 월경에 대한 올바르지 않은 인식과 사회적 분위기를 바꾸기 위해 월경상자를 기획한 스타트업 입니다.
      초기 스타트업의 영업활동은 쉽지 않습니다. 기업이 추구하는 가치를 홍보하고 신뢰성을 높이기 위해 홈페이지를 런칭하였습니다.
      감성적인 일러스트와 폰트를 사용하였고 추구하는 가치와 제품을 메인으로 제공하였습니다.`,
    skill: `Handlebars·HTML/CSS·Bootstrap·JQuery
    NodeJS(Express)·ES6·MySQL·Redis
    AWS·Git`,
    point: `판매하는 제품의 수가 적어서 쇼핑몰보다는 랜딩페이지로 기획하였고
    감성적인 느낌을 전달하기 위해 일러스트·애니메이션을 활용하였습니다.
    또한, 다양한 디바이스 접근을 위해 반응형으로 제작하였습니다.
    
    연혁·제품소개·프로젝트안내 페이지는 동적할당이 필요하므로 관리자 페이지를 개발하였습니다.
    마케팅 데이터 수집을 위한 방문자·유입 통계 시스템을 구축하였고 검색엔진 최적화 작업을 진행하였습니다.`,
  },
];
