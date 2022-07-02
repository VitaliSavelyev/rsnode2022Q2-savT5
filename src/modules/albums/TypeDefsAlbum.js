const { gql } = require('apollo-server-express')

const typeDefsAlbum = gql`
    type Album {
        id: ID!
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }
    
    #Queries
    type Query {
        albums(limit: Int, offset: Int): [Album]!
        album(id: ID!): Artist
    }
    
    #Inputs
    input CreateAlbumInput {
        id: ID!
        name: String!
        released: Int
        artistsIds: [String]
        bandsIds: [String]
        tracksIds: [String]
        genresIds: [String]
        image: String
    }
    
    input UpdateAlbumInput {
        id: ID!
        name: String
        released: Int
        artistsIds: [String]
        bandsIds: [String]
        tracksIds: [String]
        genresIds: [String]
        image: String
    }
    
    #Mutations
    type Mutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Album!,
    deleteAlbum(id: ID!): DELETE,
    updateAlbum(updateAlbumInput: UpdateAlbumInput): Album!,
    }
`;

module.exports = { typeDefsAlbum}
