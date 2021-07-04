import { gql } from "@apollo/client";

const PAY_MUTATION = gql`
  mutation paid($id: Int!) {
    paid(id: $id)
  }
`;
export default PAY_MUTATION;
