import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
const TOKEN = "authorization";
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};
const httpLink = createHttpLink({
  uri: "https://turtle-backend.herokuapp.com/graphql",
});
const onErrorLink = onError((e) => {
  console.log(e);
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem(TOKEN),
    },
  };
});
export const client = new ApolloClient({
  link: authLink.concat(onErrorLink).concat(httpLink),
  cache: new InMemoryCache(),
});
