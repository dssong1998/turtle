import { gql } from "@apollo/client";

const EMAIL_SEND = gql`
  mutation sendEmail($id: Int!, $email: String!) {
    sendEmail(id: $id, email: $email)
  }
`;
export default EMAIL_SEND;
