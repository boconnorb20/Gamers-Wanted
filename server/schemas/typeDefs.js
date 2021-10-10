const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Console {
    _id: ID
    name: String
  }

  type Game {
    _id: ID
    gamename: String
    genre: String
    image: String
    quantity: Int
    price: Float
    console: Console
  }

  type Order {
    _id: ID
    purchaseDate: String
    games: [Game]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    consoles: [Console]
    games(console: ID, name: String): [Game]
    game(_id: ID!): Games
    user: User
    order(_id: ID!): Order
    checkout(games: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateGame(_id: ID!, quantity: Int!): Game
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
