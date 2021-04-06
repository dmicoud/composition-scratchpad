'use strict';

const GraphQLComponent = require('graphql-component');
const resolvers = require('./resolvers');
const types = require('./types');

class UserComponent extends GraphQLComponent {
  constructor(options) {
    super({
      types,
      resolvers,
      ...options
    });
  }
}

module.exports = UserComponent;