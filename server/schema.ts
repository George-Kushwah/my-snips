import { buildSchema } from "graphql";

const schemaa = buildSchema(`
  type User {
    id: ID!
    name: String!
    city: String!
  }

  type Query {
    users: [User]
    minal: [User]
  }

`);

module.exports = schemaa;
