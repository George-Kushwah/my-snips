import { buildSchema } from "graphql";

const schemaa = buildSchema(`
  type User {
    id: ID!
    name: String!
    city: String!
  }

  type Query {
    users: [User]
    Getdata: [User]
    getUser(id:ID!):User
  }

`);

module.exports = schemaa;
