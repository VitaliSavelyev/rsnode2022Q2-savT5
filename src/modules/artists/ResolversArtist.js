const resolversArtist = {
  Query: {
    artist: (parent, {id}, {dataSources}) => {
      return dataSources.artistsAPI.getArtist(id);
    },
    artists: async (parent, {offset, limit}, {dataSources}) => {
      return await dataSources.artistsAPI.getArtists(offset, limit);
    },
  },
  Mutation: {
    createArtist: (parent, {createArtistInput}, {dataSources}) => {
      return dataSources.artistsAPI.createArtist(createArtistInput);
    },
    deleteArtist: (parent, {id}, {dataSources}) => {
      return dataSources.artistsAPI.deleteArtist(id);
    },
    updateArtist: (parent, {id, updateArtistInput}, {dataSources}) => {
      return dataSources.artistsAPI.updateArtist(id, updateArtistInput);
    },
  },
  Artist: {
    id: (parent) => {
      return parent._id;
    },
    bands: async ({ bandsIds }, args, {dataSources}) => {
      if(bandsIds && bandsIds.length) {
        return bandsIds.map(elem => dataSources.bandsAPI.getBand(elem));
      }
      return []
    },
  },
};

module.exports = { resolversArtist }
