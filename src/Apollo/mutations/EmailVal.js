import { gql } from "@apollo/client";

const EMAIL_VAL = gql`
  mutation validateEmail($token: String!) {
    validateEmail(token: $token)
  }
`;

export default EMAIL_VAL;
