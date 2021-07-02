import { gql } from "@apollo/client";

const PHONE_VAL = gql`
  mutation validatePhone($id: Int!, $phone: String!) {
    validatePhone(id: $id, phone: $phone)
  }
`;
export default PHONE_VAL;
