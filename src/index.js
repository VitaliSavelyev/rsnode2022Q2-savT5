const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./modules/TypeDefs');
const { resolvers } = require('./modules/resolvers');
const UsersAPI = require('./modules/users/ServerUser')

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        usersAPI: new UsersAPI(),
      };
    },
    context: ({ req }) => {
      console.log(100, req.headers.authorization)
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


// const {graphqlHTTP} = require('express-graphql');
// const schema = require('./schema/schema')
//
// const app = express();
//
// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }))
//
// app.listen(3000, () => {
//   console.log('Server run 3000 PORT')
// })
