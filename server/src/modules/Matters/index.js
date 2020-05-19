const fs = require('fs');
const { GraphQLModule } = require('@graphql-modules/core');
const FolderModule = require('../Folders/index');

const typeDefs = fs.readFileSync('./src/modules/Matters/types.gql', 'utf8');
const resolvers = require('./resolvers');


const MatterModule = new GraphQLModule({
  // imports: {
  //   FolderModule,
  // },
  typeDefs,
  resolvers,
});

module.exports = MatterModule;
