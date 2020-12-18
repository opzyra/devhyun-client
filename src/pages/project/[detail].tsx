import { useRouter } from "next/router";
import ErrorPage from "next/error";

import React from "react";

import PageInner from "@/components/PageInner";
import Breadcrumb from "@/components/Breadcrumb";

import Title from "@/components/ProjectDetail/Title";
import Background from "@/components/ProjectDetail/Background";
import Outline from "@/components/ProjectDetail/Outline";
import Concept from "@/components/ProjectDetail/Concept";
import Point from "@/components/ProjectDetail/Point";
import Skill from "@/components/ProjectDetail/Skill";
import BackLink from "@/components/BackLink";

import { bizProject } from "@/data/project";

const projects: Array<any> = Object.assign(bizProject);

const Detail = () => {
  const router = useRouter();
  const paths = ["데브현 메인", "프로젝트", "상세정보"];
  const project = projects.find((p) => p.name === router.query.detail);

  if (!project) {
    return <ErrorPage statusCode={404}></ErrorPage>;
  }

  const {
    name,
    title,
    period,
    url,
    outline,
    production,
    responsive,
    mock,
    concept,
    full,
    point,
    skill,
  } = project;

  return (
    <PageInner>
      <Breadcrumb paths={paths} />
      <Title
        name={name}
        title={title}
        period={period}
        url={url}
        production={production}
        responsive={responsive}
      />
      <Background mock={mock} />
      <Outline outline={outline} />
      <Concept concept={concept} title={title} />
      <Point point={point} full={full} title={title} />
      <Skill skill={skill} name={name} />
      <BackLink link={`/project`} />
    </PageInner>
  );
};

export default Detail;
