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
        genres: async ({genresIds}, args, {dataSources}) => {
            if (genresIds && genresIds.length) {
                return genresIds.map(elem => dataSources.genresAPI.getGenre(elem));
            }
            return [];
        },
        members: async ({members}, args, {dataSources}) => {
            return members.map(async (elem) => {
                let member = await dataSources.artistsAPI.getArtist(elem.id)
                return {
                    id: elem.id,
                    firstName: member?.firstName || '',
                    secondName: member?.secondName || '',
                    middleName: member?.middleName || '',
                    instrument: elem?.instrument || '',
                    years: elem?.years || []
                }
            });
        },
    },
}

module.exports = {resolversBand}
