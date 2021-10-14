import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
  query getGames($console: ID) {
    games(console: $console) {
      _id
      gamename
      genre
      price
      quantity
      image
      console {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($games: [ID]!) {
    checkout(games: $games) {
      session
    }
  }
`;

export const QUERY_ALL_GAMES = gql`
  {
    products {
      _id
      gamename
      genre
      price
      quantity
      console {
        name
      }
    }
  }
`;

export const QUERY_CONSOLE = gql`
  {
    console {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          gamename
          genre
          price
          quantity
          image
        }
      }
    }
  }
`;
