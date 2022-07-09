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
      console.log(bandsIds)
      const promises = bandsIds.map(elem => {
        return new Promise(async (resolve, reject) => {
          const band = await dataSources.bandsAPI.getBand(elem);
          band.id = band._id;
          resolve(band);
        })
      })
      let bands = await Promise.all(promises);
      return bands;
    },
  },
};

module.exports = { resolversArtist }
