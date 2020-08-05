import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { getDataFromTree } from "@apollo/react-ssr";

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: `${process.env.NEXT_STATIC_GRAPHQL_API}`,
      cache: new InMemoryCache().restore(initialState || {}),
    }),
  { getDataFromTree }
);
