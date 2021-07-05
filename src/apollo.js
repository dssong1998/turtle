import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: "https://turtle-backend.herokuapp.com/graphql",
});
const onErrorLink = onError((e) => {
  console.log(e);
});
export const client = new ApolloClient({
  link: onErrorLink.concat(httpLink),
  cache: new InMemoryCache(),
});
