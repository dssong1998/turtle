import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($choice: String) {
    createUser(choice: $choice) {
      id
      choice
    }
  }
`;
export default CREATE_USER;
