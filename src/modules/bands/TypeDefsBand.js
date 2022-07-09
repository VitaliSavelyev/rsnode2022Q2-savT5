const { gql } = require('apollo-server-express')

const typeDefsBand = gql`
    type Band {
        id: ID!
        name: String
        origin: String
        members: [Member]
        website: String
        genres: [Genre]
    }
    
    type Member {
        id: ID!
        firstName: String,
        secondName: String,
        middleName: String,
        instrument: String
        years: [String]
    }
    
    #Queries
    type Query {
        bands(limit: Int, offset: Int): [Band]!
        band(id: ID!): Band
    }
    
    #Inputs
    input CreateBandInput {
        name: String!
        origin: String
        members: [MemberInput]
        website: String
        genresIds: [ID]
    }
    
    input UpdateBandInput {
        name: String
        origin: String
        members: [MemberInput]
        website: String
        genresIds: [ID]
    }
    
    input MemberInput {
        id: ID!
        firstName: String,
        secondName: String,
        middleName: String,
        instrument: String
        years: [Int]
    }
    
    #Mutations
    type Mutation {
    createBand(createBandInput: CreateBandInput): Band!,
    deleteBand(id: ID!): DELETE,
    updateBand(id: ID!, updateBandInput: UpdateBandInput): Band!,
    }
`;

module.exports = { typeDefsBand }
