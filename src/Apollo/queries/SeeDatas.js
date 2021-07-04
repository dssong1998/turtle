import { gql } from "@apollo/client";

const DATA_QUERY = gql`
  query seeData($password: String!, $token: String!) {
    seeData(password: $password, token: $token) {
      id
      choice
      email
      phone
      emailVal
      pay
      createdAt
    }
  }
`;
export default DATA_QUERY;
