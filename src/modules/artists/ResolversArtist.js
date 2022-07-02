const resolversArtist = {
  Query: {
    artists: () => {},
    artist: (id) => {}
  },
  Mutation: {
    createArtist(parent, args) {
      const newUser = args;
      return newUser
    },
    updateArtist(parent, args) {
      const newUser = args;
      return newUser
    },
    deleteArtist(parent, args) {
      const newUser = args;
      return newUser
    }
  }
};

module.exports = { resolversArtist }
