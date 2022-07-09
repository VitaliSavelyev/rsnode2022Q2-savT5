const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./modules/TypeDefs');
const { resolvers } = require('./modules/resolvers');
const UsersAPI = require('./modules/users/ServerUser')
const GenresAPI = require("./modules/genres/ServerGenres");
const BandsAPI = require("./modules/bands/ServerBand");
const ArtistsAPI = require("./modules/artists/ServerArtist");
const TracksAPI = require("./modules/tracks/ServerTrack");
const AlbumsAPI = require("./modules/albums/ServerAlbum");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        usersAPI: new UsersAPI(),
        genresAPI: new GenresAPI(),
        bandsAPI: new BandsAPI(),
        artistsAPI: new ArtistsAPI(),
        tracksAPI: new TracksAPI(),
        albumsAPI: new AlbumsAPI()
      };
    },
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      return { token };
    },
  })
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(3000, () => {
    console.log(`Server is listening on port ${3000}${server.graphqlPath}`);
  })
}

startApolloServer();
