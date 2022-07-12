const { gql } = require('apollo-server-express')

const typeDefsTrack = gql`
    type Track {
        id: ID!
        title: String!
        album: Album
        bands: [Band]
        duration: Int
        released: Int
        artists: [Artist]
        genres: [Genre]
    }
    
    #Queries
    type Query {
        tracks(limit: Int, offset: Int): [Track]!
        track(id: ID!): Track
    }
    
    #Inputs
    input CreateTrackInput {
        title: String!
        albumId: ID
        bandsIds: [String]
        duration: Int
        released: Int
        artistsIds: [ID]
        genresIds: [String]
    }
    
    input UpdateTrackInput {
        title: String
        albumId: ID
        bandsIds: [String]
        duration: Int
        released: Int
        artistsIds: [ID]
        genresIds: [String]
    }
    
    #Mutations
    type Mutation {
    createTrack(createTrackInput: CreateTrackInput): Track!,
    deleteTrack(id: ID!): DELETE,
    updateTrack(id: ID!, updateTrackInput: UpdateTrackInput): Track!,
    }
`;

module.exports = {typeDefsTrack}
