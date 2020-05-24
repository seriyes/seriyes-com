const fs = require('fs');
const { GraphQLModule } = require('@graphql-modules/core');
const FolderModule = require('../Folders/index');

const typeDefs = fs.readFileSync('./src/modules/Files/types.gql', 'utf8');
const resolvers = require('./resolvers');


const FileModule = new GraphQLModule({
  typeDefs,
  resolvers,
  imports: [
    FolderModule,
  ],
});

module.exports = FileModule;
