

const resolversGenre = {
  Query: {
    genres: () => {},
    genre: (id) => {}
  },
  Mutation: {
    createGenre(parent, args) {
      const newUser = args;
      return newUser
    },
    updateGenre(parent, args) {
      const newUser = args;
      return newUser
    },
    deleteGenre(parent, args) {
      const newUser = args;
      return newUser
    }
  }
};

module.exports = { resolversGenre }
