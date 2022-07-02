const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const { typeDefs } = require('./modules/TypeDefs');
const { resolvers } = require('./modules/resolvers')

async function startApolloServer(){
  const server = new ApolloServer({typeDefs, resolvers})
  const app = express();
  await server.start();
  server.applyMiddleware({app, path: '/graphql'});

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
