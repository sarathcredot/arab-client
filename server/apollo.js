import { withApollo } from "next-apollo";
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  ApolloProvider,
  gql,
} from "@apollo/client";
import {
  requestInterceptor,
  responseInterceptor,
  authLink,
} from "./interceptor";
import { createUploadLink } from "apollo-upload-client";

const API_URI = process.env.NEXT_PUBLIC_SERVER_URL;

// const httpLink = new HttpLink({ uri: API_URI });

const uploadLink = createUploadLink({
  uri: API_URI,
  headers: {
    "Apollo-Require-Preflight": "true",
  },
});

const apolloClient = new ApolloClient({
  // uri:API_URI,
  link: ApolloLink.from([authLink, responseInterceptor, uploadLink]),
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
