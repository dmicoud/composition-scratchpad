'use strict';
const GraphQLComponent = require('graphql-component');

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
    }
  }
};

module.exports = resolvers;