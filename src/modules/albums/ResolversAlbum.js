const resolversAlbum = {
  Query: {
    album: (parent, { id }, { dataSources }) => {
      return dataSources.albumsAPI.getAlbum(id)
          ;
    },
    albums: (parent, { offset, limit }, { dataSources }) => {
      return dataSources.albumsAPI.getAlbums(offset, limit);
    },
  },
  Mutation: {
    createAlbum: (parent, { createAlbumInput }, { dataSources }) => {
      return dataSources.albumsAPI.createAlbum(createAlbumInput);
    },
    deleteAlbum: (parent, { id }, { dataSources }) => {
      return dataSources.albumsAPI.deleteAlbum(id)
          ;
    },
    updateAlbum: (parent, { id, updateAlbumInput }, { dataSources }) => {
      return dataSources.albumsAPI.updateAlbum(id, updateAlbumInput);
    },
  },

  Album: {
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

    tracks: async ({ trackIds }, args, { dataSources }) => {
      return trackIds.map(elem => dataSources.tracksAPI.getTrack(elem));
    },
  },
};

module.exports = { resolversAlbum }
