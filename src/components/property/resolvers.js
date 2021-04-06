'use strict';

const resolvers = {
  Query: {
    property(_, { id }, { _dataSources }) {
      return {
        id,
        name: 'A Beautiful property in the Texas Hill country',
      }
    }
  }
};

module.exports = resolvers;