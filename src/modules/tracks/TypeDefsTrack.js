const { gql } = require('apollo-server-express')

const typeDefsTrack = gql`
    type Track {
        id: ID!
        title: String!
        albums: [Album]
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }
    
    #Queries
    type Query {
        tracks(limit: Int, offset: Int): [Track]!
        track(id: ID!): Track
    }
    
    #Inputs
    input CreateTrackInput {
        id: ID!
        title: String!
        albumsIds: [String]
        bandsIds: [String]
        duration: Int
        released: Int
        genresIds: [String]
    }
    
    input UpdateTrackInput {
        id: ID!
        title: String
        albumsIds: [String]
        bandsIds: [String]
        duration: Int
        released: Int
        genresIds: [String]
    }
    
    #Mutations
    type Mutation {
    createTrack(createTrackInput: CreateTrackInput): Track!,
    deleteTrack(id: ID!): DELETE,
    updateTrack(updateArtistInput: UpdateTrackInput): Track!,
    }
`;

module.exports = {typeDefsTrack}
