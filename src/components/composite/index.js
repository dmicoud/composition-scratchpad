'use strict';

const GraphQLComponent = require('graphql-component');
const Property = require('../property');
const Reviews = require('../reviews');
const Users = require('../users');
const { AuthorizationDirective } = require('../composite/directives/authorization')
const { KeyFieldDirective } = require('./directives/keyField')
const resolvers = require('./resolvers');
const types = require('./types');

class Composite extends GraphQLComponent {
  constructor(options) {

    const propertyComponent = new Property();
    const reviewsComponent = new Reviews();
    const usersComponent = new Users();

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
        },
        {
          component: usersComponent,
          exclude: ['Query.*']
        }
      ],
      directives: {
        authorization: AuthorizationDirective,
        keyField: KeyFieldDirective
      },
    });

    this.propertyComponent = propertyComponent;
    this.reviewsComponent = reviewsComponent;
    this.usersComponent = usersComponent;
  }
}

module.exports = Composite;