import React from "react";
import Header from "@/components/Header";
// import { useQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";

// const JOBS_QUERY = gql`
//   query login($email: String!) {
//     login(param: { email: $email, password: "1234" }) {
//       email
//     }
//   }
// `;

export default function Index() {
  return <div>내용</div>;
  // const { loading, data } = useQuery(JOBS_QUERY, {
  //   variables: { email: "opzyra@naver.com" },
  // });
  // if (loading) return <></>;
  // return <div>{data.login.email}</div>;
}