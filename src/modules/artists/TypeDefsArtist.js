const { gql } = require('apollo-server-express')

const typeDefsArtist = gql`
    type Artist {
        id: ID!
        firstName: String!
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: [String]
    }
    
    #Queries
    type Query {
        artists(limit: Int, offset: Int): [Artist]!
        artist(id: ID!): Artist
    }
    
    #Inputs
    input CreateArtistInput {
        firstName: String!
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [ID]
        instruments: [String]
    }
    
    input UpdateArtistInput {
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [ID]
        instruments: [String]
    }
    
    #Mutations
    type Mutation {
    createArtist(createArtistInput: CreateArtistInput): Artist!,
    deleteArtist(id: ID!): DELETE,
    updateArtist(id: ID!, updateArtistInput: UpdateArtistInput): Artist!,
    }
`;

module.exports = { typeDefsArtist }
