'use strict';

const resolvers = {
  Query: {
    reviews(_, { propertyId }, { _dataSources }) {
      return [
        {
          propertyId,
          stars: 4,
          body: 'Great stay last spring.',
        },
        {
          propertyId,
          stars: 5,
          body: 'We loved the landscape.',
        },
      ]
    }
  }
};

module.exports = resolvers;