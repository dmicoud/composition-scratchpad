const { SchemaDirectiveVisitor } = require('graphql-tools');
const debug = require('debug')('directive');

class AuthorizationDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const directiveArgs = this.args;
    field.resolve = async function (root, args, context, info) {
      debug(`AuthorizationDirective on FIELD: ${field.name}, directiveArgs: ${JSON.stringify(directiveArgs)}`);
      return resolve.call(this, root, args, context, info);
    }
  }
}

module.exports = { AuthorizationDirective };