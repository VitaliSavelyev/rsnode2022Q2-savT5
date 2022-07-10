const resolversTrack = {
  Query: {
    track: (parent, { id }, { dataSources }) => {
      return dataSources.tracksAPI.getTrack(id)
          ;
    },
    tracks: (parent, { offset, limit }, { dataSources }) => {
      return dataSources.tracksAPI.getTracks(offset, limit);
    },
  },
  Mutation: {
    createTrack: (parent, { createTrackInput }, { dataSources }) => {
      return dataSources.tracksAPI.createTrack(createTrackInput);
    },
    deleteTrack: (parent, { id }, { dataSources }) => {
      return dataSources.tracksAPI.deleteTrack(id)
          ;
    },
    updateTrack: (parent, { id, updateTrackInput }, { dataSources }) => {
      return dataSources.tracksAPI.updateTrack(id, updateTrackInput);
    },
  },

  Track: {
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
      return [];
    },

    album: async ({ albumId }, args, { dataSources }) => {
      if (albumId) {
        return dataSources.albumsAPI.getAlbum(albumId);
      }
      return null;
    },
  },
};

module.exports = { resolversTrack }
