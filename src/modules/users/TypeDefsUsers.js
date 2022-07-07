const { gql } = require('apollo-server-express')

const typeDefsUsers = gql`

    type JWT {
        jwt: String
    }

    type User {
        id: ID!
        firstName: String!
        secondName: String!
        password: String!
        email: String!
    }

    #Queries
    type Query {
        user(id: ID!): User
    }

    #Inputs
    input CreateUserInput {
        id: ID
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }

    #Mutations
    type Mutation {
        createUser(createUserInput: CreateUserInput): User!
        getJWT(password: String!, email: String!): JWT
    }
`;

module.exports = {typeDefsUsers}
