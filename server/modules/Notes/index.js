const fs = require('fs');
const { GraphQLModule } = require('@graphql-modules/core');

const typeDefs = fs.readFileSync('./modules/Notes/types.gql', 'utf8');
const resolvers = require('./resolvers');

const NoteModule = new GraphQLModule({
  typeDefs,
  resolvers,
});

module.exports = NoteModule;
