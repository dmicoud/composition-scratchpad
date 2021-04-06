const { SchemaDirectiveVisitor } = require('graphql-tools');
const { Kind } = require('graphql');
const debug = require('debug')('directive');

class KeyFieldsDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const directiveArgs = this.args;
    field.resolve = async function (root, args, context, info) {
      debug(`KeyFieldsDirective on FIELD: ${field.name}, directiveArgs: ${JSON.stringify(directiveArgs)}`);
      info.fieldNodes[0].selectionSet.selections.push({
        kind: Kind.FIELD,
        name: {
          kind: Kind.NAME,
          value: 'geoLocation',
        },
        selectionSet: {
          kind: Kind.SELECTION_SET,
          selections: [
            {
              kind: Kind.FIELD,
              name: {
                kind: Kind.NAME,
                value: 'latitude',
              }
            },
            {
              kind: Kind.FIELD,
              name: {
                kind: Kind.NAME,
                value: 'longitude',
              }
            }
          ]
        }
      });
      return resolve.call(this, root, args, context, info);
    }
  }
}

module.exports = { KeyFieldsDirective };