// const { ApolloServer } = require('apollo-server');
const http = require('http');
const { ApolloServer, gql } = require('apollo-server-express');
const Path = require('path');
const app = require('express')();
const Composite = require('../components/composite')

const PORT = 4000;

const { schema, context } = new Composite({
  useMocks: !!process.env.GRAPHQL_MOCK,
  preserveResolvers: true,
  dataSourceOverrides: []
});

const server = new ApolloServer({ schema, context, tracing: true });

server.applyMiddleware({ app });

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
})