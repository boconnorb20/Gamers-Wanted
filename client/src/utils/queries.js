import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
  query getGames($console: ID) {
    games(consoles: $consoles) {
      _id
      gamename
      genre
      price
      quantity
      image
      consoles {
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
`;

export const QUERY_CONSOLE = gql`
  {
    consoles {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        games {
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
