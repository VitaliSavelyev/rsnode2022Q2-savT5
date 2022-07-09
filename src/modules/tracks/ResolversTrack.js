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
      return genresIds.map(elem => dataSources.genresAPI.getGenre(elem));
    },

    artists: async ({ artistsIds }, args, { dataSources }) => {
      return artistsIds.map(elem => dataSources.artistsAPI.getArtist(elem));
    },

    bands: async ({ bandsIds }, args, { dataSources }) => {
      return bandsIds.map(elem => dataSources.bandsAPI.getBand(elem));
    },

    album: async ({ albumId }, args, { dataSources }) => {
      return dataSources.albumsAPI.getAlbum(albumId);
    },
  },
};

module.exports = { resolversTrack }
