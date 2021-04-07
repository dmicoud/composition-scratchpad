const http = require('http');
const { ApolloServer, gql } = require('apollo-server-express');
const graphqlVoyager = require('graphql-voyager/middleware').express;
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

app.use('/voyager', graphqlVoyager({ endpointUrl: '/graphql' }));
server.applyMiddleware({ app });

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server  ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`🛰️  Voyager ready at http://localhost:${PORT}/voyager`)
})