const fs = require('fs');
const { GraphQLModule } = require('@graphql-modules/core');

const typeDefs = fs.readFileSync('./src/modules/Users/types.gql', 'utf8');
const resolvers = require('./resolvers');

const UserModule = new GraphQLModule({
  typeDefs,
  resolvers,
});

module.exports = UserModule;
