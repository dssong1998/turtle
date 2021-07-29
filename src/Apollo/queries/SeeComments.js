import { gql } from "@apollo/client";

const SEE_COMMENTS = gql`
  query seeComment($page_no: Int!) {
    seeComment(page_no: $page_no) {
      id
      payload
      createdAt
      updatedAt
      totalPage
    }
  }
`;
export default SEE_COMMENTS;
