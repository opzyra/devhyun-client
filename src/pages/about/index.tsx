import React from "react";

import PageInner from "@/components/PageInner";
import Breadcrumb from "@/components/Breadcrumb";
import PageTitle from "@/components/PageTitle";
import Keyword from "@/components/About/Keyword";
import Introduce from "@/components/About/Introduce";
import Stack from "@/components/About/Stack";
import Brand from "@/components/About/Brand";

export default function Index() {
  const paths = ["데브현 메인", "소개"];
  return (
    <PageInner>
      <Breadcrumb paths={paths} />
      <PageTitle
        title="웹 브라우저로 사람을 연결하는 개발자
        김현호에 대해 알아보세요 !"
      ></PageTitle>
      <Keyword />
      <Introduce />
      <Stack />
      <Brand />
    </PageInner>
  );
}
