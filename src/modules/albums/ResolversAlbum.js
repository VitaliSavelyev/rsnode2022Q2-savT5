const resolversAlbum = {
  Query: {
    albums: () => {},
    album: (id) => {}
  },
  Mutation: {
    createAlbum(parent, args) {
      const newUser = args;
      return newUser
    },
    updateAlbum(parent, args) {
      const newUser = args;
      return newUser
    },
    deleteAlbum(parent, args) {
      const newUser = args;
      return newUser
    }
  }
};

module.exports = { resolversAlbum }
