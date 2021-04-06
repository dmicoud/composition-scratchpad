'use strict';

const resolvers = {
  Query: {
    property(_, { id }, { _dataSources }) {
      return {
        id,
        name: 'A Beautiful property in the Texas Hill country',
        geoLocation: {
          latitude: 30.72,
          longitude: -98.47
        }
      }
    }
  }
};

module.exports = resolvers;