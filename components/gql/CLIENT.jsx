"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import getToken from "@/func/getToken";

const token = getToken();

const client = new ApolloClient({
  uri: "https://api.stratz.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
  headers: { authorization: token ? `Bearer ${token}` : "" },
});

const URQL = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default URQL;
