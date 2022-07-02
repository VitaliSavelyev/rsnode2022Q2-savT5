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
        favourite(id: ID!): Favourites
    }

    #Inputs
    input AddTrackToFavouritesInput {
        id: ID!,
        tracksIds: [String]
    }
        input AddBandToFavouritesInput {
        id: ID!,
        bandsIds: [String]
    }
        input AddArtistToFavouritesInput {
        id: ID!,
        artistsIds: [String]
    }
        input AddGenreToFavouritesInput {
        id: ID!,
        genresIds: [String]
    }
    

    #Mutations
    type Mutation {
        addTrackToFavourites(addTrackToFavouritesInput: AddTrackToFavouritesInput): Favourites!
        addBandToFavourites(addBandToFavouritesInput: AddBandToFavouritesInput): Favourites!
        addArtistToFavourites(addArtistToFavouritesInput: AddArtistToFavouritesInput): Favourites!
        addGenreToFavourites(addGenreToFavouritesInput: AddGenreToFavouritesInput): Favourites!
    }
`;

module.exports = {typeDefsFavourite}
