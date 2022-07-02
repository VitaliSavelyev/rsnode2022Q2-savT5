

const resolversBand = {
  Query: {
    bands: () => {},
    band: (id) => {}
  },
  Mutation: {
    createBand(parent, args) {
      const newUser = args;
      return newUser
    },
    updateBand(parent, args) {
      const newUser = args;
      return newUser
    },
    deleteBand(parent, args) {
      const newUser = args;
      return newUser
    }
  }
};

module.exports = { resolversBand }
