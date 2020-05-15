const fs = require('fs');
const { GraphQLModule } = require('@graphql-modules/core');

const typeDefs = fs.readFileSync('./src/modules/Matters/types.gql', 'utf8');
const resolvers = require('./resolvers');

const MatterModule = new GraphQLModule({
  typeDefs,
  resolvers,
});

module.exports = MatterModule;
