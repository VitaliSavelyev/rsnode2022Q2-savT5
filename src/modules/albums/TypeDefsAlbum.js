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
        name: String!
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        trackIds: [ID]
        genresIds: [ID]
        image: String
    }
    
    input UpdateAlbumInput {
        name: String
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        trackIds: [ID]
        genresIds: [ID]
        image: String
    }
    
    #Mutations
    type Mutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Album!,
    deleteAlbum(id: ID!): DELETE,
    updateAlbum(id: ID!, updateAlbumInput: UpdateAlbumInput): Album!,
    }
`;

module.exports = { typeDefsAlbum}
