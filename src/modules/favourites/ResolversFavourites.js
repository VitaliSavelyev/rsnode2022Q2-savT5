const resolversFavorite = {
  Query: {
    favourites: (parent, args, { dataSources }) => {
      return dataSources.favouritesAPI.getFavourites()
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
      if(genresIds && genresIds.length) {
        return genresIds.map(elem => dataSources.genresAPI.getGenre(elem));
      }
      return [];
    },

    artists: async ({ artistsIds }, args, { dataSources }) => {
      if(artistsIds && artistsIds.length) {
        return artistsIds.map(elem => dataSources.artistsAPI.getArtist(elem));
      }
      return [];
    },

    bands: async ({ bandsIds }, args, { dataSources }) => {
      if(bandsIds && bandsIds.length) {
        return bandsIds.map(elem => dataSources.bandsAPI.getBand(elem));
      }
      return []
    },

    tracks: async ({ tracksIds }, args, { dataSources }) => {
      if(tracksIds && tracksIds.length) {
        return tracksIds.map(elem => dataSources.tracksAPI.getTrack(elem));
      }
      return [];
    },
  },
};

module.exports = { resolversFavorite }
