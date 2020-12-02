import MockAboutperiod from "@/assets/project/mok_aboutperiod.png";
import ConceptAboutperiod from "@/assets/project/concept_aboutperiod.png";
import FullAboutperiod from "@/assets/project/full_aboutperiod.png";

// export interface IProject {

// }

export const bizProject = [
  {
    href: "aboutperiod",
    mock: MockAboutperiod,
    title: "어바웃 피리어드 홈페이지",
    spec: "NodeJS, Bootstrap, JQuery, MySQL, AWS",
    period: "2019.02 ~ 2019.03",
    url: "https://www.aboutperiod.com",
    production: true,
    responsive: true,
    summary: [
      "어바웃피리어드는 월경에 대한 올바르지 않은 인식과 사회적 분위기를 바꾸기 위해 월경상자를 기획한 스타트업 입니다.",
      "초기 스타트업의 영업활동은 쉽지 않습니다. 기업이 추구하는 가치를 홍보하고 신뢰성을 높이기 위해 홈페이지를 런칭하였습니다.",
      "감성적인 일러스트와 폰트를 사용하였고 추구하는 가치와 제품을 메인으로 제공하였습니다.",
    ],
    concept: ConceptAboutperiod,
    full: FullAboutperiod,
    skills: [
      "Handlebars·HTML/CSS·Bootstrap·JQuery",
      "NodeJS(Express)·ES6·MySQL·Redis",
      "AWS·Git",
    ],
  },
];
