const { SchemaDirectiveVisitor } = require('graphql-tools');
const { Kind } = require('graphql');
const debug = require('debug')('directive');

class KeyFieldDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const directiveArgs = this.args;
    field.resolve = async function (root, args, context, info) {
      debug(`KeyFieldDirective on FIELD: ${field.name}, directiveArgs: ${JSON.stringify(directiveArgs)}`);
      let addKey = false;
      if (!info.fieldNodes[0].selectionSet.selections.find(selection => selection.name.value === directiveArgs.field)) {
        info.fieldNodes[0].selectionSet.selections.push({
          kind: Kind.FIELD,
          name: {
            kind: Kind.NAME,
            value: directiveArgs.field,
          },
        });
        addKey = true;
      }
      const result = resolve.call(this, root, args, context, info);
      if (addKey) {
        info.fieldNodes[0].selectionSet.selections.pop();
      }
      return result;
    }
  }
}

module.exports = { KeyFieldDirective };