const resolversUser = {
  Query: {
    user: async (parent, { id }, { dataSources }) => {
      return dataSources.usersAPI.getUser(id)
    }
  },
  Mutation: {
    createUser(parent, args, { dataSources }) {
      return dataSources.usersAPI.registerUser(args.createUserInput)
    },
    getJWT(parent, args, { dataSources }) {
      return dataSources.usersAPI.getJWT(args)
    },
  }
};

module.exports = { resolversUser }
