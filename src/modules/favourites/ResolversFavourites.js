const resolversFavorite = {
  Query: {
    favourites: (parent, { id }, { dataSources }) => {
      return dataSources.favouritesAPI.getFavourites(id)
    },
  },
  Mutation: {
    addTrackToFavourites: (parent, { id }, { dataSources }) => {
      return dataSources.favouritesAPI.updateFavourite('tracks', id);
    },
    addBandToFavourites: (parent, { id }, { dataSources }) => {
      return dataSources.favouritesAPI.updateFavourite('bands', id);
    },
    addArtistToFavourites: (parent, { id }, { dataSources }) => {
      return dataSources.favouritesAPI.updateFavourite('artists', id);
    },
    addGenreToFavourites: (parent, { id }, { dataSources }) => {
      return dataSources.favouritesAPI.updateFavourite('genres', id);
    },
  },

  Favourites: {
    id: (parent) => {
      return parent._id;
    },

    genres: async ({ genresIds }, args, { dataSources }) => {
      if(genresIds?.length) {
        return genresIds.map(elem => dataSources.genresAPI.getGenre(elem));
      }
      return [];
    },

    artists: async ({ artistsIds }, args, { dataSources }) => {
      if(artistsIds?.length) {
        return artistsIds.map(elem => dataSources.artistsAPI.getArtist(elem));
      }
      return [];
    },

    bands: async ({ bandsIds }, args, { dataSources }) => {
      if(bandsIds?.length) {
        return bandsIds.map(elem => dataSources.bandsAPI.getBand(elem));
      }
      return []
    },

    tracks: async ({ tracksIds }, args, { dataSources }) => {
      if(tracksIds?.length) {
        return tracksIds.map(elem => dataSources.tracksAPI.getTrack(elem));
      }
      return [];
    },
  },
};

module.exports = { resolversFavorite }
