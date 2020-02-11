const fs = require('fs');
const path = require('path');

module.exports = {
  extends: 'react-app',
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo', // 'literal'
        tagName: 'gql',
        schemaString: fs.readFileSync(path.resolve(__dirname, './schema.graphql'), 'utf8'),
      },
    ],
    'jsx-a11y/accessible-emoji': 0,
  },
};
