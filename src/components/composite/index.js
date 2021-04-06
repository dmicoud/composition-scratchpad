'use strict';

const GraphQLComponent = require('graphql-component');
const Destination = require('../destination');
const Property = require('../property');
const Reviews = require('../reviews');
const Users = require('../users');
const { AuthorizationDirective } = require('../composite/directives/authorization')
const { KeyFieldDirective } = require('./directives/keyField')
const { KeyFieldsDirective } = require('./directives/keyFields')
const resolvers = require('./resolvers');
const types = require('./types');

class Composite extends GraphQLComponent {
  constructor(options) {

    const destinationComponent = new Destination();
    const propertyComponent = new Property();
    const reviewsComponent = new Reviews();
    const usersComponent = new Users();

    super({
      types,
      resolvers,
      ...options,
      imports: [
        {
          component: destinationComponent,
        },
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
        keyField: KeyFieldDirective,
        keyFields: KeyFieldsDirective
      },
    });

    this.destinationComponent = destinationComponent;
    this.propertyComponent = propertyComponent;
    this.reviewsComponent = reviewsComponent;
    this.usersComponent = usersComponent;
  }
}

module.exports = Composite;