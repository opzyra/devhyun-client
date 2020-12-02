import React from "react";

import PageInner from "@/components/PageInner";
import Breadcrumb from "@/components/Breadcrumb";
import PageTitle from "@/components/PageTitle";

import Biz from "@/components/Project/Biz";

const Index = () => {
  const paths = ["데브현 메인", "프로젝트"];
  return (
    <PageInner>
      <Breadcrumb paths={paths} />
      <PageTitle
        title="개발을 통해 작은 문제를 해결하고 개선한
        프로젝트들을 정리 했어요"
      ></PageTitle>
      <Biz />
    </PageInner>
  );
};

export default Index;
