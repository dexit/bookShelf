import { gql } from '@apollo/client';


export const ADD_USER = gql`

  mutation (($username: String!, $email: String!, $password: String!) {
    addUser(user: $user) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;