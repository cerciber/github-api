// Imports
const _ = require('lodash');

// Exports
module.exports = _.cloneDeep({
  GitHubApiRepository: {
    title: 'gitHubApiRepository',
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
    },
    example: {
      id: '345345454',
      name: 'material-design-icons',
      description: 'Material Design icons by Google',
    },
    required: ['id', 'name', 'description'],
  },
});
