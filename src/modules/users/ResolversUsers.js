const resolversUser = {
  Query: {
    user: (id) => {}
  },
  Mutation: {
    createUser(parent, args) {
      const newUser = args;
      return newUser
    },
    getJWT(parent, args) {
      const newUser = args;
      return newUser
    },
  }
};

module.exports = { resolversUser }
