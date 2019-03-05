import gql from "graphql-tag";

export const USERS = gql`
  {
    users {
      id
      name
    }
  }
`;
