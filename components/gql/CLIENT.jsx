"use client";
import { ApolloProvider } from "@apollo/client";
import client from "./setClient";

const URQL = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default URQL;
