const { gql } = require('apollo-server-express')

const typeDefsFavourite = gql`
    type Favourites {
        id: ID!
        userId: ID
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
        tracks: [Track]
    }

    #Queries
    type Query {
        favourites(id: ID!): Favourites
    }


    #Mutations
    type Mutation {
        addTrackToFavourites(id: ID!): Favourites!
        addBandToFavourites(id: ID!): Favourites!
        addArtistToFavourites(id: ID!): Favourites!
        addGenreToFavourites(id: ID!): Favourites!
    }
`;

module.exports = {typeDefsFavourite}
