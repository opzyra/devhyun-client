import React from "react";
import Banner from "@/components/Main/Banner";
import Project from "@/components/Main/Project";
import Skill from "@/components/Main/Skill";
import Blog from "@/components/Main/Blog";
// import { useQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";

// const JOBS_QUERY = gql`
//   query login($email: String!) {
//     login(param: { email: $email, password: "1234" }) {
//       email
//     }
//   }
// `;

const Index = () => {
  return (
    <>
      <Banner />
      <Skill />
      <Project />
      <Blog />
    </>
  );
  // const { loading, data } = useQuery(JOBS_QUERY, {
  //   variables: { email: "opzyra@naver.com" },
  // });
  // if (loading) return <></>;
  // return <div>{data.login.email}</div>;
};

export default Index;
