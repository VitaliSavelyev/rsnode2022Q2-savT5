const resolversUser = {
  Query: {
    user: async (parent, { id }, { dataSources }) => {
      return dataSources.usersAPI.getUser(id)
    },
    jwt(parent, args, { dataSources }) {
      return dataSources.usersAPI.getJWT(args)
    },
  },
  Mutation: {
    createUser(parent, {createUserInput }, { dataSources }) {
      return dataSources.usersAPI.registerUser(createUserInput)
    }
  }
};

module.exports = { resolversUser }
