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

    tracks: async ({ trackIds }, args, { dataSources }) => {
      if(trackIds && trackIds.length) {
        return trackIds.map(elem => dataSources.tracksAPI.getTrack(elem));
      }
      return [];
    },
  },
};

module.exports = { resolversAlbum }
