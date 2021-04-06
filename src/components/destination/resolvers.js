'use strict';

const resolvers = {
  Query: {
    destination(_, { id }, { _dataSources }) {
      return {
        geoLocation: {
          latitude: 30.7,
          longitude: -98.4
        },
        name: 'Texas Hill Country',
        pointOfInterests: ['Lake LBJ', 'Enchanted Rock', 'Marble Falls']
      }
    }
  }
};

module.exports = resolvers;