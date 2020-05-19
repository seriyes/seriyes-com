const fs = require('fs');
const { GraphQLModule } = require('@graphql-modules/core');

const typeDefs = fs.readFileSync('./src/modules/Folders/types.gql', 'utf8');
const resolvers = require('./resolvers');

const FolderModule = new GraphQLModule({
  typeDefs,
  resolvers,
});

module.exports = FolderModule;
