'use strict';

const resolvers = {
  Query: {
    reviews(_, { propertyId }, { _dataSources }) {
      return [
        {
          propertyId,
          userId: 111,
          stars: 4,
          body: 'Great stay last spring.',
        },
        {
          propertyId,
          userId: 222,
          stars: 5,
          body: 'We loved the landscape.',
        },
      ]
    }
  }
};

module.exports = resolvers;