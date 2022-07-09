

const resolversGenre = {
  Query: {
    genre: (parent, { id }, { dataSources }) => {
      return dataSources.genresAPI.getGenre(id);
    },
    genres: (parent, { offset, limit }, { dataSources }) => {
      return dataSources.genresAPI.getGenres(offset, limit);
    },
  },
  Mutation: {
    createGenre: (parent, { createGenreInput }, { dataSources }) => {
      return dataSources.genresAPI.createGenre(createGenreInput);
    },
    deleteGenre: (parent, { id }, { dataSources }) => {
      return dataSources.genresAPI.deleteGenre(id);
    },
    updateGenre: (parent, { id ,updateGenreInput }, { dataSources }) => {
      return dataSources.genresAPI.updateGenre(id, updateGenreInput);
    },
  },
  Genre: { id: (parent) => parent._id },
};

module.exports = { resolversGenre }
