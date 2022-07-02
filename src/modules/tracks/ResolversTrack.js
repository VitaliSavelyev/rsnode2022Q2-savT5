const resolversTrack = {
  Query: {
    tracks: () => {},
    track: (id) => {}
  },
  Mutation: {
    createTrack(parent, args) {
      const newUser = args;
      return newUser
    },
    updateTrack(parent, args) {
      const newUser = args;
      return newUser
    },
    deleteTrack(parent, args) {
      const newUser = args;
      return newUser
    }
  }
};

module.exports = { resolversTrack }
