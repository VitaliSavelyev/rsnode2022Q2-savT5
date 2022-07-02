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
        artist: String
        instrument: String
        years: String
    }
    
    #Queries
    type Query {
        bands(limit: Int, offset: Int): [Band]!
        band(id: ID!): Band
    }
    
    #Inputs
    input CreateBandInput {
        id: ID!
        name: String!
        origin: String
        members: [MemberInput]
        website: String
        genresIds: [String]
    }
    
    input UpdateBandInput {
        id: ID!
        name: String
        origin: String
        members: [MemberInput]
        website: String
        genresIds: [String]
    }
    
    input MemberInput {
        artist: String
        instrument: String
        years: String
    }
    
    #Mutations
    type Mutation {
    createBand(createBandInput: CreateBandInput): Band!,
    deleteBand(id: ID!): DELETE,
    updateBand(updateBandInput: UpdateBandInput): Band!,
    }
`;

module.exports = {typeDefsBand}
