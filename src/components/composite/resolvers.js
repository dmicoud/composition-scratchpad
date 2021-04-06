'use strict';
const GraphQLComponent = require('graphql-component');
const { Kind } = require('graphql');

const resolvers = {
  Query: {
    async listing(_, { id }, context, info) {
      return GraphQLComponent.delegateToComponent(this.propertyComponent, {
        contextValue: context,
        info,
        targetRootField: 'property',
        args: {
          id
        }
      });
    }
  },
  Property: {
    async reviews(root, args, context, info) {
      return GraphQLComponent.delegateToComponent(this.reviewsComponent, {
        contextValue: context,
        info,
        targetRootField: 'reviews',
        args: {
          propertyId: root.id
        }
      });
    },
    async destinationDetails(root, args, context, info) {
      return GraphQLComponent.delegateToComponent(this.destinationComponent, {
        contextValue: context,
        info,
        targetRootField: 'destination',
        args:
        {
          latitude: root.geoLocation.latitude,
          longitude: root.geoLocation.longitude
        }
      });
    }
  },
  Review: {
    async reviewer(root, args, context, info) {
      return GraphQLComponent.delegateToComponent(this.usersComponent, {
        contextValue: context,
        info,
        targetRootField: 'user',
        args: {
          id: root.userId
        }
      });
    }
  }
};

module.exports = resolvers;