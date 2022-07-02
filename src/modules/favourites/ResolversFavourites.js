const resolversFavorite = {
  Query: {
    favourite: () => {},
  },
  Mutation: {
    addTrackToFavourites(parent, args) {
      const newUser = args;
      return newUser
    },
    addBandToFavourites(parent, args) {
      const newUser = args;
      return newUser
    },
    addArtistToFavourites(parent, args) {
      const newUser = args;
      return newUser
    },
    addGenreToFavourites(parent, args) {
      const newUser = args;
      return newUser
    }
  }
};

module.exports = { resolversFavorite }
