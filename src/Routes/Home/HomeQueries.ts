import gql from "graphql-tag";

export const USERS = gql`
  {
    users {
      id
      name
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($name: String!) {
    createUser(data: { name: $name }) {
      id
      name
    }
  }
`;
