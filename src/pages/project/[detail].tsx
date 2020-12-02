import { useRouter } from "next/router";
import ErrorPage from "next/error";

import React from "react";

import PageInner from "@/components/PageInner";
import Breadcrumb from "@/components/Breadcrumb";

import Title from "@/components/ProjectDetail/Title";
import Background from "@/components/ProjectDetail/Background";

import { bizProject } from "@/data/project";

const projects: Array<any> = Object.assign(bizProject);

const Detail = () => {
  const router = useRouter();
  const paths = ["데브현 메인", "프로젝트", "상세정보"];
  const project = projects.find((p) => p.href === router.query.detail);

  if (!project) {
    return <ErrorPage statusCode={404}></ErrorPage>;
  }

  const { href, title, period, url, production, responsive, mock } = project;

  return (
    <PageInner>
      <Breadcrumb paths={paths} />
      <Title
        name={href}
        title={title}
        period={period}
        url={url}
        production={production}
        responsive={responsive}
      />
      <Background mock={mock} />
    </PageInner>
  );
};

export default Detail;
