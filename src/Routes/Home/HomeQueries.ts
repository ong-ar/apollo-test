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

export const SUBSCRIPTION_USER = gql`
  subscription {
    user {
      mutation
      node {
        id
        email
        name
      }
    }
  }
`;
