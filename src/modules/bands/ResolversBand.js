const resolversBand = {
    Query: {
        band: (parent, {id}, {dataSources}) => {
            return dataSources.bandsAPI.getBand(id);
        },
        bands: async (parent, {offset, limit}, {dataSources}) => {
            return await dataSources.bandsAPI.getBands(offset, limit);
        },
    },
    Mutation: {
        createBand: (parent, {createBandInput}, {dataSources}) => {
            return dataSources.bandsAPI.createBand(createBandInput);
        },
        deleteBand: (parent, {id}, {dataSources}) => {
            return dataSources.bandsAPI.deleteBand(id);
        },
        updateBand: (parent, {id, updateBandInput}, {dataSources}) => {
            return dataSources.bandsAPI.updateBand(id, updateBandInput);
        },
    },
    Band: {
        id: (parent) => {
            return parent._id;
        },
        genres: async ({ genresIds }, args, {dataSources}) => {
            return genresIds.map(elem => dataSources.genresAPI.getGenre(elem));
        },
    },
}

module.exports = {resolversBand}
