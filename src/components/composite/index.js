'use strict';

const GraphQLComponent = require('graphql-component');
const Property = require('../property');
const Reviews = require('../reviews');
const resolvers = require('./resolvers');
const types = require('./types');

class Composite extends GraphQLComponent {
  constructor(options) {
    const propertyComponent = new Property();
    const reviewsComponent = new Reviews();

    super({
      types,
      resolvers,
      ...options,
      imports: [
        {
          component: propertyComponent,
        },
        {
          component: reviewsComponent,
        }
      ]
    });

    this.propertyComponent = propertyComponent;
    this.reviewsComponent = reviewsComponent;
  }
}

module.exports = Composite;