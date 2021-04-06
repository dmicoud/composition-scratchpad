'use strict';

const resolvers = {
  Query: {
    user(_, { id }, { _dataSources }) {
      return {
        id,
        name: 'Didier Micoud',
      }
    }
  }
};

module.exports = resolvers;