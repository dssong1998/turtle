import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: "http://192.168.35.213:4000/graphql",
});
const onErrorLink = onError((e) => {
  console.log(e);
});
export const client = new ApolloClient({
  link: onErrorLink.concat(httpLink),
  cache: new InMemoryCache(),
});
