import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
  mutation createComment($msg: String!) {
    createComment(msg: $msg) {
      id
      payload
      createdAt
    }
  }
`;
export default CREATE_COMMENT;
