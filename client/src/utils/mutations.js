import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($games: [ID]!) {
    addOrder(games: $games) {
      purchaseDate
      games {
      _id
      gamename
      genre
      price
      quantity
      consoles {
        name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userame: $userame
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
